function collectMovies(arr) {
  let movies = [];

  for (const command of arr) {
    if (command.includes("addMovie")) {
      let tokens = command.split("addMovie ");
      let movieTitle = tokens[1];

      movies.push({ name: movieTitle });
    } else if (command.includes("directedBy")) {
      let [searchedMovieTitle, movieDirector] = command.split(" directedBy ");

      let movieObj = movies.find((movie) => movie.name === searchedMovieTitle);

      if (movieObj) {
        movieObj.director = movieDirector;
      }
    } else if (command.includes("onDate")) {
      let [searchedMovieTitle, movieDate] = command.split(" onDate ");

      let movieObj = movies.find((movie) => movie.name === searchedMovieTitle);

      if (movieObj) {
        movieObj.date = movieDate;
      }
    }
  }

  for (const movieObj of movies) {
    if (movieObj.name && movieObj.director && movieObj.date) {
      let json = JSON.stringify(movieObj);
      console.log(json);
    }
  }
}

collectMovies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);

// collectMovies([
//   "addMovie The Avengers",
//   "addMovie Superman",
//   "The Avengers directedBy Anthony Russo",
//   "The Avengers onDate 30.07.2010",
//   "Captain America onDate 30.07.2010",
//   "Captain America directedBy Joe Russo",
// ]);
