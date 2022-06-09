import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/state';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={store.getState()} addPost={store.addPost.bind(store)} updatePost={store.updateNewPostText.bind(store)} />
      </React.StrictMode>
    </BrowserRouter>
  );
}

rerenderEntireTree(store.getState());


store._callSubscriber(rerenderEntireTree);