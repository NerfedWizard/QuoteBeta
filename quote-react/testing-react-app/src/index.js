import React from 'react';
import ReactDOM from 'react-dom';
import { Box, Container, CssBaseline } from '@mui/material';
import SelectVariants from './Component/CategorySelect';

// import AuthorSelect from './Component/AuthorSelect';
import RandomQuote from './Component/RandomQuote';

const PlusOne = () => {

    return (
        <div>
            <CssBaseline />
            <Container maxWidth='xl'>
                <Box sx={{ minWidth: 120 }}>
                    <div className="App-header">
                        <div className="hurricane-font">
                            <h1 className="dancing-font">It's Time For Quotes</h1>
                            <RandomQuote />
                            <SelectVariants />
                        </div>
                    </div>
                </Box>
            </Container>
        </div>
    );
}



ReactDOM.render(<PlusOne />, document.getElementById('root'));