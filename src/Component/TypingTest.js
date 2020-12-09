import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Quote from './Quote';
import StartDescription from './StartDescription'
import InputField from './InputField';
import StartButton from './StartButton';
import { setInputState, useInputDispatch, useInputState } from '../Context'
import Stats from './Stats';

const URL = 'https://infinite-waters-36020.herokuapp.com/quote'





const TypingTest = () => {



    const [isGameStarted, startGame] = useState(false);
    const [isGamePaused, pauseGame] = useState(true);

    const [btnText, setBtnText] = useState('Start');

    const [quoteIndex, setQuoteIndex] = useState(0);
    const [currentQuote, pickQuote] = useState(' ');

    const [time, setTime] = useState(0);
    const [wpm, setWpm] = useState(0);
    const [accuracy, setAccuracy] = useState(0);

    const input = useInputState();
    const dispatch = useInputDispatch()


    const fetchQuote = async () => {

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }
        try {
            let response = await fetch(URL, requestOptions);
            let data = await response.json();

            pickQuote(data.quote)

        } catch (err) {
            console.log(err)
        }

    }


    const prepNewQuote = async () => {
        setBtnText('Loading...')
        setInputState(dispatch, "")
        fetchQuote();

        if (!isGameStarted) {
            startGame(true)

        }

    }

    const calculateWPM = () => {

        let allTypedEntries = input.join(' ').length;
        let minute = time / 60
        let grossWPM = (allTypedEntries / 5) / minute;

        console.log('Characters: ', allTypedEntries);
        console.log('Minutes: ', minute);
        console.log("Gross WPM :", grossWPM);

        setWpm(grossWPM.toFixed(2));


    }

    const calculateAccuracy = () => {

    }


    return (
        <Row className="h-75 justify-content-md-center">
            <Col xl={8} className=" h-50 align-self-center">

                {isGamePaused && isGameStarted ? <Stats wpm={wpm} accuracy={accuracy} /> : ' '}

                {isGameStarted ? <Quote startGame={startGame} pauseGame={pauseGame} isGamePaused={isGamePaused} setBtnText={setBtnText} quoteIndex={quoteIndex} currentQuote={currentQuote} time={time} setTime={setTime} calculateWPM={calculateWPM} /> : <StartDescription />}
                <InputField isGamePaused={isGamePaused} prepNewQuote={prepNewQuote} />
                <StartButton handleClick={prepNewQuote} text={btnText} />
            </Col>
        </Row>
    )
}

export default TypingTest
