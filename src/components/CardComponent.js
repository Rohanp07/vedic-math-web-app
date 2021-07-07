import React from "react";
import { Card,Button } from "react-bootstrap";

const CardComponent = (props) => {
  return (
    
      <Card style={{ backgroundColor: '#DCE4DD' }}>
        <Card.Body>
          <Card.Title>{props.operations.opr}</Card.Title>
          <Card.Text>
          Here you can learn about different <strong>{props.operations.opr}</strong> techniques which would allow you to do calculations at a faster rate
          </Card.Text>
        </Card.Body>

        <Card.Footer>
          <Button variant="primary">Start Learning</Button>
        </Card.Footer>
      </Card>
    
  );
};

export default CardComponent;
