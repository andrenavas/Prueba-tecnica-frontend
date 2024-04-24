import { useSelector } from 'react-redux';
import CardBook from './CardBook';

const BookList = () => {

  const books = useSelector(state => state.books.books);
  return (

    <div className='mt-14 mb-12'>
      <div className='container'>
        {/* contenedor titulo y subtitulo */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <h1 className='text-3xl font-bold'>Mi Lista</h1>
          <p className='text-sm font-medium text-primary'>Favoritos</p>
        </div>
        <div>
          {/* contenedor card */}
          <div className='flex justify-center'>
            <div>
              {books.map((book, index) => (
                <div key={index} className='mb-4'>
                  <CardBook book={book} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookList;
