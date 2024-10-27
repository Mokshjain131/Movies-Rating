import logo from './logo.svg';
import './App.css';
import reportWebVitals from './reportWebVitals';

// import config from "./config.js";
reportWebVitals(console.log)

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
console.log(API_KEY);
let page_no = 1;

// @param {string} name 
async function fetchMovies(movieName) {
  try {
    let URL = `http://www.omdbapi.com/?s=${movieName}&page=${page_no}&apikey=${API_KEY}`;
    const response = await fetch(URL);
    const result = await response.json();

    const movies = document.getElementById('movie_list');
    movies.innerHTML = '';

    result.Search.forEach(movie => {
      const movieItem = document.createElement('li');
      movieItem.textContent = `${movie.Title} (${movie.Year})`
      movies.appendChild(movieItem);
    });
  } catch (error) {
    console.error(error);
  }
}

function searchMovies() {
  const searchValue = searchBar.value;
  if (searchValue) {
    fetchMovies(searchValue);
  }
}

const searchIcon = document.getElementById('search-icon');
const searchBar = document.getElementById('search-bar');

searchIcon.addEventListener('click', searchMovies);
searchBar.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    searchMovies();
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
