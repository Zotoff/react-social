import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <BrowserRouter>
    <Provider  store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);


// let rerenderEntireTree = (state) => {
//   root.render(
//     <BrowserRouter>
//       <Provider  store={store}>
//         <App />
//       </Provider>
//     </BrowserRouter>
//   );
// }

// rerenderEntireTree(store.getState());
// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEntireTree(state);
// });