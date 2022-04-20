import { Button, styled, Stack, Box, Paper } from '@mui/material';

/**Eventually move all styled components to here */

export const linkStyle = {
    // margin: "auto",
    textDecoration: 'none',
    color: 'green'
}
export const ColorButton = styled(Button)(({ theme }) => ({
    color: 'black',
    font: 'bold',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    fontFamily: 'Bitter',
    borderRadius: 25,
    backgroundColor: "rgb(0, 0, 0,0.09)",
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
    fontSize: 65,
    square: false,
    color: 'antiquewhite',
}));
export const QuoteItem = styled(Paper)(({ theme }) => ({
    backgroundColor: 'oldlace',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    fontFamily: 'Bitter',
    textAlign: 'left',
    color: 'darkslategrey',
    fontWeight: 'bold',
    maxWidth: 800,
    minWidth: 200,
}));