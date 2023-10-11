import { Link } from 'react-router-dom';

const BookView = ({data}) => {
    const {id, image, type, title, brief } = data;

  return (
    <Link to={id} >
        <div className='container'>
            <div className='bookImageContainer'>
                <img src={image} className='img-thumbnail bookImage rounded' alt='' />
            </div>
            <div className='bookTextContainer'>
                <p><strong>{type}</strong></p>
                <hr />
                <h4>{title}</h4>
                <p>{brief}</p>
            </div>
        </div>
    </Link>
  )
}

export default BookView
