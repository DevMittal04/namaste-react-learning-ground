/***
 * 
 * HMR - Hot Module Replacement
 * File Watcher Algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our code
 * Dev and Production Build
 * Super fast build Algorithm
 * Image Optimization
 * Caching while Development
 * Compression
 * Compatible with older versions of browser
 * HTTPS on 
 * port Number
 * Consistent Hashing
 * Zero Config
 * 
 * 
 * 
 * 
 */


import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement(
    'h1',
    {
        id: 'title',
    },
    'Namaste React from Parcel'
);
const heading2 = React.createElement(
    'h1',
    {
        id: 'title',
    },
    'Namaste React Again'
);
const container = React.createElement(
    'div',
    {
        id: 'container',
    },
    [heading, heading2]
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);
