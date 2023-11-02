
import React from 'react'
import { NavLink } from 'react-router-dom'; 

const BookMenu = ({ menu, book }) => {
  let isDisabled; 

  if (menu === 'books' ) {
    isDisabled = false;
  }
  
  if (menu === 'detailed') { 
    isDisabled = true;
  }

  const handleDisable = (event) => { 
    event.preventDefault(); 
  }

  return (
    <div className='nav'>
      { isDisabled ?
        <ul>
          <li className='nav-menu disabled'>
            <NavLink to="/new"
                onClick={handleDisable}>New</NavLink> 
          </li>
          <li className='nav-menu'>
            <NavLink to="/edit"
              state={{data:{book}}}>Edit</NavLink> 
          </li>
          <li className='nav-menu'>
            <NavLink to="/delete">Delete</NavLink>
          </li>       
        </ul> :
        <ul>
          <li className='nav-menu'>
            <NavLink to="/new" >New</NavLink>
          </li>
          <li className='nav-menu disabled'>
            <NavLink to="/edit"
                onClick={handleDisable}>Edit</NavLink> 
          </li>
          <li className='nav-menu disabled'>
            <NavLink to="/delete"
                onClick={handleDisable}>Delete</NavLink>
          </li>
        </ul>
       }
    </div>
  )
}

export default BookMenu

