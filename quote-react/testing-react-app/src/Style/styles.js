import { Button, styled, Box, Paper } from '@mui/material';

/**Eventually move all styled components to here */

export const linkStyle = {
    textDecoration: 'none',
    color: 'black',
    fontFamily: 'Hurricane',
    fontSize: '260%',
    textShadow: '.05vw .05vw .05vw rgb(20, 200, 32), 0 0 2vw rgb(255, 120, 114),0 0 .5vw rgb(20, 75,180) ',
}
export const NavButton = styled(Button)({
});

export const ColorButton = styled(Button)(({ theme }) => ({
    color: 'white',
    font: 'bold',
    fontSize: '1.0rem',
    fontWeight: 'bold',
    fontFamily: 'Bitter',
    borderRadius: 25,
    backgroundColor: "rgb(0, 0, 255)",
    '&:hover': {
        backgroundColor: "rgb(105, 106, 255,0.34)",
    },
}));
export const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'rgba(86, 11, 184, 0.0)',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    position: 'relative',
    justifyContent: 'center',
    textAlign: 'center',
    elevation: 5,
    fontFamily: 'Hurricane',
    fontSize: '65vw',
    square: false,
    color: 'antiquewhite',
}));
export const QuoteItem = styled(Paper)(({ theme }) => ({
    backgroundColor: 'oldlace',
    padding: 10,
    lineHeight: 1.5,
    fontSize: '200%',
    fontFamily: 'Caveat',
    textAlign: 'left',
    color: 'darkslategrey',
    fontWeight: 'bold',
    borderRadius: '25',
    width: 'relative',

}));

export const MyBox = styled(Box)(({ theme }) => ({
    lineHeight: 1,
    padding: 15,
    width: '100%',
    position: 'static',
    aligSelf: true,

}));
