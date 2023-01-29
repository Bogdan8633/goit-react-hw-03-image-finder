import { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGalery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal.jsx';

import { searchImages } from '../shared/services/gallery-api';

import styles from './app.module.css';

export class App extends Component {
  state = {
    search: '',
    items: [],
    loading: false,
    error: null,
    page: 1,
    showModal: false,
    imageDetails: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.fetchImages();
    }
  }

  async fetchImages() {
    try {
      this.setState({ loading: true });
      const { search, page } = this.state;
      const data = await searchImages(search, page);
      this.setState(({ items }) => ({ items: [...items, ...data] }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  searchPictures = ({ search }) => {
    this.setState({ search, items: [], page: 1 });
  };

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  showImage = largeImageURL => {
    this.setState({ showModal: true, imageDetails: largeImageURL });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      imageDetails: null,
    });
  };

  render() {
    const { items, loading, error, showModal, imageDetails } = this.state;
    const { searchPictures, loadMore, showImage, closeModal } = this;

    return (
      <>
        <Searchbar onSubmit={searchPictures} />
        <ImageGallery items={items} showImage={showImage} />
        {loading && <Loader />}
        {error && <p className={styles.errorMessage}>{error}</p>}
        {Boolean(items.length) && !loading && <Button onloadMore={loadMore} />}
        {showModal && (
          <Modal close={closeModal}>
            <img src={imageDetails} alt="" />
          </Modal>
        )}
      </>
    );
  }
}
