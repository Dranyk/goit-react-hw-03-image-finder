import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';

class ImageGalleryItem extends Component {
 
  state = {
    showModal: false,
  };

  static propTypes = {
      image: PropTypes.shape({
        largeImageURL: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
      }).isRequired,
    };

  toggleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }));
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props.image;

    return (
      <>
        <img className={css.image} src={webformatURL} alt={tags}   onClick={this.toggleModal}/>
        {this.state.showModal && (
          <Modal 
          onClose={this.toggleModal}
          >
            <img
            src={largeImageURL}
            alt={tags}
          />
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
