import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Index from "./pages/index";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Search from "./pages/search";
import Watchlist from "./pages/watchlist";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/profile",
        element: <Profile/>
    },
    {
        path: "/search",
        element: <Search/>
    },
    {
        path: "/watchlist",
        element: <Watchlist/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
