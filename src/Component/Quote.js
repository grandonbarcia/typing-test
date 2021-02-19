import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useInputDispatch, useInputState } from '../Context'
import Letter from './Letter'
import Word from './Word'

const Quote = ({ startGame, setBtnText, isGamePaused, pauseGame, quoteIndex, currentQuote, time, setTime, calculateWPM, author, isGameStarted, wpm, accuracy }) => {

    const input = useInputState();
    const dispatch = useInputDispatch();




    const [quoteToDisplay, setQuoteToDisplay] = useState([]);
    const [numOfErrors, setNumOfErrors] = useState(0);
    const [errorIndex, setErrorIndex] = useState([]);

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


    const prepCurrQuote = () => {
        let mutatedQuote = configQuote(currentQuote.split(' '));
        setQuoteToDisplay(mutatedQuote)
    }




    useEffect(() => {
        let inputString = input.join(' ');
        console.log('----------------------------');
        console.log("Errors: ", numOfErrors);
        if (inputString === currentQuote) {
            setNumOfErrors(0)
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
        <Row className="h-50 align-items-end quote" >
            <Col>
                <Row>
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
            </Col>
        </Row>
    )
}

export default Quote
// console.log(errorIndex.length);
//             console.log('Wrong');
//             if (errorIndex.length > 0) {
//                 let count = 0;
//                 for (let i = 0; i < 2; i++) {
//                     if (arr[i] === errorIndex[0][i]) {
//                         count++;
//                     }
//                 }
//                 if (count === 2) {
//                     console.log("Fix This ")
//                     setErrorIndex(errorIndex.filter((el) => {

//                         for (let j = 0; j < 2; j++) {
//                             let count = 0;
//                             if (el[j] == arr[j]) {
//                                 count++
//                             }
//                         }

//                         if (count === 2) {
//                             return false
//                         } else {
//                             return true
//                         }

//                     }));
//                 }

//             } else {

//                 setErrorIndex((oldarray) => [[currWordIndex, currCharIndex], ...oldarray])
//                 setNumOfErrors((errors) => errors + 1)
//                 console.log("Curr Char: ", arr)
//             }