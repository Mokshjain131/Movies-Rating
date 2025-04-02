import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/App.css";
import "../components/navbar";
import "../components/footer";

export default function Login() {
    return (
        <div>
            <Navbar/>
            <h1>Login/Signup</h1>
            <div id="login-form">
                <form>
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username"/><br/><br/>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password"/><br/><br/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
            <div id="signup-form">
                <form>
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username"/><br/><br/>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password"/><br/><br/>
                    <label for="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" name="confirm-password"/><br/><br/>
                    <input type="submit" value="Signup"/>
                </form>
            </div>
            <Footer/>
        </div>
    );
}