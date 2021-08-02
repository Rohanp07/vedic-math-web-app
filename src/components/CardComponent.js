import React from "react";
import { Card,Button } from "react-bootstrap";
import './style.css'
import { useHistory } from 'react-router-dom';

 
const CardComponent = (props) => {
 
  const loc =props.operations.page;
  console.log(loc)
  const history = useHistory();
  const handleClick = () => history.push(loc); 
  // const [showModal, setShow] = useState(false);
  // const [tr,setTr]=useState("null")
  // const handleClose = () => setShow(false);
  return (
   
      <Card className="k" style={{ backgroundColor: '#DCE4DD',borderRadius:'25px' }}>
        <Card.Body>
          <Card.Title class="cardTitle">{props.operations.opr}</Card.Title>
          <Card.Text>
              Here you can learn about <strong>{props.operations.opr}</strong> technique which would allow you to do calculations at a faster rate
          </Card.Text>
        </Card.Body>

        <Card.Footer>

          <Button className="bu" variant="primary" onClick={handleClick} id={props.operations.opr} >Start Learning</Button>

        </Card.Footer>
      </Card>
    
  );
};

export default CardComponent;

