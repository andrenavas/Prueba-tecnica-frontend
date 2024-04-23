import PropTypes from 'prop-types';


const CardBook = ({ book }) => {
  
  return (
    <div className='card-book'>
    <h3 className='card-title'>{book.title}</h3>
    <p className='card-genre'>{book.genre}</p>
    <p className='card-synopsis'>{book.synopsis}</p>
    <p className='card-year'>{book.year}</p>
    <img className='card-cover' src={book.cover} alt={book.title} />
    <button className='card-btn'>Agregar a mi Lista</button>
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