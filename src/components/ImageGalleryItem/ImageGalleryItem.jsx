import styles from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ id, src, bigImage }) => {
  return (
    <li className={styles.ImageGalleryItem} id={id}>
      <img src={src} alt="image" className={styles.ImageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;

{
  /* <li class="gallery-item">
  <img src="" alt="" />
</li> */
}
