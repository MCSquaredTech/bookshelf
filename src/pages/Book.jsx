import { Link, useLoaderData } from 'react-router-dom';
import BookDetails from '../components/BookDetails'; 
import BookMenu from '../components/BookMenu';

const Book = () => {
    const book = useLoaderData();

  return (
    <>
    <BookMenu />
    
    <div className="bookPage">
        <BookDetails data={book} />
    </div>
    </>
  )
}

export default Book;

export const bookDetailLoader = async ({request, params}) => { 
    const id = params.id;

    const url = "https://651ccf8135bd4107e37323ed.mockapi.io/books/" + id;
    
    const response = await fetch(url, {
        method: 'GET', 
        headers: {'content-type': 'application/json'},
    })
    return response;  
}
