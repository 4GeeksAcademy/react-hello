import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

function CardComponent() {
  return (
    
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://www.kurin.com/wp-content/uploads/placeholder-square.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
                <Button variant="primary">Find Out More!</Button>
        </Card.Footer>
      </Card>
  
  );
}

export default CardComponent;