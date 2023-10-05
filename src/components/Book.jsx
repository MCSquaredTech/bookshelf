import { MDBRow } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Book = ({ data }) => {
    const { id, type, title, image, description } = data; 

  return (
    <MDBRow>
        <Link to={id} >
          <div className='bookCard'>
              <span className="bookImage">
                <img src={image} className='img-fluid rounded' alt='' />
              </span>
              <span className="bookText">
                    <p><strong>{type}</strong></p>
                    <hr />
                    <h4>{title}</h4>
                    <p>{description}</p>
              </span>
          </div>
        </Link>
    </MDBRow>
  )
}

export default Book
