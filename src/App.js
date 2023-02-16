import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import AddMovie from './components/addMovie/AddMovie';
import Filter from './components/filter/Filter';
import MovieList from './components/movieList/MovieList';


function App() {
  const { moviesData } = useSelector((state) => (state))
  const [ search, setSearch ] = useState("");
  const [ratfil,setRatfil]=useState(1);
  const handleChange =(e)=>{
    setSearch(e.target.value)
  }
  const handleRating =(x) =>{
    setRatfil(x)
  }
  return (
    <div className="App">
      <Filter search={search} handleChange={handleChange} fil={ratfil} handleRating={handleRating}/>
      <MovieList moviesData={moviesData.filter(el=>el.name.trim().toLowerCase().includes(search.trim().toLowerCase()) && el.rating >= ratfil)}/>
      <AddMovie/>
      
    </div>
  );
}

export default App;
