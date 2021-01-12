import React from "react";
import { Navbar, Nav, Form, Button, FormControl, Card } from "react-bootstrap";


const Toppage = () => {
    return (
    <div>
        <div className="home-page">

    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">KryptoSwap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="#home">Metamask</Nav.Link>
        </Nav>
        <Form inline>
        <FormControl type="text" placeholder="Crypto Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
        </Form>
    </Navbar.Collapse>
    </Navbar>
    </div>
   <div className="main-card">
   <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="light">Recieve</Button>{' '}
    <Button variant="success">Send</Button>
  </Card.Body>
</Card>
</div>
</div>

    
);
};

export default Toppage;