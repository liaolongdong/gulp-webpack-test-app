import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './component.jsx';

main();
console.log(__dirname);
function main() {
	ReactDOM.render(<Hello/>,document.getElementById('hello'));
}