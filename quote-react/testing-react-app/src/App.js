import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box, Container, CssBaseline, Paper, styled } from '@mui/material';
import SelectVariants from './Component/CategorySelect';
import RandomQuote from './Component/RandomQuote';
// import Nav Buttons from './Component/NavButtons';
import AuthorSelect from './Component/AuthorSelect';
import './App.css';
import Landing from './Component/Landing';


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
// const FullscreenBox = styled(Box)(({ theme }) => ({
//     display: 'flex',
// }));

const App = () => {

    return (
        // <div className="background-container">
        //     <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt=""></img>
        //     <div className='stars'>
        //         <div className='twinkling'>
        //             <div className='clouds'>
        //                 <div className='layer'></div></div></div></div>
        <Box id='gradient-shift' display='flex' style={{ height: '100vh', margin: 0, padding: 0 }}>
            <Router>
                <Container >
                    <CssBaseline />
                    <Item variant='contained'>
                        It's Time For Quotes.....
                    </Item>
                    <Routes>
                        <Route exact path='/' element={<Landing />} />
                        <Route exact path='/random' element={<RandomQuote />} />
                        <Route exact path='/category' element={<SelectVariants />} />
                        <Route exact path='/author' element={<AuthorSelect />} />
                    </Routes>
                </Container>
            </Router>
        </Box>
        // </div >
    );
}
export default App;