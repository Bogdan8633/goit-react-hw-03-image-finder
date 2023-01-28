import styles from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ id, src, bigImage }) => {
  return (
    <li className={styles.ImageGalleryItem} id={id}>
      <img src={src} alt="bigImage" className={styles.ImageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;
