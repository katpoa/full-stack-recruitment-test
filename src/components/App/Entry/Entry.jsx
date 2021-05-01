import React from 'react';

import styled from 'styled-components';

const Entry = ({ itinerary, legs }) => (
    <div>
        <img src={`https://logos.skyscnr.com/images/airlines/favicon/${legs[0].airline_id}.png`}/>
        <div>
            {legs[0].departure_time}
        </div>
        <div>
            {legs[0].departure_airport}
        </div>
        <div>
            {legs[0].arrival_time}
        </div>
        <div>
            {legs[0].arrival_airport}
        </div>
        <div>
            {itinerary.price}
        </div>
        <div>
            {itinerary.agent}
        </div>
        <button>Select</button>
    </div>

);
export default Entry;
