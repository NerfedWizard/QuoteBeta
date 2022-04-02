import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Box, Container, CssBaseline, Paper, styled, Skeleton } from '@mui/material';
import SelectVariants from './Component/CategorySelect';
import RandomQuote from './Component/RandomQuote';
import AuthorSelect from './Component/AuthorSelect';
import { MDBAnimation } from "mdbreact";
import './App.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'rgba(86, 11, 184, 0.111)',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    position: 'relative',
    justifyContent: 'center',
    textAlign: 'center',
    elevation: 5,
    fontFamily: 'Hurricane',
    fontSize: 65,
    square: false,
    color: 'antiquewhite',
}));
const FullscreenBox = styled(Box)(({ theme }) => ({
    flex: '1',
    justifyContent: 'space-around',
    display: 'flex',
}));

const PlusOne = () => {


    return (
        <div display='flex' flex='1' style={{ height: '150vh', margin: 0, padding: 0 }} id='shine-background'>
            <FullscreenBox sx={{ height: '20vh' }}>
                <Router>
                    <Container >
                        <CssBaseline />
                        <Item variant='contained'>
                            It's Time For Quotes.....
                        </Item>
                        <RandomQuote />
                        {/* <Route exact path='/' */}
                        <Route exact path='/category' component={SelectVariants} />
                        <Route exact path='/author' component={AuthorSelect} />
                        {/* <SelectVariants />
                    <AuthorSelect /> */}
                    </Container>
                </Router>
            </FullscreenBox>
        </div >
    );
}
ReactDOM.render(<PlusOne />, document.getElementById('root'));