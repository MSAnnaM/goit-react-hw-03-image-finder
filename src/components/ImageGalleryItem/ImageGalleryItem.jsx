import React from 'react';
import styles from './ImageGalleryItem.module.css'


export class ImageGalleryItem extends React.Component {
  render() {
    const { image, alt, onClick, forModal } = this.props;
    return (
      
      <li className={styles.ImageGalleryItem} onClick={() => onClick(forModal)}>
        <img src={image} alt={alt} className={styles.ImageGalleryItem_image} />
        
      </li>
    );
  }
}
