import { Component } from 'react';
import fetchImages from './Api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {

  state = {
    showLoader: false,
    showStartTitle: true,
    images: [],
    page: 1,
    query: '',
    totalFound: 0,
    scroll: 0,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.setState({ showLoader: true });

      fetchImages(this.state.query, this.state.page)
        .then(data => {
          if (!data.hits.length) {
            alert('No images found due to your search inquiry');
          } else {
            this.setState(prevState => ({
              showStartTitle: false,
              images: [...prevState.images, ...data.hits],
              totalFound: data.totalHits,
              scroll: document.documentElement.scrollHeight,
            }));
          }
        })
        .catch(error => alert(error))
        .finally(prevState =>
          this.setState({
            showLoader: false,
          })
        );
    }

    if (prevState.scroll !== this.state.scroll && this.state.page > 1) {
      window.scrollTo({
        top: this.state.scroll - 240,
        behavior: 'smooth',
      });
    }
  }

  searchQuery = newQuery => {
    if (newQuery.trim() !== this.state.query) {
      this.setState({
        page: 1,
        query: newQuery.trim(),
        images: [],
      });
    }
  };

  render() {
    const { images } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.searchQuery} />
        <ImageGallery images={images} />
      </>
    );
  }
}

export default App;
