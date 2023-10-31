import React, { useState } from 'react'

const BookForm = ({currentBook}) => {
    console.log(currentBook);
    if (currentBook === null) {
        currentBook = [{type: "", title: '', author: '', publisher: '', 
        publication: '', description: '', image: '', hyperlink: '', breif: ''}]
    }
    const [ book, setBook ] = useState(currentBook);

    const { type, title, author, publisher, publication, description, image, hyperlink, breif } = book; 

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
                <label htmlFor="author">Author: </label>
                <input type="text" 
                       name="author"
                       value={author}
                       onChange={changeHandler}  />
            </div>
            <div className="new-book__control">
                <label htmlFor="publisher">Publisher: </label>
                <input type="text" 
                       name="publisher"
                       value={publisher}
                       onChange={changeHandler}  />
            </div>
            <div className="new-book__control">
                <label htmlFor="publication">Publication Year: </label>
                <textarea type="text" 
                       name="publication"
                       value={publication}
                       onChange={changeHandler}  />
            </div>
            <div className="new-book__control">
                <label htmlFor="description">Description: </label>
                <input type="text" 
                       name="description"
                       value={description}
                       onChange={changeHandler}  />
            </div>
            <div className="new-book__control">
                <label htmlFor="image">Image Path: </label>
                <input type="text" 
                       name="image"
                       value={image}
                       onChange={changeHandler}  />
            </div>
            <div className="new-book__control">
                <label htmlFor="hyperlink">Hyper Link: </label>
                <input type="text" 
                       name="hyperlink"
                       value={hyperlink}
                       onChange={changeHandler}  />
            </div>
            <div className="new-book__control">
                <label htmlFor="brief">Brief Description: </label>
                <textarea type="text" 
                       name="brief"
                       value={breif}
                       onChange={changeHandler}  />
            </div>
        </div>
      
    </form>
    
  )
}

export default BookForm

