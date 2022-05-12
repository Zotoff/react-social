import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

let postsData = [
  {id: 1, message: 'Post 1', likesCount: 12},
  {id: 2, message: 'Post 2', likesCount: 12}
]


let dialogsData = [
  {id: 1, name: 'Pavel'},
  {id: 2, name: 'Maria'},
  {id: 3, name: 'Ivan'}
];
let messagesData = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'Hello'}
]

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
