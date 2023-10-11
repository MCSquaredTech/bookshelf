import BookView from "./BookView"

const BookList = ({ data }) => {
    const bookList = data.map((book) => {
        return (
          <li key={book.id}>
            <BookView data={book} /> 
          </li>
        )
      })

  return (
    <div className="container">
      <div className="col-md-12">
        <ul className="nav">
          {bookList}
        </ul>
      </div>
    </div>
    
  )
}

export default BookList
