// React Way
const heading = React.createElement(
    'h1',
    {
        id: 'title',
    },
    'Namaste React'
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

// JS Way
// const heading = document.createElement('h1');
// heading.innerHTML = 'Namaste React';
// const root = document.getElementById('root');
// root.appendChild(heading);