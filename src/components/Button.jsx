import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addBook } from '../redux/bookReducer';

const Button = ({ book }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(addBook(book)); // Despacha la acción para agregar el libro a la lista
        alert('Libro agregado a tu lista');
    };

    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
            Agregar a mi lista
        </button>
    );
}

export default Button;

Button.propTypes = {
    book: PropTypes.object.isRequired, // Validación de la propiedad book
};

