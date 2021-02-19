import React, { useState, useEffect, useRef } from 'react'
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
    const [currentQuote, setQuote] = useState(' ');
    const [author, setAuthor] = useState(' ')

    const [time, setTime] = useState(0);
    const [wpm, setWpm] = useState(0);
    const [accuracy, setAccuracy] = useState(0);

    const input = useInputState();
    const dispatch = useInputDispatch()

    const textBar = useRef(null);


    const fetchQuote = async () => {

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }

        try {
            let response = await fetch(URL, requestOptions);
            let data = await response.json();
            console.log(data);
            setQuote(data.quote)
            setAuthor(data.arthur);
            setBtnText('Next')
            textBar.current.focus();
        } catch (err) {
            console.log(err)
        }

    }


    const prepNewQuote = async () => {
        setBtnText('Loading...')
        setInputState(dispatch, "")
        fetchQuote();

        if (!isGameStarted) startGame(true)


    }

    const calculateWPM = () => {

        let allTypedEntries = input.join(' ').length;
        let minute = time / 60
        let grossWPM = (allTypedEntries / 5) / minute;

        setWpm(grossWPM.toFixed(2));


    }

    const calculateAccuracy = () => {
        let allTypedEntries
        let errorsTyped
        let minutes

    }




    return (

        <Row className="h-75 justify-content-md-center">
            <Col xl={8} className=" h-75 align-self-center">
                {isGameStarted ? <Quote startGame={startGame} pauseGame={pauseGame} isGamePaused={isGamePaused} setBtnText={setBtnText} quoteIndex={quoteIndex} currentQuote={currentQuote} time={time} setTime={setTime} calculateWPM={calculateWPM} author={author} isGameStarted={isGameStarted} wpm={wpm} accuracy={accuracy} /> : <StartDescription />}
                <Stats wpm={wpm} accuracy={accuracy} />
                <InputField isGamePaused={isGamePaused} prepNewQuote={prepNewQuote} textBar={textBar} />
                <StartButton handleClick={prepNewQuote} text={btnText} />
            </Col>
        </Row>

    )
}

export default TypingTest
