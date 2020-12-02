import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useInputDispatch, useInputState } from '../Context'
import Word from './Word'




const Quote = ({ startGame, setBtnText, isGamePaused, pauseGame, quoteIndex, currentQuote, time, setTime, calculateWPM }) => {

    const input = useInputState();
    const dispatch = useInputDispatch();



    const [quoteToDisplay, setQuoteToDisplay] = useState([]);


    const container = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }


    const configQuote = (currentQuote) => {

        return currentQuote.map((eachWord, i) =>

            <Word key={i} word={eachWord} id={i} >

                {eachWord}

            </Word>
        )
    }


    const prepCurrQuote = (quote) => {
        let currentQuote = quote.split(' ');
        let mutatedQuote = configQuote(currentQuote);
        setQuoteToDisplay(mutatedQuote)
    }


    useEffect(() => {

        let inputString = input.join(' ');

        if (inputString === currentQuote) {

            pauseGame(true);
            setBtnText('Start');
            calculateWPM();
        } else {
            prepCurrQuote(currentQuote)
        }


    }, [input]);

    useEffect(() => {
        setTime(0);
        let interval = setInterval(addOne, 1000);
        pauseGame(false);
        setBtnText('Next');
        prepCurrQuote(currentQuote);
        return () => clearInterval(interval);
    }, [currentQuote])

    const addOne = () => {

        setTime((value) => value + 1);


    }









    return (
        <>
            <Row className="h-50 align-items-center panel" >
                <Col xl={11}>
                    <div style={container}>
                        {quoteToDisplay}
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Quote
