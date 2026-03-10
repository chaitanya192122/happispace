import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Sections/App';
import SlideShow from './Sections/SlideShow';
import Celebrate from './Sections/Celebrate';
import Location from './Sections/Location';
import Footer from './Sections/Footer';
import reportWebVitals from './reportWebVitals';
import Services from './Sections/Services';
import Branches from './Sections/Branches';
import Questions from './Sections/Questions';
import Gallery from './Sections/Gallery';
import Packages from './Sections/Packages';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <SlideShow/>
    <Celebrate/>
    <Services/>
    <Questions/>
    <Gallery/>
    <Packages/>
    <Branches/>
    <Location/>
    <Footer/>
    

    
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
