import React from 'react'
import { Planet } from 'react-kawaii';
import useForm from '../Hooks/UseForm'
import { Row, Col, Form, FormControl, Button } from 'react-bootstrap'

const URL = 'http://localhost:8080/';

const Login = () => {

    const kawaii = {
        backgroundColor: '#16697a',
        borderRadius: '10px'
    }

    const formHolder = {
        backgroundColor: '#ffa62b',
        borderRadius: '10px'

    }

    const { handleChange, clearForm, loginInput, isFilled } = useForm();

    const loginUser = async (user) => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };

        try {
            let response = await fetch(URL + 'login', requestOptions);
            let data = await response.json();
            console.log("From server", data);
        } catch (error) {
            console.log(error);
        }

    }



    const handleLogin = () => {
        loginUser(loginInput);
    }


    return (
        <Row className="h-50 justify-content-md-center align-items-end">
            <Col className="h-50 shadow" xl={6} style={formHolder}>
                <Row className="h-100">
                    <Col xl={4} className="h-100 d-flex align-items-center" style={kawaii}>
                        <Planet className="mx-auto" size={100} mood="blissful" color="#ffa62b" />
                    </Col>
                    <Col xl={7} className="h-75 align-self-center">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control name="username" value={loginInput.username} onChange={handleChange} type="username" placeholder="Username" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control name="password" value={loginInput.password} onChange={handleChange} type="password" placeholder="Password" />
                            </Form.Group>
                            <Button onClick={handleLogin}
                                variant="primary"
                                type="button"
                                disabled={isFilled}>
                                Login
                            </Button >
                        </Form>
                    </Col >
                </Row>
            </Col>


        </Row >
    )
}

export default Login
