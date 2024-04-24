import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addBook } from '../redux/bookSlice.js';

const Button = ({ book }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log("Botón 'Agregar a mi lista' clickeado");
    dispatch(addBook(book));
  };

  return (
    <button className="bg-tertiary w-auto py-1 px-5 rounded-full text-gray-50 font-bold" onClick={handleClick}>
      Agregar
    </button>
  );
}

export default Button;

Button.propTypes = {
  book: PropTypes.object.isRequired,
};

