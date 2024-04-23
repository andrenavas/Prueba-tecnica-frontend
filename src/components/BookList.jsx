import { useQuery } from "@tanstack/react-query";
import { getBooks } from "../api/booksAPI";

const BookList = () => {

  const { isLoading, data: response, isError, error } = useQuery({
    queryKey: ['books'],
    queryFn: getBooks
  });

  if (isLoading) return <div>Cargando...</div>
  else if (isError) return <div> Error: {error.message}</div>

  const library = response?.default?.library ?? [];
  return (
    library.map((book, index) => (
      <div key={index}>
        <h3>{book.book.title}</h3>
        <p>{book.book.genre}</p>
        <p>{book.book.synopsis}</p>
        <p>{book.book.year}</p>
        <img src={book.book.cover} alt={book.book.title} />
        <button>Agregar a mi Lista</button>

      </div>

    ))

  )
}

export default BookList;