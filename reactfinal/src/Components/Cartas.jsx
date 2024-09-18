import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ropa1 from '../assets/Img/PrendaHombre1.jpg'
import ropa2 from '../assets/Img/PrendaHombre2.jpg'
import ropa3 from '../assets/Img/PrendaHombre3.jpg'
import ropa4 from '../assets/Img/PrendaMujer1.jpg'
import ropa5 from '../assets/Img/PrendaMujer2.jpg'
import ropa6 from '../assets/Img/PrendaMujer3.jpg'
import ropa7 from '../assets/Img/PrendaMujer4.jpg'


const Cartas = () => {
    const items = [
        {
            image: ropa1,
            description: 'Product 1 description.',
            price: 29.99,
            category: 'Electronics',
        },
        {
            image: ropa2,
            description: 'Product 2 description.',
            price: 19.99,
            category: 'Books',
        },
        {
            image: ropa3,
            description: 'Product 3 description.',
            price: 39.99,
            category: 'Clothing',
        },
        {
            image: ropa4,
            description: 'Product 4 description.',
            price: 49.99,
            category: 'Home',
        },
        {
            image: ropa5,
            description: 'Product 5 description.',
            price: 59.99,
            category: 'Garden',
        },
        {
            image: ropa6,
            description: 'Product 6 description.',
            price: 9.99,
            category: 'Toys',
        },
        {
            image: ropa6  ,
            description: 'Product 7 description.',
            price: 99.99,
            category: 'Beauty',
        },
        {
            image: ropa7,
            description: 'Product 8 description.',
            price: 15.99,
            category: 'Sports',
        },
    ];

    return (
        <Row className="justify-content-center">
            {items.map((item, index) => (
                <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                            <Card.Title>{item.category}</Card.Title>
                            <Card.Text>{item.description}</Card.Text>
                            <Card.Text>
                                <strong>Price: </strong>${item.price}
                            </Card.Text>
                            <Button variant="primary">Añadir</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default Cartas;
