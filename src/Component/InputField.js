import React, { useEffect, useRef } from 'react'
import { Row, Col, InputGroup, FormControl } from 'react-bootstrap'
import { setInputState, useInputDispatch, useInputState } from '../Context'


const InputField = ({ isGamePaused, prepNewQuote, textBar }) => {
    const dispatch = useInputDispatch()
    const input = useInputState()

    const handleChange = (e) => {
        let inputString = e.target.value;
        setInputState(dispatch, inputString)


    }

    const downHandler = ({ key }) => {

        if (key === 'Escape') prepNewQuote();

    }






    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        return () => {
            window.removeEventListener('keydown', downHandler);
        };

    }, [])

    return (
        <Row className="">
            <Col xl={11}>
                <InputGroup className="mb-3">
                    <FormControl
                        value={input.join(' ')}
                        placeholder="Type here"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={handleChange}
                        ref={textBar}
                        disabled={isGamePaused}
                    />
                </InputGroup>
            </Col>
        </Row>
    )
}

export default InputField
