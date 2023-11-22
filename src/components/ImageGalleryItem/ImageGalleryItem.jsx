import React from 'react';


export class ImageGalleryItem extends React.Component {
  render() {
    const { key, image, alt } = this.props;
    console.log(image);
    return (
      <li key={key}>
            <img src={image} alt={alt} />
            {console.log(key)}
      </li>
    );
  }
}
