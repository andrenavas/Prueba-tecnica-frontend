import Library from "./components/Library.jsx";
import "./index.css";
import BookList from "./components/BookList.jsx";
import NavBar from "./components/NavBar.jsx";


function App() {


  return (
    <div>
      <NavBar />
      {/* contenedor libreria */}
      <div className="container mx-auto w-95/100 ">
        <div className="flex gap-2 ">
          <div className="p-4 w-4/5 m-0 rounded-xl">
            <Library />
          </div>
          {/* contenedor libros usuario */}
          <div className="p-4 w-2/5 m-0 rounded-xl bg-gray-200">
            <BookList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

