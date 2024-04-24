import { useQuery } from "@tanstack/react-query";
// import { useDispatch, useSelector } from "react-redux";
// import {
//     setSelectedGenre,
//     selectFilteredBooks,
//     addBook,
// } from "../redux/bookSlice.js";
import { getBooks } from "../api/booksAPI";
import CardBook from "./CardBook";

const Library = () => {
  // const dispatch = useDispatch();
  // const selectedGenre = useSelector((state) => state.books.selectedGenre);

  // const genres = ["Fantasía", "Ciencia ficción", "Zombies", "Terror"];

  // const handleGenreChange = (event) => {
  //     const selectedGenre = event.target.value;
  //     console.log("Este es el genero seleccionado", selectedGenre);
  //     dispatch(setSelectedGenre(selectedGenre));
  // };

  // const filteredBooks = useSelector(selectFilteredBooks);
  // console.log("ESTOS SON LOS LIBROS FILTRADOS", filteredBooks);

  const {
    isLoading,
    data: response,
    isError,
    error,
  } = useQuery({
    queryKey: ["books"],
    queryFn: getBooks,
    // onSuccess: (data) => {
    // dispatch(addBook(data.library)); // Guardar los libros en el estado Redux
    // },
  });

  if (isLoading) return <div>Cargando...</div>;
  else if (isError) return <div> Error: {error.message}</div>;

  const library = response?.default?.library ?? [];

  return (
    <div className="mt-14 mb-12">
      {/* <h1 className="text-3xl font-bold">Lo más destacado</h1>
            <div>
                <p>Filtrar por:</p>
                <select
                    value={selectedGenre || ""}
                    onChange={handleGenreChange}
                >
                    <option value="">Género</option>
                    {genres.map((genre, index) => (
                        <option key={index} value={genre}>
                            {genre}
                        </option>
                    ))}
                </select>
            </div> */}
      <div className='mt-14 mb-12'>
        {/* contenedor tituli */}
        <div className='container'>
          <div className='text-center mb-10 max-w-[600px] mx-auto'>
            <h1 className='text-3xl font-bold'>Librería</h1>
            <p className='text-sm text-primary'>Lo más destacado para ti</p>
          </div>
          <div>
            {/* contenedor card */}
            <div className=" flex flex-wrap gap-2 ">
              <div className="flex flex-wrap justify-center"></div>
              {library.map((book, index) => (
                <CardBook key={index} book={book.book} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;