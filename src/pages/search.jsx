import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/App.css";
import "../components/navbar";
import "../components/footer";

export default function Search() {
    return (
        <div>
            <Navbar/>
            <h1>Search Results</h1>
            <div className="search-results">
                
            </div>
            <Footer/>
        </div>
    );
}