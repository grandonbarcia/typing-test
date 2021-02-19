import React from 'react';
import './App.css';
import { Container, Row } from 'react-bootstrap'
import { Nav as NavBar } from './Nav/Nav'
import Quote from './Component/Quote'
import Keyboard from './Component/Keyboard'
import InputField from './Component/InputField'
import Stats from './Component/Stats'
import { InputProvider } from './Context/context';
import TypingTest from './Component/TypingTest';
import Login from './Pages/Login';
import Admin from './Pages/Admin';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <InputProvider>
        <Router>
          <NavBar />
          <Container className="h-75" fluid={'xl'}>
            <Switch>
              <Route exact path="/">
                <TypingTest />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/admin">
                <Admin />
              </Route>
            </Switch>
          </Container>
        </Router>
      </InputProvider>
    </div >
  );
}

export default App;
