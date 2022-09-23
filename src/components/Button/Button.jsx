import { Btn } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ nextPage }) => {
  return <Btn onClick={nextPage}>Load more</Btn>;
};

Button.propTypes = {
  nextPage: PropTypes.func,
};

export default Button;
