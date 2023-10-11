import { Outlet } from "react-router-dom"
import LayoutHeader from "../components/LayoutHeader"

const Layout = () => {
  return (
      <div className="row">
        <div className="col">
          <LayoutHeader />
          <Outlet />
        </div>
      </div>
  )
}

export default Layout
