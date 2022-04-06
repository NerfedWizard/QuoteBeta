import React from "react";
import { render } from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

<<<<<<< HEAD
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
=======
render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
reportWebVitals(console.log);
>>>>>>> apr6
