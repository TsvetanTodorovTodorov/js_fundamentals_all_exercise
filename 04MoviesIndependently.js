function collectMovies(arr) {
  let movies = [];

  for (const command of arr) {
    if (command.includes("addMovie")) {
      let tokens = command.split("addMovie ");
      let movie = tokens[1];

      movies.push({ name: movie });
    } else if (command.includes(" directedBy ")) {
      let [searchedMovieTitle, movieDirector] = command.split(" directedBy ");

      let movieObj = movies.find((movie) => movie.name === searchedMovieTitle);

      if (movieObj) {
        movieObj.director = movieDirector;
      }
    } else if (command.includes(" onDate ")) {
      let [searchedMovieTitle, movieDate] = command.split(" onDate ");

      let movieObj = movies.find((movie) => movie.name === searchedMovieTitle);

      if (movieObj) {
        movieObj.date = movieDate;
      }
    }
    }
    
    for (const movieObj of movies) {
        if (movieObj.name && movieObj.director && movieObj.date) {
            console.log(JSON.stringify(movieObj));
        }
    }

}
collectMovies([
  "addMovie The Avengers",
  "addMovie Superman",
  "The Avengers directedBy Anthony Russo",
  "The Avengers onDate 30.07.2010",
  "Captain America onDate 30.07.2010",
  "Captain America directedBy Joe Russo",
]);
