import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin:20,
    textAlign:'center'
  },
  subtitle: {
   marginTop:40
  },
  title: {
    fontSize: 50,
  },
  disclaimer: {
    fontSize:14,
    textAlign:"left",
    marginTop: 30,
  },
});

export default function ThankCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Thank you!
        </Typography>
        <Typography variant="h5" component="h2">
          Your ticket number is: {props.info.ticket}
        </Typography>

        <Typography variant="body2" component="p" color="textSecondary" className={classes.subtitle}>
            Plase save a screenshot of this to remember your number.
            An automatic notification system is in works. 
            Thank you for understanding! :) 
        </Typography>
        
        <Typography variant="body2" component="p" color="textSecondary" className={classes.disclaimer}>
          Disclaimer: 
          
          {' This app is still under the prototype stage.'}

          {'Please arrive at desination 5 number before yours to ensure you are on time.'}
        </Typography>
      </CardContent>
      
    </Card>
  );
}