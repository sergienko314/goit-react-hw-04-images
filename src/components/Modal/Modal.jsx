import { ModalWindow, BackDrop, Img } from './Modal.styled';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Modal = ({ pictur, modalOn, handleKeyDown }) => {
  useEffect(() => {
    

    window.addEventListener('keydown', handleKeyDown);
    return ()=> { window.removeEventListener('keydown', handleKeyDown) }
  }
  )
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
  handleKeyDown: PropTypes.func,
  pictur: PropTypes.shape({
    largeImageURL: PropTypes.string,
    tags : PropTypes.string,
  }),
  modalOn: PropTypes.func,
};

export default Modal;
