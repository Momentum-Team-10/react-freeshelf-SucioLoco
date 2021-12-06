import './App.css';
import { useState } from 'react';
import Book from './Books.js';
import { bookData } from './bookData';

export function App() {
  let [books] = useState(bookData)
  return (
    <div>
      <h1>Books I've never read</h1>
      {books.map((book, index) => (
        < Book title={book.title} 
        key={index} 
        author={book.author} shortDescription={book.shortDescription} 
        coverImageUrl={book.coverImageUrl} url={book.url} 
        publisher={book.publisher} publicationDate={book.publicationDate} detailedDescription={book.detailedDescription} />
      ))}
    </div>
  )
}
export default App
