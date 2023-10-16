import React, { useState } from 'react'

const BookForm = () => {
    const [ book, setBook ] = useState({ type: '', title: '', 
            author: '', publisher: '', publication: '', description: '', 
            image: '', hyperlink: '', brief: '' });

    const changeHandler = (event) => { 
       const { name, value } = event.target;   

       setBook((prevData) => {
        return {...prevData, name: value}})
    }

  return (
    <form>
        <div className="new-book__controls">
            <div className="new-book__control">
                <label htmlFor="type">Type: </label>
                <input type="text" 
                       name="type"
                       value={type}
                       onChange={changeHandler}  />
            </div>
            <div className="new-book__control">
                <label htmlFor="title">Title: </label>
                <input type="text" 
                       name="title"
                       value={title}
                       onChange={changeHandler}  />
            </div>
            <div className="new-book__control">
                <label htmlFor="title">Author: </label>
                <input type="text" 
                       name="author"
                       value={author}
                       onChange={changeHandler}  />
            </div>
            <div className="new-book__control">
                <label htmlFor="title">Publisher: </label>
                <input type="text" 
                       name="publisher"
                       value={publisher}
                       onChange={changeHandler}  />
            </div>
            <div className="new-book__control">
                <label htmlFor="title">Publication Year: </label>
                <input type="text" 
                       name="publication"
                       value={publication}
                       onChange={changeHandler}  />
            </div>
            <div className="new-book__control">
                <label htmlFor="title">Description: </label>
                <input type="text" 
                       name="description"
                       value={description}
                       onChange={changeHandler}  />
            </div>
            <div className="new-book__control">
                <label htmlFor="title">Image Path: </label>
                <input type="text" 
                       name="image"
                       value={image}
                       onChange={changeHandler}  />
            </div>
            <div className="new-book__control">
                <label htmlFor="title">Hyper Link: </label>
                <input type="text" 
                       name="hyperlink"
                       value={hyperlink}
                       onChange={changeHandler}  />
            </div>
            <div className="new-book__control">
                <label htmlFor="title">Brief Description: </label>
                <input type="text" 
                       name="brief"
                       value={brief}
                       onChange={changeHandler}  />
            </div>
        </div>
      
    </form>
    
  )
}

export default BookFform

