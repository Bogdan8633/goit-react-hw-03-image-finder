import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import styles from './imageGallery.module.css';

const ImageGallery = ({ items }) => {
  return (
    <ul className={styles.ImageGallery}>
      {items.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          id={id}
          src={webformatURL}
          bigImage={largeImageURL}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.defaultProps = {
  items: [],
};

// class ImageGallery extends Component {
//   state = {
//     items: [],
//     loading: false,
//     error: null,
//   };

// componentDidMount() {
//   this.setState({ loading: true });
//   axios
//     .get(
//       'https://pixabay.com/ai/?q=cat&page=1&key=31955904-7341a4dddd0022ded7445126a&image_type=photo&orientation=horizontal&per_page=12'
//     )
//     .then(({ data }) => {
//       this.setState({ items: data.hits });
//     })
//     .catch(error => {
//       this.setState({ error: error.message });
//     })
//     .finally(() => this.setState({ loading: false }));
// }

//   render() {
//     // const { items, loading, error } = this.state;

//     return (
//       <>
//         <input placeholder="Search images" />
//         {/* {error && <p>Something goes wrong. Please try again later</p>}
//         {loading && <p>...Loading</p>}
//         <ul className={styles.ImageGallery}>
//           {items.map(({ id, webformatURL, largeImageURL }) => (
//             <ImageGalleryItem
//               key={id}
//               id={id}
//               src={webformatURL}
//               bigImage={largeImageURL}
//             />
//           ))}
//         </ul> */}
//       </>
//     );
//   }
// }

// export default ImageGallery;
