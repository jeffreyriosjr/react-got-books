import React from 'react';

const GotCards = ({books}) => {
    return (
        <div className='row'>
            {books.map( (book, index) => {
                return (
                    <div className ="card d-flex mt-3" key={index}>
                        <div className="card-body">
                            <div className="card-title">
                                <strong>Title:</strong>{' '}{book.name}
                            </div>
                            
                            <div className="card-text">
                                <strong>ISBN:</strong>{' '}{book.isbn}
                            </div>

                            <div className="card-text">
                                    <strong>Author(s):</strong>{' '}
                                    {book.authors.map( (author, index) => {
                                        return (
                                            <div key={index}>
                                                {author}
                                            </div>
                                        );
                                    })}
                            </div>
                            
                            <div className="card-text">
                                <strong>Number of Pages:</strong>{' '}{book.numberOfPages}
                            </div>
                            
                            <div className="card-text">
                                <strong>Country:</strong>{' '}{book.country}
                            </div>

                            <div className="card-text">
                                <strong>Released date:</strong>{' '}{book.released.slice(0,10)}
                            </div>

                        </div>
                    </div>
                );
            })}
        </div>
    )
};

export default GotCards;