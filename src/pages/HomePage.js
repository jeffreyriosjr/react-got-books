import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Homepage = () => {
    const [books, setBooks] = useState('');

    const getBooks = () => {
        axios.get("https://www.anapioficeandfire.com/api/books").then(
          (response) => {
          console.log(response);
          setBooks(response.data.name + " ... " + response.data.name);
        });
      };
    
      return (
        <div className="col-sm-12 text-center">
          <h1>Game of Thrones</h1>
          <button onClick={getBooks}>G.O.T. Books</button>
        </div>
      );
    
}

export default Homepage;