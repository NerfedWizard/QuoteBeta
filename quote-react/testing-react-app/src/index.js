import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Box, Container, CssBaseline, Paper, styled } from '@mui/material';
import SelectVariants from './Component/CategorySelect';
import RandomQuote from './Component/RandomQuote';
import AuthorSelect from './Component/AuthorSelect';
import './App.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'rgba(86, 11, 184, 0.0)',
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
    // flex: '1',
    // justifyContent: 'space-around',
    display: 'flex',
    // size: '100vh',
}));

const PlusOne = () => {
    return (
        <FullscreenBox id='shine-background' style={{ height: '100vh', margin: 0, padding: 0 }}>
            <React.StrictMode>
                <Router>
                    <Container >
                        <CssBaseline />
                        <Item variant='contained'>
                            It's Time For Quotes.....
                        </Item>
                        <Route path='/' component={RandomQuote} />
                        <Route path='/category' component={SelectVariants} />
                        <Route path='/author' component={AuthorSelect} />
                    </Container>
                </Router>
            </React.StrictMode>
        </FullscreenBox>
    );
}
ReactDOM.render(<PlusOne />, document.getElementById('root'));