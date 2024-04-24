import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedGenre, selectFilteredBooks } from '../redux/bookReducer';
import { getBooks } from "../api/booksAPI";
import CardBook from "./CardBook";

const Library = () => {

  const dispatch = useDispatch();
  const filteredBooks = useSelector(selectFilteredBooks);
  const selectedGenre = useSelector(state => state.books.selectedGenre);
  const genres = ["Fantasía", "Ciencia ficción", "Zombies", "Terror"];
  
  const handleGenreChange = (event) => {
    const selectedGenre = event.target.value;
    dispatch(setSelectedGenre(selectedGenre));
  };

  const { isLoading, data: response, isError, error } = useQuery({
    queryKey: ['books'],
    queryFn: getBooks
  });

  if (isLoading) return <div>Cargando...</div>
  else if (isError) return <div> Error: {error.message}</div>

  const library = response?.default?.library ?? [];
  let booksToDisplay = library;

  if (selectedGenre) {
    booksToDisplay = library.filter(book => book.genre === selectedGenre);
  } else if (filteredBooks.length) {
    booksToDisplay = filteredBooks;
  }
  // const books = filteredBooks.length ? filteredBooks : library;
  return (
    <div>
    <div>
    <select value={selectedGenre || ""} onChange={handleGenreChange}>
        <option value="">Género</option>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>{genre}</option>
          ))}
        </select>
        </div>
      {booksToDisplay.map((book, index) => (
        <CardBook key={index} book={book.book} />
      ))}
    </div>
  )
}

export default Library;