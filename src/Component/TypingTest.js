import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'


const URL = 'https://quotes.rest/quote/random'

const quote = `Love is a word that, in our culture, has almost lost its meaning. Let me tell you a story about the Rabi of Kursk. He came across a young man who was clearly enjoying a dish of fish that he was eating, and he said: ‘Young man, why are you eating that fish?’. And the young man says ‘because I love fish!’. He says: ‘Oh you love the fish, that’s why you took it out of the water and killed it and boiled it.’ He said ‘don’t tell me you love the fish; you love yourself, and because the fish taste good to you, therefore you took it out of the water and killed it and boiled it.’ So much of what is love is fish-love.`;


const TypingTest = () => {

    const [quoteToBeTyped, setQuoteToBeTyped] = useState([]);


    const container = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }

    const wordStyle = {
        padding: '2px'
    }

    const prepareQuoteToBeTyped = (quote) => {

        let currentQuote = quote.split(' ');


        setQuoteToBeTyped(currentQuote.map((word, i) =>
            <span key={i} style={wordStyle}>
                {word}
            </span>
        ))
    }


    useEffect(() => {
        prepareQuoteToBeTyped(quote);
    }, []);


    return (
        <>
            <Row className="h-50 align-items-center justify-content-md-center">
                <Col xl={10}>
                    <div style={container}>
                        {quoteToBeTyped}
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xl={10}>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Type here"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onChange={(e) => { console.log(e.target.value) }}
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row className="justify-content-md-center h-25">
                <Col xl={7}>
                    <Row className="mt-5">
                    </Row>
                    <Row className="mt-5">
                        <Col>
                            Time
                    </Col>
                        <Col>
                            Words/min
                    </Col>
                        <Col>
                            Errors
                    </Col>
                        <Col>
                            Error Rate
                    </Col>
                        <Col>
                            Last Key
                    </Col>

                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default TypingTest
