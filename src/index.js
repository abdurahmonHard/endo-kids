import React, {Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './swipper.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./i18n";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense fallback="loading">
    <App />
    </Suspense>
);

reportWebVitals();
