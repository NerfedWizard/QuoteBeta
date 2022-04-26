import { Button, styled,Box, Paper } from '@mui/material';

/**Eventually move all styled components to here */

export const linkStyle = {
    margin: "auto",
    textDecoration: 'none',
    color: 'purple',
    fontFamily: 'Hurricane',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textShadow: '1px 1px 2px rgb(10, 110, 32), 0 0 25px rgb(73, 195, 114),0 0 5px rgb(20, 110, 80) ',
}
export const ColorButton = styled(Button)(({ theme }) => ({
    color: 'black',
    font: 'bold',
    fontSize: '1.0rem',
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
    padding: 10,
    lineHeight: 1.5,
    fontSize: '2.5rem',
    fontFamily: 'Caveat',
    textAlign: 'left',
    color: 'darkslategrey',
    fontWeight: 'bold',
    borderRadius: 25,
    width: 'fit-content',

}));

export const MyBox = styled(Box)(({ theme }) => ({
    marginLeft: '0',
    marginRight: '50',
    marginTop: 0,
    marginBottom: 0,
    lineHeight: 1,
    padding: 5,
    width: 'fit-content',
    position: 'static',

}));
