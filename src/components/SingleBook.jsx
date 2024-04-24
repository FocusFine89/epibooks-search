import {  Badge, Button, Card, Col } from "react-bootstrap"
// import horror from "../data/horror.json"

function SingleBook(props){
    return(
        <Col>
            <Card>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>Price: <Badge bg="success">{props.price}</Badge></Card.Text>
            <Card.Text>Asin Code: {props.asin}</Card.Text>

            <Button variant="dark" href="https://puginarug.com/">  Scopri di più</Button>
            </Card.Body>
        </Card>
      </Col>
    )
}

export default SingleBook