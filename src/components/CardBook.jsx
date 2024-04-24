import PropTypes from 'prop-types';
import Button from "./Button";


const CardBook = ({ book }) => {

  if (!book) {
    return null;
  }
  return (
    <div className='rounded-xl shadow-lg w-[260px] flex items-center justify-center text-left p-5 bg-gray-100' >
      <div className='p-5 flex flex-col  gap-3'>
        <div className='rounded-xl'>
          <img className='h-60 w-auto object-conver rounded-xl' src={book.cover} alt={book.title} />
        </div>
        <h3 className=' text-l font-semibold'>{book.title}</h3>
        <p className='text-sm'>Género:{book.genre}</p>
        <p className='text-sm font-light'>{book.synopsis}</p>
        <Button book={book} />
      </div>
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