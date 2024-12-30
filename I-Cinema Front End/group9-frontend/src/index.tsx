import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import reutesp from './Routing/Routing'
import Routesp from './Routing/Routing';
import Home from './pages/Home';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/HeaderTwo';
import { Provider } from 'react-redux';
import {store} from './Redux/Store'
import HeaderTwo from './Component/Header/HeaderTwo';
import Routing from './Routing/Routing'
import BookSeat from './pages/BookSeat';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    
    <Provider store={store}>
    <Routing/>

     {/* <RouterProvider router={Routesp} />  */}
     </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
