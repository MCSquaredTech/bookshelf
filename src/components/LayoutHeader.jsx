import { NavLink, Link } from 'react-router-dom';

const LayoutHeader = () => {
  return (
    <div className="nav">
      {/* Site Title  */}
      <Link to="/">Book Shelf</Link>
      <ul>
        <li>
            <NavLink to="/home">Home</NavLink>
        </li>
        <li>
            <NavLink to="/books">Books</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default LayoutHeader
