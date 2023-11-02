import React, { useState } from 'react'

const BookForm = ({data, caption}) => {
    console.log(data)
    const [ book, setBook ] = useState(data); 
    const { type, title, author, publisher, publication, description, image, hyperlink, brief } = book; 

    const changeHandler = (event) => { 
       const { name, value } = event.target;   

       setBook(prevData => {
            return {...prevData, [name]: value}})
    }

    const handleOnClick = () => { 
        console.log(book);
    }
    
    return (
    <div>
        <form>
            <div className="flexPageContainer">
                <div>
                    <div className="new-book__control">
                        <label htmlFor="type">Type: </label>
                        <input type="text" 
                            name="type"
                            cols={50}
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
                        <input type="text" 
                            name="publication"
                            value={publication}
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
                </div>
                <div>
                    <div className="new-book__control">
                    <label htmlFor="description">Description: </label>
                    <textarea type="text" 
                        name="description"
                        cols={33}
                        rows={8}
                        value={description}
                        onChange={changeHandler}  />
                    </div>
                    
                    <div className="new-book__control">
                        <label htmlFor="brief">Brief Description: </label>
                        <textarea type="text" 
                            name="brief"
                            cols={33}
                            rows={5}
                            value={brief}
                            onChange={changeHandler}  />
                    </div>
                    <div>
                        <button className="btn btn-primary"
                                onClick={handleOnClick} >
                            {caption}
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
    
  )
}

export default BookForm

