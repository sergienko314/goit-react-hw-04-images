import { ModalWindow, BackDrop, Img } from './Modal.styled';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Modal = ({ pictur, modalOn }) => {
  const closeModel = e => {
    if (e.target === e.currentTarget) {
      modalOn(null);
    }
  };

  return ReactDOM.createPortal(
    <BackDrop onClick={closeModel}>
      <ModalWindow>
        <Img src={pictur.largeImageURL} alt={pictur.tags} />
      </ModalWindow>
    </BackDrop>,
    document.getElementById('modal')
  );
};

Modal.propTypes = {
  pictur: PropTypes.string,
  modalOn: PropTypes.func,
};

export default Modal;
