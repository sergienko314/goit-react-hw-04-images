import { ListItem, Img } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';
// import { ThreePSharp } from '@mui/icons-material';

const ImageGalleryItem = ({ tags, webformatURL, modalOn, largeImageURL }) => {
  return (
    <ListItem>
      <Img
        src={webformatURL}
        alt={tags}
        onClick={() => modalOn({ largeImageURL, tags })}
      />
    </ListItem>
  );
};

ImageGalleryItem.propTypes = {
  tags: PropTypes.string,
  webformatURL: PropTypes.string,
  modalOn: PropTypes.func,
  largeImageURL: PropTypes.string,
};

export default ImageGalleryItem;
