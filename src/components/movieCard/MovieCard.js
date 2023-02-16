import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../../redux/action";
import StarRating from "../starRating/StarRating";



const MovieCard = ({ movie }) => {
    const dispatch = useDispatch();
return <div>
    <Card style={{ width: "18rem", height: "38rem", margin: "15px" }}>
<Card.Img variant="top" src={movie.image} style={{height: "380px"}} />
<Card.Body>
<div style={{heigh:"150px"}}>
  <Card.Title>{ movie.name}</Card.Title>
  <Card.Text>{movie.date}</Card.Text>
  <Card.Text><StarRating rating={movie.rating} /></Card.Text>
  <Button variant="danger" onClick={()=>dispatch(deleteMovie(movie.id))}>Delete</Button>
</div>
</Card.Body>
</Card></div>
}

export default MovieCard;