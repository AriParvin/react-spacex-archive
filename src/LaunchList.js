import React from 'react';
import axios from 'axios';
import { Launch } from './Launch';
import { Autocomplete, Grid, TextField, Box } from '@mui/material';
export default class LaunchList extends React.Component {
    state = {
        selectedLaunch: null,
        launches: [],
    };

    componentDidMount() {
        axios.get('https://api.spacexdata.com/v4/launches/past').then((res) => {
            const launches = res.data;
            this.setState({ launches });
        });
    }

    handleLaunchClick(launch) {
        this.setState({ selectedLaunch: launch });
    }

    render() {
        return (
            <div>
                <Autocomplete
                    disablePortal
                    options={this.state.launches}
                    getOptionLabel={(option) => [option.name, option.id]}
                    onChange={(event, newValue) => {
                        this.handleLaunchClick(newValue);
                    }}
                    sx={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: '100%',
                        backgroundColor: '#eee',
                        marginBottom: '1rem',
                        marginTop: '1em',
                        borderRadius: '5px',
                    }}
                    renderInput={(params) => <TextField {...params} label='Select Launch' />}
                />
                <Launch launch={this.state.selectedLaunch} />
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        {this.state.launches.slice(-3).map((launch, index) => (
                            <Grid item sm={4} key={index}>
                                <Box
                                    sx={{
                                        justifyContent: 'center',
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                        width: '15rem%',
                                        border: '2.5px solid #A7A9AC',
                                        color: '#A7A9AC',
                                        fontWeight: '300',
                                        backgroundColor: '#005288',
                                        padding: '2rem',
                                        borderRadius: '10px',
                                    }}>
                                    <h4 style={{ color: '#eee' }}>{launch.name}</h4>
                                    <div style={{ fontSize: '1rm' }}> ID: {launch.id} </div>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </div>
        );
    }
}
