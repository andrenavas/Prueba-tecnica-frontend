import PropTypes from 'prop-types';
import Button from "./Button";


const CardBook = ({ book }) => {

  if (!book) {
    return null; // Otra acción, como un mensaje de error o carga
  }
  return (
    <div className='card-book'>
      <h3 className='font-semibold'>{book.title}</h3>
      <p className='text-sm text-gray-600'>{book.genre}</p>
      <p className='card-synopsis'>{book.synopsis}</p>
      <p className='text-yellow-400'>{book.year}</p>
      <img className='h-[220px] w-[150px] object-conver-rounded-md' src={book.cover} alt={book.title} />
      <Button book={book} />
    </div>
  );
};

export default CardBook;

CardBook.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    cover: PropTypes.string.isRequired,
  }).isRequired,
};