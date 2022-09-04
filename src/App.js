import React from 'react';
import { BrowserRouter } from "react-router-dom";

import Container from '@material-ui/core/Container';

import Navbar from "./components/navbar";
import Intro from './pages/intro';

import './app.css';

function App() {

    return (
        <BrowserRouter>
            <Container>
                <Navbar/>
                <Intro/>
            </Container>
        </BrowserRouter>
  );
}

export default App;
