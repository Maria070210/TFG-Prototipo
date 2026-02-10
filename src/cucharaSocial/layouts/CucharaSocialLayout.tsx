import { Link, Outlet } from "react-router"

export const CucharaSocialLayout = () => {
  return (
    <div style={{backgroundColor: "purple"}}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Búsqueda</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>

      <section mt-10></section>
        <Outlet />
    </div>
  )
}
