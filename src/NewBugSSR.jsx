import React from 'react';
import ReactDOM from 'react-dom';
import { NewBug } from './NewBug';

ReactDOM.hydrate(
    <NewBug />,
    document.getElementById('root')
);