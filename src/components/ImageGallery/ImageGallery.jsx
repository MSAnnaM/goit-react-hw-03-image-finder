import React from 'react';
import styles from './ImageGallery.module.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends React.Component {


    render() {
        const { images, onClick } = this.props;
        
        return (
        <ul className={styles.gallary}>
            {images.map(({id, webformatURL, tags, largeImageURL}) => (
                <ImageGalleryItem key={id} image={webformatURL} alt={tags} onClick={onClick} forModal={largeImageURL} />
                
            ))}

    </ul>)
    }
    
}