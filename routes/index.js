const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie.js'); // <== add this line




/* GET home page */
router.get('/', (req, res) => {
  res.render('index');
});

/* GET movies */
router.get('/movies', (req, res) => {
  Movie.find()
    .then(allTheMoviesFromDB => {
      res.render('movies', { movies: allTheMoviesFromDB } );
    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
    })
});

/* GET details */
router.get('/movies/:myTitle', (req, res) => {
  Movie.findOne({'title': req.params.myTitle})
    .then(theMovie => {
      console.log("test")
      res.render('movie-details', { movie: theMovie });
    })
    .catch(error => {
      console.log('Error while retrieving book details: ', error);
    })
});

module.exports = router;
