import React from 'react';
import ReactDOM from 'react-dom/client';

import ProjectProvider from "./context/context";

import App from './App';

import './index.css';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ProjectProvider>
        <App />
    </ProjectProvider>
);
