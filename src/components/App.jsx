import React from 'react';
import { fetchImage } from 'services/api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends React.Component {
  state = {
    q: '',
    images: [],
    page: 1,
    showModal: false,
    selectedImage: '',
    hasMoreImages: true,
    isLoading: false,
  };
  componentDidUpdate(_, prevState) {
    if (prevState.q !== this.state.q) {
      this.getImage();
    }
  }

  getImage = async () => {
    const { q, page } = this.state;
    console.log(q, page);
    try {
      this.setState({
        isLoading:true,
      })
      const customerImages = await fetchImage(q, page);
      console.log(customerImages);
      this.setState((prevState) => ({
        images: [...prevState.images, customerImages],
        page: prevState.page + 1,
      }))
    } catch (error) {
      console.error(error);

    }
  };
  submitForm = newSearch => {
    const { q } = this.state;
    this.setState({q: newSearch})
  };
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.submitForm} />
        <ImageGallery images={this.state.images} />
      </div>
    );
  }
}
