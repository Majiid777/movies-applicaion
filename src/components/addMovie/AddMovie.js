import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { movieAdd } from '../../redux/action';

const AddMovie = () => {
     // Modal states :
    const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

 // AddMovie states :
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [rate, setRate] = useState(0);

 

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = { id: Math.random(), name: name, image: image, rating: rate, date: date };
    if (name && date && rate && image) {
     
      dispatch(movieAdd( newMovie ));
      handleClose()
     

    }}
    
return (
<div>
<Button variant="primary" onClick={handleShow} >
        Add Movie{""}
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <form action="" onSubmit={handleSubmit}>
     <div style={{ margin: "15px" }}>
      <label style={{ width: "150px" }} htmlFor="">Title:</label>
      <input style={{ width: "350px" }} type="text" value={name} onChange={(e) => { setName(e.target.value);}}/>
     </div>
     <div style={{ margin: "15px" }}>
      <label style={{ width: "150px" }} htmlFor="">Release Date:</label>
      <input style={{ width: "350px" }} type="text" value={date} onChange={(e) => { setDate(e.target.value);}}/>
     </div>
     <div style={{ margin: "15px" }}>
      <label style={{ width: "150px" }} htmlFor="">Cover:</label>
      <input style={{ width: "350px" }} type="text" value={image} onChange={(e) => { setImage(e.target.value);}}/>
     </div>
     <div style={{ margin: "15px" }}>
      <label style={{ width: "150px" }} htmlFor="">Rate:</label>
      <input style={{ width: "350px" }} type="text" value={rate} onChange={(e) => { setRate(e.target.value);}}/>
     </div>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" type="submit"  >Save Changes</Button>
            </form>
        </Modal.Body>
      </Modal>
</div>
);
};

export default AddMovie;