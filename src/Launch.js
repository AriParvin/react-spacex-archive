import { autocompleteClasses, Box, Container } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Counter } from './Counter';

export const Launch = (props) => {
    const [elapsedTime, setElapsedTime] = useState(true);

    useEffect(() => {
        if (props.launch) {
            let elapsedTime = new Date(props.launch.date_utc) - new Date();
            setTimeout(() => setElapsedTime(elapsedTime), 1);
        }
    });

    if (props.launch) {
        return (
            <Box
                sx={{
                    color: '#005288',
                    backgroundColor: '#eee',
                    border: '2.5px solid #A7A9AC',
                    borderRadius: '10px',
                    textAlign: 'left',
                    justifyContent: 'center',
                    padding: '1rem',
                    marginBottom: '1rem',
                }}>
                <Box sx={{ align: 'right' }}>
                    <Container
                        sx={{
                            marginLeft: 'auto',
                            marginRight: '0',
                            height: '3em',
                            width: '3em',
                            borderRadius: '50%',
                            backgroundColor: props.launch.upcoming
                                ? 'orange'
                                : props.launch.success
                                ? 'green'
                                : 'red',
                        }}></Container>
                    <h5
                        style={{
                            textAlign: 'right',
                            color: props.launch.upcoming
                                ? 'orange'
                                : props.launch.success
                                ? 'green'
                                : 'red',
                        }}>
                        {props.launch.upcoming
                            ? 'Upcoming'
                            : props.launch.success
                            ? 'Launch Successfull'
                            : 'Launch Failed'}
                    </h5>
                </Box>
                <h1 style={{ fontSize: '3em' }}>{props.launch.name}</h1>
                {/* <div style={{backgroundColor: props.launch.upcoming ? 'yellow' : props.launch.success ? 'green' : 'red'}}> */}
                {/* <div>
                    <span>Status: </span>
                    {props.launch.upcoming ? (
                        <span style={{ backgroundColor: 'yellow' }}>UPCOMING</span>
                    ) : null}
                    {props.launch.success ? (
                        <span style={{ backgroundColor: 'green' }}>SUCCESS</span>
                    ) : (
                        <span style={{ backgroundColor: 'red' }}>FAILED</span>
                    )}
                </div> */}

                {/* <div>Launch Time: {new Date(props.launch.date_utc).toString()}</div>
                <div>Current Time: {new Date().toString()}</div>
                <div>{elapsedTime}</div>
                {elapsedTime > 0 ? (
                    <div>Countdown: {formatDate(elapsedTime)}</div>
                ) : (
                    <div>In Space since: {formatDate(-elapsedTime)}</div>
                )} */}
                <div>
                    <p>Elapsed Time Since Launch:</p>
                    <Counter elapsedTime={elapsedTime} />
                </div>
                <p
                    style={{
                        textAlign: 'right',
                    }}>
                    ID:{props.launch.id}
                </p>
            </Box>
        );
    } else {
        return <></>;
    }
};
