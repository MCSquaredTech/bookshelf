// React Router Dom Components 
import { createBrowserRouter, 
         createRoutesFromElements, 
         RouterProvider, Route  } from "react-router-dom"; 
// Imported Pages 
import Layout from './pages/Layout';
import Home from './pages/Home';
import Books, { bookLoader } from './pages/Books';
import Book, { bookDetailLoader } from './pages/Book'; 

// Imported Components 

// Import Cascading Style Sheets 
import './books.css';

// Router Configuration 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} >
      <Route index element={<Home />} /> 
      <Route path="books" 
             element={<Books /> }
             loader={bookLoader}  />
        <Route path="books/:id"
               element={<Book />}
               loader={bookDetailLoader} />
      
    </Route>
  )
)


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
