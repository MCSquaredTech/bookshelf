import { Outlet } from "react-router-dom"
import LayoutHeader from "../components/LayoutHeader"
import BookMenu from "../components/BookMenu"

const Layout = () => {
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <LayoutHeader />
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
