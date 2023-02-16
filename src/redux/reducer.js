import { ADD_MOVIE, DELETE_MOVIE } from "./actionType";


const init = {
    moviesData : [
       
      {
        id: Math.random(),
        image: "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        rating: 4,
        name: "Star Wars: Episode V - The Empire Strikes Back",
        date: "Decembre 1980",
    }, 
    {
      id: Math.random(),
      image: "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
      rating: 3,
      name: "Star Wars: Episode VI - Return of the Jedi",
      date: "April 2019",
    }, 
    {
      id: Math.random(),
      image: "https://m.media-amazon.com/images/I/71OIhbUOF-L.jpg",
      rating: 5,
      name: "Star Wars: Episode IV - A New Hope",
      date: "Mai 1977",
    }, 
     
    {
      id: Math.random(),
      image: "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      rating: 4,
      name: "Star Wars: Episode V - The Empire Strikes Back",
      date: "Decembre 1980",
    },
    {
      id: Math.random(),
      image: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      rating: 4.5,
      name: "The Shawshank Redemption",
      date: "September 1994"
    },
    {
      id: Math.random(),
      image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      rating: 1,
      name: "The Godfather",
      date: "March 1972"
    },
    {
      id: Math.random(),
      image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      rating: 2,
      name: "The Dark Knight",
      date: "July 2008"
    }
          
    ], done:"",
    };
    

    const reducer = ( state=init, { type, payload } ) => {
      switch (type) {
        case DELETE_MOVIE :
          return{...state,moviesData: state.moviesData.filter((el)=> el.id !== payload)};
          case ADD_MOVIE:
            return{...state,moviesData:[ ...state.moviesData, payload]};
         
          
      
        default:
          return state;
      }
        
    };
    export default reducer;