import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../Header';
import List from '../List';

import STYLES from './App.scss';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const App = () => {
  const [flights, setFlights] = useState([]);
  const [itineraries, setItineraries] = useState([]);

  const getFlights = async () => {
    axios.get('flights.json')
      .then(res => {
        setFlights(res.data);
      })
      .catch(e => {throw new Error(e)});
  };
  // wrangle data so that in itineraries, legs correspond properly
  useEffect(() => { getFlights() }, []);

  const getItineraries = async () => {
    axios.get('flights.json')
      .then(res => {
        setItineraries(res.data.itineraries);
      })
      .catch(e => {throw new Error(e)});
  };
  // wrangle data so that in itineraries, legs correspond properly
  useEffect(() => { getItineraries()} , []);


  return (
    <div className={getClassName('App')}>
      <Header />
      <main className={getClassName('App__main')} style={{background: 'hsl(260deg 12% 95%)'}}>
        {flights && itineraries ? <List flights={flights} itineraries={itineraries} /> : <>Loading...</>}
      </main>
    </div>
  );
};

export default App;
