import { NavLink, Link } from 'react-router-dom';

const LayoutHeader = () => {
  return (
    <div className="nav">
      {/* Site Title  */}
      <Link to="/" className='nav-title'>Book Shelf</Link>
      <ul>
        <li className='nav-menu'>
            <NavLink to="/home">Home</NavLink>
        </li>
        <li className='nav-menu'>
            <NavLink to="/books">Books</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default LayoutHeader
