import React,{ useState }from "react";
import { Card,Button } from "react-bootstrap";
import './style.css'
import { LinkContainer } from "react-router-bootstrap";
import { useHistory } from 'react-router-dom';
import { Modal } from "react-bootstrap";
 
const CardComponent = (props) => {
  var tr="";
  const opr={
      'Addition':['Nikilam-Sutra','Ekadiken'],
      'Subtraction':['Ty','Hello']
  }
  const history = useHistory();
  const handleClick = () => history.push('/learn');
  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
  
    // console.log(e.target.id);
    tr=e.target.id;
    tr=(opr[tr])[0];
    setShow(true);
    // console.log(tr);
  }
  return (
   
      <Card className="k" style={{ backgroundColor: '#DCE4DD',borderRadius:'25px' }}>
        <Card.Body>
          <Card.Title>{props.operations.opr}</Card.Title>
          <Card.Text>
              Here you can learn about different <strong>{props.operations.opr}</strong> techniques which would allow you to do calculations at a faster rate
          </Card.Text>
        </Card.Body>

        <Card.Footer>

          <Button className="bu" variant="primary" onClick={handleShow} id={props.operations.opr} >Start Learning</Button>
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Button variant="primary" onClick={handleClick}>
                 { console.log(tr) }
            </Button>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

        </Card.Footer>
      </Card>
    
  );
};

export default CardComponent;

