import React from 'react'

import BookForm from '../components/BookForm';

const New = () => {
  const book = [{type: "", title: '', author: '', publisher: '', 
  publication: '', description: '', image: '', hyperlink: '', breif: ''}]
  return (
    <div className='bookPage'>
      <h1>New Book Form</h1>
      <BookForm data={book}/>
    </div>
  )
}

export default New
