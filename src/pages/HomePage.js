import React, { useState, useEffect } from 'react';
import  GotCards  from '../components/GotCards';
import axios from 'axios';

const Homepage = () => {
    const [books, setBooks] = useState([]);

    const getBooks = () => {
        axios.get("https://www.anapioficeandfire.com/api/books")
        .then(response => {
          console.log(response.data)
          setBooks(response.data);
          if (!response.ok) {
            throw Error('ERROR');
          }
          return response.json();
        })
        .then(data => {
          console.log(data.data); 
        })

        .catch(error => {
          console.log(error);
        })
      };

      
    
      return (
        
        <div className="container text-center my-5">
          <div className="col-sm-12 mt-3">
          <h1 className='header'>Game of Thrones</h1>
          <button className='bg-info' onClick={getBooks}>G.O.T. Books</button>

          <GotCards books={books}/>
          </div>

        </div>
      );
    
}

export default Homepage;