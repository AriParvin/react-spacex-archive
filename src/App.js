import { Container, Box } from '@mui/material';
import React from 'react';
import LaunchList from './LaunchList';

// import Form from './Launch';

const App = () => (
    <Container style={{}}>
        <Box style={{ lineHeight: '1em' }}>
            <h1 style={{ color: '#eee', fontSize: '3em', textAlign: 'center' }}>SpaceX</h1>
            <h1 style={{ color: '#eee', textAlign: 'center' }}>Launches</h1>
        </Box>
        <LaunchList />
    </Container>
);

export default App;
