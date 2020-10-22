import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Nav } from './Nav/Nav'
import TypingTest from './Component/TypingTest'
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Container className="h-75 " fluid={'xl'}>
        <TypingTest />

      </Container>
    </div >
  );
}

export default App;
