import { Component } from 'react';
// import axios from 'axios';

import Searchbar from './Searchbar/Searchbar';
import ImageGalleryItem from './ImageGalery/ImageGallery';
import axios from 'axios';

import styles from './gallerySearch.module.css';

class GallerySearch extends Component {
  state = {
    search: '',
    items: [],
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search } = this.state;
    if (prevState.search !== search) {
      this.setState({ loading: true });
      axios
        .get(
          `https://pixabay.com/ai/?q=${search}&page=1&key=31955904-7341a4dddd0022ded7445126a&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then(({ data }) => {
          this.setState({ items: data.hits });
        })
        .catch(error => {
          this.setState({ error: error.message });
        })
        .finally(() => this.setState({ loading: false }));
    }
  }

  searchImages = ({ search }) => {
    this.setState({ search });
  };

  render() {
    const { items, loading, error } = this.state;
    const { searchImages } = this;

    return (
      <>
        <Searchbar onSubmit={searchImages} />
        <ImageGalleryItem items={items} />
        {loading && <p>...Loading...but you must CHANGE this component</p>}
        {error && <p className={styles.errorMessage}>{error}</p>}
      </>
    );
  }
}

export default GallerySearch;
