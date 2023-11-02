import React from 'react'

import BookForm from '../components/BookForm';

const New = () => {
  const book = [{type: "", title: '', author: '', publisher: '', 
  publication: '', description: '', image: '', hyperlink: '', breif: ''}]

  const handleOnClick = (book) => { 
    console.log(book); 

  }

  return (
    <div className='bookPage'>
      <BookForm data={book} caption={'New'} />
    </div>
  )
}

export default New
