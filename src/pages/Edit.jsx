import React from 'react'
import BookForm from '../components/BookForm'

const Edit = ({ book }) => {
  console.log(book)
  return (
    <div className='bookPage'>
      <BookForm book={book} />
    </div>
  )
}

export default Edit
