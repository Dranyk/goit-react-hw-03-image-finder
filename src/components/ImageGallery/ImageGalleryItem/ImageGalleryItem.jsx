import { Component } from "react";
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, tags } = this.props.image;

    return (
       <img className={css.image} src={webformatURL} alt={tags} />
  );
};
}

export default ImageGalleryItem;
