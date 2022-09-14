import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <div className="nav">
            <h1  className="logo">AmazonPrime</h1>
            <div className="link">
                <Link to="/">Home</Link>
                <Link to="/addmovies">Add Movies</Link>
                <Link to="/wishlist">Wishlist</Link>
            </div>
            <div className="input">
                <input type="search" placeholder="Enter Movie Name" id="input" />
                <button id="btn">Search</button>
            </div>
        </div>
     );
    }
export default Navbar;