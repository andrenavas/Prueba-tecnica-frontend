import PropTypes from 'prop-types';

import { addBookList } from '../api/booksAPI';

const Button = ({ book }) => {
    const handleClick = () => {
        addBookList(book)
            .then(() => {
                alert('Libro agregado a tu lista');
            })
            .catch((error) => {
                alert('Error: ' + error.message);
            });
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