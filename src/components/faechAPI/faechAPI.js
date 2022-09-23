import axios from 'axios';
import PropTypes from 'prop-types';

const faechAPI = async (search, page = 1) => {
  const API_KEY = '29443108-1d40bf98a6be12a2b510fdb64';
  const url = 'https://pixabay.com/api/';
  const per_page = 12;
  const params = {
    key: API_KEY,
    q: search,
    per_page,
    page,
  };

  return await axios.get(url, { params }).then(res => {
    return res.data.hits;
  });
};
faechAPI.propTypes = {
  search: PropTypes.node,
  page: PropTypes.number,
};

export default faechAPI;
