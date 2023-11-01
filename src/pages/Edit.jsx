import React from 'react'
import { useLocation } from 'react-router-dom';
import BookForm from '../components/BookForm'

const Edit = () => {
  const location = useLocation();
  const { book } =  location.state.book;

  return (
    <div className='bookPage'>
      <BookForm data={book} />
    </div>
  )
}

export default Edit
