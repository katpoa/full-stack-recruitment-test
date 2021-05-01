import React from 'react';

import styled from 'styled-components';

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
    width: 30px;
    height: 30px;
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
                    <Point>
                        <Time>
                            {legs[0].arrival_time.slice(11,)}
                        </Time>
                        <Airport>
                            {legs[0].arrival_airport}
                        </Airport>            
                    </Point>
                </Leg>
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

export default Entry;
