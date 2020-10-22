import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

export const Nav = () => {
    return (
        <Navbar expand="lg" variant="light" bg="light">
            <Container fluid={'lg'}>
                <Col className="mr-auto">
                    <Navbar.Brand href="#">Typing Test </Navbar.Brand>
                </Col>
                <Col xl={'auto'}>
                    <Button variant="outline-primary" size={'sm'}>Login</Button>
                </Col>
                <Col xl={'auto'}>
                    <Button variant="outline-secondary" size={'sm'} >Sign Up</Button>
                </Col>
            </Container>
        </Navbar>
    )
}
