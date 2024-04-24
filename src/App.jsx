import Library from "./components/Library.jsx";
import "./index.css";
import BookList from "./components/BookList.jsx";
import NavBar from "./components/NavBar.jsx";
// import { useDispatch, useSelector } from "react-redux";
// import { setSelectedGenre } from "./redux/bookReducer.js";

function App() {
    // const dispatch = useDispatch();
    // const selectedGenre = useSelector((state) => state.books.selectedGenre);

    // const genres = ["Fantasía", "Ciencia ficción", "Zombies", "Terror"];

    // const handleGenreChange = (event) => {
    //     const selectedGenre = event.target.value;
    //     console.log("Este es el genero seleccionado", selectedGenre);
    //     dispatch(setSelectedGenre(selectedGenre));
    // };

    return (
        <div>
            <NavBar />
            {/* <div>
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

            <div className="container mx-auto w-95/100 ">
                <div className="flex gap-2 ">
                    <div className="p-4 w-4/5 m-0 rounded-xl">
                        <Library />
                    </div>
                    <div className="p-4 w-2/5 m-0 rounded-xl bg-gray-200">
                        <BookList />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;


// import Library from "./components/Library.jsx";
// import './index.css';
// import BookList from "./components/BookList.jsx";
// import NavBar from "./components/NavBar.jsx";

// function App() {


//   return (
//     <div>
//       <NavBar />
//       <div className="library-content">
//         <Library />
//       </div>
//       <div className="booklist-conten">
//         <BookList />
//       </div>
//     </div>
//   )
// }

// export default App
