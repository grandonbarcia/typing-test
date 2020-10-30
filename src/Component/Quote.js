import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { useInputState } from '../Context'
import Word from './Word'
import Letter from './Letter'



const quote = [`Love is a word that, in our culture, has almost lost its meaning. Let me tell you a story about the Rabi of Kursk. He came across a young man who was clearly enjoying a dish of fish that he was eating, and he said: ‘Young man, why are you eating that fish?’. And the young man says ‘because I love fish!’. He says: ‘Oh you love the fish, that’s why you took it out of the water and killed it and boiled it.’ He said ‘don’t tell me you love the fish; you love yourself, and because the fish taste good to you, therefore you took it out of the water and killed it and boiled it.’ So much of what is love is fish-love.`,
    `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.`];

const green = 'rgba(0, 255, 0, 0.3)';
const red = 'rgba(255, 0, 0, 0.3)';
const lightGray = 'lightgrey'

const Quote = () => {

    const input = useInputState();
    const [quoteToDisplay, setQuoteToDisplay] = useState([]);

    const [listOfQuotes, setListOfQuotes] = useState([...quote]);
    const [currentQuote, pickQuote] = useState(listOfQuotes[0]);


    const container = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }


    const configQuote = (currentQuote) => {

        return currentQuote.map((eachWord, i) =>

            <Word key={i} word={eachWord} id={i} >

                {eachWord.split('').map((eachChar, j) =>
                    <Letter key={j}>
                        {eachChar}
                    </Letter>)
                }

            </Word>
        )
    }


    const prepCurrQuote = (quote) => {
        let currentQuote = quote.split(' ');
        let mutatedQuote = configQuote(currentQuote);
        setQuoteToDisplay(mutatedQuote)
    }

    const random = (qoutes) => {

        let numOfQuotes = qoutes.length;
        let randomNum = Math.floor(Math.random() * Math.floor(numOfQuotes));



    }


    const selectNewQuote = (list) => {
        console.log(list)
        pickQuote(random(list));
        prepCurrQuote(currentQuote)
    }


    const displayStats = () => {

    }


    useEffect(() => {

        // input.join(' ') === currentQuote ? selectNewQuote(listOfQuotes) : prepCurrQuote(currentQuote)


        if (input.join(' ') === currentQuote) {
            displayStats();

        } else {
            prepCurrQuote(currentQuote)
        }


    }, [input]);


    return (
        <>
            <Row className="h-50 align-items-center justify-content-md-center">
                <Col xl={10}>
                    <div style={container}>
                        {quoteToDisplay}
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Quote
