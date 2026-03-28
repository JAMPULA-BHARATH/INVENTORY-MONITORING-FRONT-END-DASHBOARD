import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Inventory Dashboard</h2>
      <div>
        <Link to="/">Dashboard</Link>
        <Link to="/products">Products</Link>
      </div>
    </nav>
  );
}

export default Navbar;