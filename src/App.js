import React from 'react';
import data from './data.json';

import Container from '@material-ui/core/Container';
import Navbar from "./components/navbar";
import CardItem from "./components/card-item";

import './app.css';

function App() {

    return (
    <div className="app">
        <Container>
            <Navbar/>
               <div className="app__cards">
                   {data.Sheet1.map(company => (
                       <CardItem key={company.id} {...company}/>
                   ))}
               </div>
       </Container>
    </div>
  );
}

export default App;
