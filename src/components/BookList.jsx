import Book from "./Book"

const BookList = ({ data }) => {
    const bookList = data.map((book) => {
        return (
          <li key={book.id}>
            <Book data={book} /> 
          </li>
        )
      })

  return (
    <div className="listNav">
      <ul>
        {bookList}
      </ul>
    </div>
  )
}

export default BookList
