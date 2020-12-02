import React, { useEffect } from 'react'
import { Row, Col, Card, Button, Form } from 'react-bootstrap'


const Admin = () => {
    return (
        <Row className="h-75 justify-content-md-center align-items-center">
            <Col>
                <Form>
                    <Form.Group>
                        <Form.Label>Add Quote</Form.Label>
                        <Form.Control type="email" placeholder="Author" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Control as="textarea" placeholder="Quote" rows={3} />
                    </Form.Group>
                </Form>
                <Button variant={"primary"} size={"sm"}>Add</Button>
            </Col>
            <Col>
                <Card>
                    <Card.Header>
                        <Row>
                            <Col>
                                Quote
                            </Col>
                            <Col xl="auto">
                                <Button variant={'primary'} size={'sm'}>Edit</Button>
                            </Col>
                            <Col xl="auto">
                                <Button variant={'danger'} size={'sm'}>Delete</Button>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {' '}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                erat a ante.{' '}
                            </p>
                            <footer className="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Admin
