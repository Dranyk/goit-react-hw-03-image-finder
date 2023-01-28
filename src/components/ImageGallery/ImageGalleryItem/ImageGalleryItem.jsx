import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';

class ImageGalleryItem extends Component {
 
  state = {
    showModal: false,
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
