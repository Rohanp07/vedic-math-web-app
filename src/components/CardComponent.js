import React from "react";
import { Card,Button } from "react-bootstrap";

const CardComponent = (props) => {
  return (
    
      <Card>
        <Card.Body>
          <Card.Title>{props.operations.opr}</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>

        <Card.Footer>
          <Button variant="primary">Start Learning</Button>
        </Card.Footer>
      </Card>
    
  );
};

export default CardComponent;
