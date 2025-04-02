import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/App.css";
import "../components/navbar";
import "../components/footer";

export default function Watchlist() {
    return (
        <div>
            <Navbar/>
            <h1>Watchlist</h1>
            <div id="watchlist">
                
            </div>
            <Footer/>
        </div>
    );
}