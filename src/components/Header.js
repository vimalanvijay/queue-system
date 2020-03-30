import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import Intro from './Intro'
import Logo from './logo.svg';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  bar:{
    backgroundColor:'#1a237e',
  },
  menuButton: {
    marginRight: theme.spacing(2),
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
    marginBottom:7
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar} >
        <Toolbar>
          <Link to={"/"} className={classes.links}>          
            <img src={Logo} alt="logo" className={classes.logo} />
          </Link>
          <Typography variant="h6" className={classes.title}>
          
          </Typography>
            <Link to={"/"} className={classes.links} >
              <Button color="inherit" >About</Button>
            </Link>
            <Link className={classes.links} >
              <Button color="inherit" >Contact</Button>
            </Link>

         </Toolbar>
      </AppBar>
      <Intro/>
    </div>
  );
}
