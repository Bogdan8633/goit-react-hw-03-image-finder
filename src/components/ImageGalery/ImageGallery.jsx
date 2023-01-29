import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import styles from './imageGallery.module.css';

const ImageGallery = ({ items, showImage }) => {
  return (
    <ul className={styles.ImageGallery}>
      {items.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          showImage={showImage}
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.defaultProps = {
  items: [],
};
