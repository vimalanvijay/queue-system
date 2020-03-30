import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from './logo.svg';
import Button from '@material-ui/core/Button';
import Intro from './Intro'
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  bar:{
    backgroundColor:'#1a237e',
  },
  title: {
    flexGrow: 1,
  },
  links:{
    textDecoration: 'none',
    color:"white",
  },
  logo:{
    fill:"white",
    maxWidth:66,
    paddingBottom:10
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar} >
        <Toolbar>
          <img src={Logo} alt="logo" className={classes.logo} />
          <Typography variant="h6" className={classes.title}>
          
          </Typography>
            <Button color="inherit" >About</Button>
            <Button color="inherit" >Contact</Button>          
        </Toolbar>
      </AppBar>
      <Intro/>
    </div>
  );
}