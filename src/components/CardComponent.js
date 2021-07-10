import React from "react";
import { Card,Button } from "react-bootstrap";
import './style.css'
import { LinkContainer } from "react-router-bootstrap";
import { useHistory } from 'react-router-dom';
 
const CardComponent = (props) => {
  
  const history = useHistory();
  const handleClick = () => history.push('/learn');
  return (
   
      <Card className="k" style={{ backgroundColor: '#DCE4DD',borderRadius:'25px' }}>
        <Card.Body>
          <Card.Title>{props.operations.opr}</Card.Title>
          <Card.Text>
          Here you can learn about different <strong>{props.operations.opr}</strong> techniques which would allow you to do calculations at a faster rate
          </Card.Text>
        </Card.Body>

        <Card.Footer>

          <Button className="bu" variant="primary" onClick={handleClick} >Start Learning</Button>

        </Card.Footer>
      </Card>
    
  );
};

export default CardComponent;

