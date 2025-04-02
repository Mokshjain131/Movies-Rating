import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/App.css";
import "../components/navbar";
import "../components/footer";

import Spiderman1 from "../assets/SpiderMan 1.jpg";
import Spiderman2 from "../assets/SpiderMan 2.jpg";
import Spiderman3 from "../assets/SpiderMan 3.jpg";
import AmazingSpiderman from "../assets/Amazing SpiderMan.jpg";
import AmazingSpiderman2 from "../assets/Amazing SpiderMan 2.jpg";
import SpidermanHomecoming from "../assets/SpiderMan Homecoming.jpg";
import SpidermanFar from "../assets/SpiderMan Far From Home.jpg";
import SpidermanNo from "../assets/SpiderMan No Way Home.jpg";
import SpidermanInto from "../assets/SpiderMan into the Spiderverse.jpg";
import SpidermanAcross from "../assets/SpiderMan across the Spiderverse.jpg";
import SearchIcon from "../assets/search.svg";


export default function Index() {
    return (
        <div>
            <Navbar/>
            <div className="head">
            <p>
                Rate your Favourite Movies and Series
            </p>
            </div>
            <div className="back_image">
            <h1>Film Score</h1>
                <div className="searchbar">
                    <input id="search-bar" type="search" placeholder="Search for movies/series"/>
                    <SearchIcon/>
                    <ul id="movie_list"></ul>
                </div>
            </div>
            <div className="expand">
            <div>
                <Spiderman1/>
            </div>
            <div>
                <Spiderman2/>
            </div>
            <div>
                <Spiderman3/>
            </div>
            <div>
                <AmazingSpiderman/>
            </div>
            <div>
                <AmazingSpiderman2/>
            </div>
            <div>
                <SpidermanHomecoming/>
            </div>
            <div>
                <SpidermanFar/>
            </div>
            <div>
                <SpidermanNo/>
            </div>
            <div>
                <SpidermanInto/>
            </div>
            <div>
                <SpidermanAcross/>
            </div>
            </div>
            <Footer/>
        </div>
    );
}