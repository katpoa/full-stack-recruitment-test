import React from 'react';

import Entry from '../Entry';


const List = ({ flights, itineraries }) => (
  <header>
    <div>
      {itineraries.map(itinerary => {
        let currentLegs = flights.legs.filter(leg => (leg.id === itinerary.legs[0]) || (leg.id === itinerary.legs[1] ));
        return (
          <Entry key={itinerary.id} itinerary={itinerary} legs={currentLegs}/>
        );
      })}
    </div>
  </header>
);

export default List;
