import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Play from './Components/Play';
import { Provider } from 'react-redux'
import {store} from './store/store'


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/play',
    element: <Play />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <RouterProvider router={appRouter}/>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
