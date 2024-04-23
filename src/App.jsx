import Library from "./components/Library.jsx";
import './index.css';
import BookList from "./components/BookList.jsx";

function App() {


  return (
    <div>
      <h1>Developers working...</h1>
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
