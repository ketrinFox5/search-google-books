import { useEffect, useState } from 'react';
import { getBooks, searchBooksByTerm } from './service.ts';
import BookCard from './components/BookCard/index.tsx';

function App() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState(null);
  const fetchApi = () => {
    getBooks().then(data => setBooks(data.items));
  }

  const seachBooks = () => {
    searchBooksByTerm(searchTerm).then(data => setBooks(data.items))
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="App">
      <div className="books__page">
        <h1 className="title">
          Google Books Search
        </h1>
        <div className="books__search">
          <input type="text" placeholder="Book Title..." className="search__input" onChange={(e) => setSearchTerm(e.target.value)}/>
          <button className="search__btn" onClick={() => seachBooks()}></button>
        </div>
      </div>
      {books && 
        <div className="books">
          {books.map(book => <BookCard bookInfo={book}/>)}
        </div>
      }
    </div>
  );
}

export default App;
