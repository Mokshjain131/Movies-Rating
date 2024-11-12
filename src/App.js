import logo from './logo.svg';
import './styles/App.css';
import React from 'react';
import ReactDOM from 'react-dom';

const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;
// let page_no = 1;

const searchIcon = document.getElementById('search-icon');
const searchBar = document.getElementById('search-bar');
const movies = document.getElementById('movie_list');
const searchResults = document.getElementById('search-results');

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

function displayMovies(result) {
  searchResults.innerHTML = '';

  result.forEach((movie) => {
    const movieItem = document.createElement('p');
    movieItem.textContent = `${movie.title} (${movie.release_date})`;
    searchResults.appendChild(movieItem);
  });
}

async function searchDisplay (movieName) {
  try {
    const result = await fetchName(movieName);
    if (result && result.results) {
      displayMovies(result.results);
    }
  } catch (error) {
    console.error('Error displaying search results:', error);
  }
}

function initializeHome() {
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
}

function initializeSearch() {
  console.log('Search');
  const urlParams = new URLSearchParams(window.location.search);
  const movieName = urlParams.get('movie');

  if (movieName) {
    searchDisplay(movieName);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript code is being executed');
  const currentPath = window.location.pathname;
  console.log(currentPath);

  if (currentPath === '/search.html') {
    console.log('Search');
    console.log(currentPath);
    initializeSearch();
  } else {
    console.log('Home');
    console.log(currentPath);
    initializeHome();
  }
});

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
