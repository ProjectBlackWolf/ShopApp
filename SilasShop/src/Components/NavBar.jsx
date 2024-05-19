import { Link } from "react-router-dom";
// import '../styles/Navbar.css';
export default function NavBar() {
    return (
        <>
            <ol id="navbar">
                <Link to='/getAll'><h3>Shop</h3></Link>
                <Link to="/users"><h3>Login</h3></Link>
                <Link to="/signup"><h3>Register</h3></Link>
                <Link to="/create"><h3>Create</h3></Link>
                <Link to="/CartPage"><h3>Cart</h3></Link>
                {/* <Link to="/Favorites">Favorites</Link> */}
                {/* <Link to="/GatchaGame">Gatcha</Link> */}
            </ol>
        </>
    );
}