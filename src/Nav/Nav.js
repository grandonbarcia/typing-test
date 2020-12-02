import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";

export const Nav = () => {
    return (
        <Navbar expand="lg" variant="light" bg="light">
            <Container fluid={'lg'}>
                <Col className="mr-auto">
                    <Navbar.Brand as={Link} to="/" href="#">Typing Test </Navbar.Brand>
                </Col>
                <Col xl={'auto'}>
                    <Button as={Link} to="/login" variant="outline-danger" size={'sm'}>Admin</Button>
                </Col>
            </Container>
        </Navbar>
    )
}
