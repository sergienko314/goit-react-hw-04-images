import { ListGallery } from './ImageGallery.styled.js';
import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ arrayPictures, modalOn }) => {
  return (
    <ListGallery>
      {arrayPictures.map(({ id, tags, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          id={id}
          tags={tags}
          webformatURL={webformatURL}
          modalOn={modalOn}
          largeImageURL={largeImageURL}
        />
      ))}
    </ListGallery>
  );
};

ImageGallery.propTypes = {
  arrayPictures: PropTypes.array,
  modalOn: PropTypes.func,
};

export default ImageGallery;
