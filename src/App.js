import logo from './logo.svg';
import './styles/App.css';
import React from 'react';

const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;
// let page_no = 1;

const searchIcon = document.getElementById('search-icon');
const searchBar = document.getElementById('search-bar');
const movies = document.getElementById('movie_list');

// @param {string} name
async function fetchName(movieName) {
  try {
    // let URL = `http://www.omdbapi.com/?s=${movieName}&page=${page_no}&apikey=${OMDB_API_KEY}`;
    let URL = `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=${TMDB_API_KEY}`;
    const response = await fetch(URL);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

function suggestions(result) {
  const movies = document.getElementById('movie_list');
  movies.innerHTML = '';
  
  // const maxResults = Math.min(10, result.results.length);
  // for (let i = 0; i < maxResults; i++) {

  const results = result.results.slice(0, 10);
  results.forEach((movie) => {
    const movieItem = document.createElement('li');
    movieItem.textContent = `${movie.title} (${movie.release_date})`;
    movies.appendChild(movieItem);
  });
}

function searchRouting() {
  const searchValue = searchBar.value;
  if (searchValue) { 
    window.location.href = `search.html?movie=${encodeURIComponent(searchValue)}`;
  }
}

searchBar.addEventListener('input', async () => {
  const searchValue = searchBar.value;
  if (searchValue) { 
    const result = await fetchName(searchValue);
    suggestions(result);
  } else {
    movies.innerHTML = '';
  }
}) 

document.addEventListener('click', (e) => {
  if (e.target !== searchBar && e.target.parentNode !== movies) {
    movies.innerHTML = '';
  }
})

searchIcon.addEventListener('click', searchRouting);
searchBar.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    searchRouting();
  }
}) 






// document.addEventListener('DOMContentLoaded', () => {
// fetchMovies('Avengers');




// require('dotenv').config();

// import { JSDOM } from 'jsdom';
// import { readFileSync } from 'fs';

// const html = readFileSync('index.html', 'utf-8');
// const dom = new JSDOM(html);
// const document = dom.window.document;

// require('dotenv').config();
// const env = process.env;
// module.exports = env;














// function App() {
//   console.log(process.env.REACT_APP_OMDB_API_KEY);
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
