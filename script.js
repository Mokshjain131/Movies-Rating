import { config } from "./config.js";

const API_KEY = config.OMDB_API_KEY;
let page_no = 1;

// @param {string} name 
async function fetchMovies(name) {
  try {
    let URL = `http://www.omdbapi.com/?s=${name}&page=${page_no}&apikey=${API_KEY}`;
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

fetchMovies('Avengers');






// require('dotenv').config();

// import { JSDOM } from 'jsdom';
// import { readFileSync } from 'fs';

// const html = readFileSync('index.html', 'utf-8');
// const dom = new JSDOM(html);
// const document = dom.window.document;

// require('dotenv').config();
// const env = process.env;
// module.exports = env;

