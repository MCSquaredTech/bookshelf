
import React from 'react'
import { NavLink } from 'react-router-dom'; 

const BookMenu = ({menu}) => {
  let isDisabled; 

  if (menu === 'books' ) {
    isDisabled = true;
  } else { 
    isDisabled = false;
  }
  console.log(isDisabled);

  const handleDisable = (event) => { 
    event.preventDefault(); 
  }

  return (
    <div className='nav'>
        <ul>
        <li className='nav-menu'>
          { isDisabled ?
            <NavLink to="/">New</NavLink> :
            <NavLink className="disabled-menu" onClick={handleDisable}>New</NavLink>
          }
            
          </li>
          <li className='nav-menu'>
            <NavLink to="/delete">Edit</NavLink>
          </li>
          <li className='nav-menu'>
            <NavLink to="/delete">Delete</NavLink>
          </li>
        </ul>
    </div>
  )
}

export default BookMenu

