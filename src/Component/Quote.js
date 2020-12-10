import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useInputDispatch, useInputState } from '../Context'
import Letter from './Letter'
import Word from './Word'
import Stats from './Stats'




const Quote = ({ startGame, setBtnText, isGamePaused, pauseGame, quoteIndex, currentQuote, time, setTime, calculateWPM, author, isGameStarted, wpm, accuracy }) => {

    const input = useInputState();
    const dispatch = useInputDispatch();



    const [quoteToDisplay, setQuoteToDisplay] = useState([]);


    const container = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: '1px',
        marginBottom: '10px',
    }

    const authorStyle = {
        fontSize: '17px',
        paddingBottom: '10px',
        fontWeight: '700'
    }


    const configQuote = (currentQuote) => {

        return currentQuote.map((eachWord, i) =>

            <Word key={i} word={eachWord} id={i} >

                {

                    eachWord.split("").map((eachChar, j) =>

                        <Letter key={j} char={eachChar} j={j} i={i} >

                            {eachChar}

                        </Letter>

                    )

                }

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
        prepCurrQuote(currentQuote);

        return () => clearInterval(interval);
    }, [currentQuote])

    const addOne = () => {

        setTime((seconds) => seconds + 1);

    }


    return (
        <>
            <Row className="h-50 align-items-end panel" >
                <Col>
                    {isGamePaused && isGameStarted ? <Stats wpm={wpm} accuracy={accuracy} /> : ' '}
                </Col>
                <Col xl={12}>
                    <div style={container}>
                        {quoteToDisplay}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col style={authorStyle}>
                    {author}
                </Col>
            </Row>
        </>
    )
}

export default Quote
