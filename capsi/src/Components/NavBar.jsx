import { Link } from "react-router-dom";
export default function NavBar() {
    return (
        <>
            <ol id="navbar">
                <Link to='/getAll'><h3>Shop</h3></Link>
                <Link to="/Login"><h3>Login</h3></Link>
                <Link to="/Register"><h3>Register</h3></Link>
                <Link to="/Create"><h3>Create</h3></Link>
                {/* <Link to="/CartPage">Cart</Link> */}
                {/* <Link to="/Favorites">Favorites</Link> */}
                {/* <Link to="/GatchaGame">Gatcha</Link> */}
            </ol>
        </>
    );
}