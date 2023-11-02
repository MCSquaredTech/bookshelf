import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import BookForm from '../components/BookForm'

const Edit = () => {
  const location = useLocation();
  const  book  = location.state.data.book;
  
  return (
    <div className='bookPage'>
      <BookForm data={book} caption={'Edit'} />
    </div>
  )
}

export default Edit
