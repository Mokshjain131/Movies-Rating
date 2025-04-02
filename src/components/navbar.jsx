import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
    const activator = (path) => ({
        color: location.pathname === path && ACTIVE_COLOR,
    });

    return (
        <div>
            <nav class="navbar">
                <div>
                    <Link to="/">
                        Home
                    </Link>
                </div>
                <div>
                    <Link to="/watchlist">
                        Watchlist
                    </Link>
                </div>
                <div>
                    <Link to="/login">
                        Login
                    </Link>
                </div>
                {/* <a href="index.html">Home</a>
                <a href="watchlist.html">Watchlist</a>
                <a id="login" href="login.html">Login/Signup</a> */}
            </nav>
        </div>
    );
}

export default Navbar;