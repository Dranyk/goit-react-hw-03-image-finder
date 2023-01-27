import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './Searchbar.module.css';

class Searchbar extends Component {

    state = {
      searchQuery: '',
    };

    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
      };

  
    onSearchInput = evt => {
      this.setState({ [evt.currentTarget.name]: evt.currentTarget.value });
    };
  
    handleSubmit = evt => {
      evt.preventDefault();
  
      if (!this.state.searchQuery.trim()) {
        return alert('Empty query. Please input something for search');
      }
  
      this.props.onSubmit(this.state.searchQuery);
    };
  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}></span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            name="searchQuery"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.onSearchInput}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
