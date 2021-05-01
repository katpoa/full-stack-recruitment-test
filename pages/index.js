import React, { useEffect, useState } from 'react';
import axios from 'axios';

import APP_STYLES from '../src/components/App/App.module.scss';
import logo from '../public/logo.svg';
import HEADER_STYLES from '../src/components/Header/Header.module.scss';


import styled from 'styled-components';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const app_getClassName = (className) => APP_STYLES[className] || 'UNKNOWN';

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
    <div className={app_getClassName('App')}>
      <Header />
      <main className={app_getClassName('App__main')} style={{background: 'hsl(260deg 12% 95%)'}}>
        {flights && itineraries ? <List flights={flights} itineraries={itineraries} /> : <>Loading...</>}
      </main>
    </div>
  );
};

// App.getInitialProps = async () => {
//     try {
//         const res = await axios.get('flights.json')
//         const { data } = res;
//         // console.log("FETCHING DATA INSIDE GETINITIALPROPS");
//         return { flights: data, itineraries: data.itineraries };
//     } catch (e) {
//         throw new Error(e);
//     }
//     // we want first fetch to be server-side rendered! Mounting related to DOM, which server-side doesn't have
//     // ReactDOMServer
// };


const header_getClassName = (className) => HEADER_STYLES[className] || 'UNKNOWN';

const Header = () => (
  <header className={header_getClassName('Header')}>
    <a href="/">
      <span className={header_getClassName('Header__hidden-text')}>Skyscanner</span>
      <img
        className={header_getClassName('Header__logo-image')}
        alt="Skyscanner"
        src={logo}
      />
    </a>
  </header>
);

const List = ({ flights, itineraries }) => (
    <div>
      {itineraries.map(itinerary => {
        let currentLegs = flights.legs.filter(leg => (leg.id === itinerary.legs[0]) || (leg.id === itinerary.legs[1] ));
        return (
          <Entry key={itinerary.id} itinerary={itinerary} legs={currentLegs}/>
        );
      })}
    </div>
);

const Container = styled.div`
    background: white;
    padding: 15px;
    height: 30vh;
    margin-bottom: 20px;
    border-radius: 7px;
    box-shadow: 0px 3px 3px rgba(0,0,0,0.2);
`;

const Flight = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Leg = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
`;

const Icon = styled.img`
    width: 33px;
    height: 33px;
`;

const Point = styled.div`
    display: flex;
    flex-direction: column;
`;

const Time = styled.div`
    font-size: 18px;
    margin: 0 10px 0 10px;
`;

const Airport = styled.div`
    font-size: 19px;
    margin: 10px 10px 0 10px;
    color: grey;
`;

const Travel = styled.div`
    display: flex;
    margin-right: 0;
    flex-direction: column;
`;

const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Button = styled.button`
    width: 120px;
    height: 45px;
    background: hsl(175deg 95% 33%);
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 22px;
`;

const Entry = ({ itinerary, legs }) => {
    const travel_time_1 = `${Math.floor(legs[0].duration_mins/60)}h ${legs[0].duration_mins%60}`;
    const travel_time_2 = `${Math.floor(legs[1].duration_mins/60)}h ${legs[1].duration_mins%60}`;
    const stops_1 = legs[0].stops === 1 ? <div style={{color: 'hsl(351deg 71% 59%)'}}>1 Stop</div> : <div style={{color: 'hsl(175deg 95% 33%)'}}>Direct</div>;
    const stops_2 = legs[1].stops === 1 ? <div style={{color: 'hsl(351deg 71% 59%)'}}>1 Stop</div> : <div style={{color: 'hsl(175deg 95% 33%)'}}>Direct</div>;

    return (

        <Container>
            <Flight>
                <Leg>
                    <Icon src={`https://logos.skyscnr.com/images/airlines/favicon/${legs[0].airline_id}.png`}/>
                    <Point>
                        <Time>
                            {legs[0].departure_time.slice(11,)}
                        </Time>
                        <Airport>
                            {legs[0].departure_airport}
                        </Airport>
                    </Point>
                    <ArrowForwardIcon color='disabled' style={{marginTop: '10px'}}/>
                    <Point>
                        <Time>
                            {legs[0].arrival_time.slice(11,)}
                        </Time>
                        <Airport>
                            {legs[0].arrival_airport}
                        </Airport>            
                    </Point>
                </Leg>
                <Travel>
                    <div style={{color: 'hsl(250deg 10% 76%)'}}>
                        {travel_time_1}
                    </div>
                    <>
                        {stops_1}
                    </>
                </Travel>
            </Flight>
            <Flight>
                <Leg>
                    <Icon src={`https://logos.skyscnr.com/images/airlines/favicon/${legs[1].airline_id}.png`}/>
                    <Point>
                        <Time>
                            {legs[1].departure_time.slice(11,)}
                        </Time>
                        <Airport>
                            {legs[1].departure_airport}
                        </Airport>
                    </Point>
                    <ArrowForwardIcon color='disabled' style={{marginTop: '10px'}}/>
                    <Point>
                        <Time>
                            {legs[1].arrival_time.slice(11,)}
                        </Time>
                        <Airport>
                            {legs[1].arrival_airport}
                        </Airport>            
                    </Point>
                </Leg>
                <Travel>
                    <div style={{color: 'hsl(250deg 10% 76%)'}}>
                        {travel_time_2}
                    </div>
                    <>
                        {stops_2}
                    </>
                </Travel>
            </Flight>
            <Footer>
                <Point>
                    <div style={{fontSize: '2rem', margin: '10px'}}>
                        {itinerary.price}
                    </div>
                    <div style={{color: 'hsl(250deg 10% 76%)'}}>
                        {itinerary.agent}
                    </div>
                </Point>
                <Button>Select</Button>
            </Footer>
        </Container>
    );
};

export default App;
