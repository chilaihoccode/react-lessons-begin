import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Browser }  from "react-router-dom";
// import {StoreProvider} from './store'
// import ControlVideo from './ControlVideo';
// import Button from './components';
import Demo from './Demo';


// Custom Event Fake Chat
// function emitComment (id) {
//     setInterval(() => {
//       window.dispatchEvent(
//         new CustomEvent(`lesson-${id}`, {
//           detail : `Noi dung cua bai hoc ${id}`
//         })    
//       )
//     },4000)
// }

// emitComment(1)
// emitComment(2)
// emitComment(3)

// console.log(React)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Browser>
      <Demo />
    </Browser>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
