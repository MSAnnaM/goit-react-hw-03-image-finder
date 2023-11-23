import React from 'react';
import styles from './App.module.css'
import { fetchImage } from 'services/api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export class App extends React.Component {
  state = {
    q: '',
    images: [],
    page: 1,
    modal: false,
    selectedImg: '',
    loadMore: false,
    isLoading: false,
  };
  componentDidUpdate(_, prevState) {
    if (prevState.q !== this.state.q) {
      this.getImage();
    }
  }

  getImage = async () => {
    const { q, page } = this.state;
    try {
      this.setState({
        isLoading:true,
      })
      console.log('Fetching images for:', q, 'on page:', page);
      const customerImages = await fetchImage(q, page);
       console.log('Fetched images:', customerImages);
      this.setState((prevState) => ({
        images: [...prevState.images, ...customerImages.hits],
        page: prevState.page + 1,
        loadMore: page < Math.ceil(customerImages.totalHits / 12)
      }))
    } catch (error) {
      console.error(error);

    } finally {
      this.setState({ isLoading: false });
      console.log(this.state.page);
      console.log(this.state.loadMore);

    }
  };
  submitForm = newSearch => {
    this.setState({q: newSearch})
  };

  onLoadMore = () => {
    if (this.state.loadMore) {
      this.getImage();
    }
  }
  imageOnClick = (selectedImg) => {
    console.log(selectedImg);
    this.setState({
      modal: true,
      selectedImg: selectedImg,
    })
  }

  closeModal = () => {
    this.setState({modal: false, selectedImg: '',})
  }
  render() {
    const { isLoading, loadMore, modal, selectedImg } = this.state;
    return (
      <div className={styles.App}>
        
        <Searchbar onSubmit={this.submitForm} />
         {isLoading && <Loader />}
        <ImageGallery images={this.state.images} onClick={this.imageOnClick} />
        {loadMore && <Button onClick={this.onLoadMore} />}
        {modal && <Modal image={selectedImg} onClose={this.closeModal} />}
      </div>
    );
  }
}
