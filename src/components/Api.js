import PropTypes from 'prop-types';

const MAIN_URL =
  'https://pixabay.com/api/?key=31971160-1dc39940828f562ba2a47e6da&image_type=photo&orientation=horizontal';
 
export const perPage = 12;

const fetchImages = async (search, page) => {
  return fetch(`${MAIN_URL}&q=${search}&page=${page}&per_page=${perPage}`)
    .then(response => response.json())
    .then(data => {

      return data;
    });
};

export default fetchImages;

fetchImages.propTypes = {
  search: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};