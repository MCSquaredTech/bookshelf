import { useLoaderData } from "react-router-dom";
import BookList from "../components/BookList"


const Books = () => {
    const data = useLoaderData();

  return (
    <div className="nav">
          <BookList data={data} />
    </div>
  )
}

export default Books;

export const bookLoader = async () => { 
    const url = "https://651ccf8135bd4107e37323ed.mockapi.io/books";
    
    const response = await fetch(url, {
        method: 'GET', 
        headers: {'content-type': 'application/json'},
    })
    return response;   
}