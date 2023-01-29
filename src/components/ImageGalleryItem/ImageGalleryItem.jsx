import styles from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, largeImageURL, showImage }) => {
  return (
    <li
      className={styles.ImageGalleryItem}
      onClick={() => {
        showImage(largeImageURL);
      }}
    >
      <img src={webformatURL} alt="" className={styles.ImageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;
