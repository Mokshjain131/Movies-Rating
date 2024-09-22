require('dotenv').config();

const  API_KEY = process.env.OMDB_API_KEY;

let name = "avengers: infinity war";
let URL1 = process.env.SEARCH_URL;
let URL2 = process.env.KEY;
let ADDRESS = URL1.concat(name, URL2);
console.log(ADDRESS);

async function fetchMovies() {
  try {
    const response = await fetch(ADDRESS);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

fetchMovies();















// const options = {
//   method: 'POST',
//   headers: {
//     'x-rapidapi-key': CONFIG.OMDB_API_KEY,
//     // 'x-rapidapi-host': 'imdb188.p.rapidapi.com',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     country: {
//       anyPrimaryCountries: ['IN']
//     },
//     limit: 200
//     releaseDate: {
//       releaseDateRange: {
//         end: '2029-12-31',
//         start: '2020-01-01'
//       }
//     },
//     userRatings: {
//       aggregateRatingRange: { max: 10, min: 6 },
//       ratingsCountRange: { min: 1000 }
//     },
//     genre: {
//       allGenreIds: ['Action']
//     },
//     runtime: {
//       runtimeRangeMinutes: { max: 120, min: 0 }
//     }
//   })
// };

// async function fetchMovies() {
//   try {
//     const response = await fetch(url, options);
//     const result = await response.json(); // Parse as JSON
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }

// fetchMovies();
