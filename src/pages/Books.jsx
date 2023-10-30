import { useLoaderData } from "react-router-dom";
import BookList from "../components/BookList"
import BookMenu from "../components/BookMenu";


const Books = () => {
  const data = useLoaderData();

  return (
    <>
      <BookMenu menu={'books'} /> 
      <div className="bookPage">
        <BookList data={data} />
      </div>
    </>
    
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