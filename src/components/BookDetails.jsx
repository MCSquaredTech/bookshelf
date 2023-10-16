import { MDBRow } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import BookMenu from './BookMenu';

const BookDetails = ({ data }) => {
  const { id, type, title, author, publisher, 
    publication, description, image, hyperlink, brief } = data; 

  return (
    <>
    <div className='container'>
      <div className="bookPage">
        <div className='bookImageContainer'>
              <img src={image} className='img-thumbnail bookImage rounded' alt='Good to Great Book Image' />
          </div>
          <div className='bookTextContainer '>
              <p><strong>Genre': {type}</strong></p>
              <hr />
              <h4><strong>Title:</strong> {title}</h4>
              <p><strong>Detailed Descrption: </strong> {description}</p>
          </div>
          <div className="v-line"> </div>
          <div className='bookTextContainer '>
              <p><strong>Author': {author}</strong></p>
              <hr />
              <p><strong>Publisher: {publisher}</strong></p>
              <p><strong>Year: {publication}</strong></p>
              <p><strong>Hyperlink: {hyperlink}</strong></p>
              <p><strong>Brief Descrption: </strong> {brief}</p>
          </div>
        </div>       
    </div>
    </>
    
  )
}

export default BookDetails
