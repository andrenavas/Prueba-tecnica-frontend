import { useQuery } from "@tanstack/react-query";
import { getBooks } from "../api/booksAPI";
import CardBook from "./CardBook";

const Library = () => {

  const { isLoading, data: response, isError, error } = useQuery({
    queryKey: ['books'],
    queryFn: getBooks
  });

  if (isLoading) return <div>Cargando...</div>
  else if (isError) return <div> Error: {error.message}</div>

  const library = response?.default?.library ?? [];
  return (<div>
    {library.map((book, index) => (
      <CardBook key={index} book={book.book} />
    ))}
  </div>
  )
}

export default Library;