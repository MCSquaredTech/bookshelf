import React from 'react'

import BookForm from '../components/BookForm';

const New = ({book}) => {
  return (
    <div className='bookPage'>
      <h1>New Book Form</h1>
      <BookForm book={book}/>
    </div>
  )
}

export default New
