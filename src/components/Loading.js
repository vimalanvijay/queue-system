import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from './Card'
import Loadheader from './LoadHeader';
const useStyles = makeStyles(theme => ({
  root: {
      textAlign:"center",
      margin:"0 auto",
      marginTop:"30vh"

  },
}));

export default function Loading() {
  const classes = useStyles();

  return (
    <div>
    <Loadheader/>
    <div className={classes.root}>
      
      <CircularProgress color="secondary"/>
    </div>
    </div>
  );
}