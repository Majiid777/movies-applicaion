
import { Container, Nav, Navbar } from "react-bootstrap";





import StarRating from "../starRating/StarRating";

const Filter = ({search, handleChange , fil, handleRating}) => {
  
  
  
  
  
 
  
    return <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          
          <Nav className="me-auto" style={{width: "100%", display: "flex", justifyContent: "space-between"}}>
            <Nav.Link href="#home">J.Movies</Nav.Link>
           <div>
           
            <input type="text" value={search} onChange={handleChange}/>
            <StarRating rating={fil} handleRating={handleRating}/>
            
            
            
            
            
          
           </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
    }
    
    export default Filter;
    