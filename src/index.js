import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const state = {
//   dimensions:{
//     height: 0,
//     width: 0
//   }
// }

// const getDimensions=()=>{
//   // const dimensions = {height:0, width:0}
//   const { dimensions } = state
//   dimensions.height = window.innerHeight
//   dimensions.width = window.innerWidth
//   return dimensions
// }

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<App dimensions={getDimensions()} newSize={getDimensions}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
