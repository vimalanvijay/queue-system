import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 270,
    maxWidth: 400,  
    margin: "0 auto",
    marginTop: 20,
    marginBottom: 20

  },
  align:{
  paddingLeft:20,
  paddingRight:20,

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 40,
    textAlign: "center"
  },
  subtitle:{
    fontSize: 54,
    textAlign: "center"
  },
  address:{
    marginTop:5,
    fontSize: 16,
    textAlign: "center"
  },
  ppl:{
    fontSize: 16,
    marginTop:-15,
    textAlign: "center"
  },
  pos: {
    marginBottom: 12,
  },
});

export default function MaterialCard(props) {
  const classes = useStyles();

  return (
    <div className={classes.align}>
      <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.title}>
          {props.info.title}
        </Typography>
        <Typography className={classes.address} color="textSecondary" >
         {props.info.address}
        </Typography>
        <Typography className={classes.pos} color="textSecondary" className={classes.subtitle}>
         {props.info.data}
        </Typography>
        <Typography className={classes.pos} color="textSecondary" className={classes.ppl}>
         People in line
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
    </div>
    
  );
}

