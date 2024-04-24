import Library from "./components/Library.jsx";
import './index.css';
import BookList from "./components/BookList.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {


  return (
    <div>
      <NavBar />
      <h1>LIBRERIA...</h1>
      <div className="library-content">
        <Library />
      </div>
      <div className="booklist-conten">
        <BookList />
      </div>
    </div>
  )
}

export default App
