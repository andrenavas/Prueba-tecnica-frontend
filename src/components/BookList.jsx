import { useSelector } from 'react-redux';
import CardBook from './CardBook'; // Importa el componente CardBook

const BookList = () => {
    const books = useSelector(state => state.books.books);
    return (
        <div>
            <h2>Mi Lista de Lectura</h2>
            <ul>
                {books.map((book, index) => (
                    <div key={index}>
                        <CardBook book={book} /> {/* Renderiza el componente CardBook y pasa el libro como prop */}
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default BookList;
