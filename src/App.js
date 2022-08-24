import React from 'react';

import Container from '@material-ui/core/Container';

import Navbar from "./components/navbar";
import Intro from './pages/intro';

import './app.css';

function App() {

    return (
    <Container>
        <Navbar/>
        <Intro/>
    </Container>
  );
}

export default App;
