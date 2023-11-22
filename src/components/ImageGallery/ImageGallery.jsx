import React from 'react';
import styles from './ImageGallery.module.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends React.Component {


    render() {
        const { images } = this.props;
        
        return (
        <ul className={styles.gallary}>
            {console.log(images)}
            {images.map(({id, pageURL, tags}) => (
                <ImageGalleryItem key={id} image={pageURL} alt={tags} />
            ))}

    </ul>)
    }
    
}