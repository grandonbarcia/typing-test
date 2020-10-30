import React from 'react';
import Container from 'react-bootstrap/Container'
import { Nav } from './Nav/Nav'
import Quote from './Component/Quote'
import Keyboard from './Component/Keyboard'
import InputField from './Component/InputField'
import Stats from './Component/Stats'
import './App.css';
import { InputProvider } from './Context/context';

function App() {
  return (
    <div className="App">
      <InputProvider>
        <Nav />
        <Container className="h-75 " fluid={'xl'}>
          <Quote />
          <InputField />
          <Stats />
        </Container>
      </InputProvider>
    </div >
  );
}

export default App;
