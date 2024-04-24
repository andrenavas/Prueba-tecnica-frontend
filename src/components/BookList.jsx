import { useSelector } from 'react-redux';
import CardBook from './CardBook'; // Importa el componente CardBook

const BookList = () => {
  // const filteredBooks = useSelector(selectFilteredBooks);
  const books = useSelector(state => state.books.books);
  return (

    <div className='mt-14 mb-12'>
      <div className='container'>
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          
          <h1 className='text-3xl font-bold'>Mi Lista de Lectura</h1>
          <p className='text-sm text-primary'>Mis libros pendientes por leer</p>
        </div>
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
            
          <ul>
            {books.map((book, index) => (
              <div key={index}>
                <CardBook book={book} /> {/* Renderiza el componente CardBook y pasa el libro como prop */}
              </div>
            ))}
          </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookList;
