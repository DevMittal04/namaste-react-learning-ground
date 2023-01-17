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
 * Tree Shaking - Removing unwanted code
 * Transitive Dependencies
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
    key: 'h1',
  },
  'Namaste React Again'
);

// React.createElement() => Object => HTML(DOM)
// console.log(heading);

// Complex Structure for Creating HTML using React.createElement
// const container = React.createElement(
//   'div',
//   {
//     id: 'container',
//   },
//   [React.createElement(
//     'h1',
//     {
//       id: 'title',
//       key: 'h1',
//     },
//     'Namaste React from Parcel'
//   ), React.createElement(
//     'ul',
//     {}, [React.createElement(
//       'li',
//       {},
//       'Home'
//     ), React.createElement(
//       'li',
//       {},
//       'About Us'
//     ), React.createElement(
//       'li',
//       {},
//       'Support'
//     )]
//   )]
// );


// JSX
const heading2 = (
  <h1 id='title' key='h2'>
    Namaste React
  </h1>
)


// React Components
// - Functional Components
// - Class Based Components

// Component
const Heading3 = () => {
  return (
    <div>
      <h1>Heading Component</h1>
    </div>
  )
}

// JSX Element
const heading4 = (
  <div>
    <h1>JSX Heading Element</h1>
  </div>
)

const HeaderComponent = () => {
  return (
    <div>
      {/* Component Composition */}
      <Heading3 />
      {Heading3()}
      {heading4}
      <h1>Namaste React Header Component</h1>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderComponent />);
