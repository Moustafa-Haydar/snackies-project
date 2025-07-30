import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import TokenProvider from './Contexts/TokenContext';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <TokenProvider>
        <App />
    </TokenProvider>
);
