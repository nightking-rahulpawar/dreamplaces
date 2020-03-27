import React from 'react';
import './App.css';
import Header from './components/Header';
import Tourlist from './components/tourlist/Tourlist';
import TourData from './components/tourlist/TourData';
import NewTour from './components/tourlist/NewTour';
function App() {
  return (
    <div className="App">
      <Header/>
      <Tourlist/>
         </div>
  );
}

export default App;
