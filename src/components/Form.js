import React, { Component } from 'react';
import fire from './db'
import {Button,TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default class Form extends Component{
  constructor(){
    super()
  }

  signUp(){
    const shopName=document.querySelector("#name").value
    const shopEmail=document.querySelector("#email").value
    const shopAddress=document.querySelector("#address").value

    var pushRef=fire.database().ref('/shops')
    pushRef.push({
      overview:{
        name:shopName,
        line:"0",
        address:shopAddress,
        email:shopEmail
      }
    },()=>{
      window.location.href = "/shops";})


  }

  render(){

    const style={
      color:"white"
    }
    return(
      <div style={{textAlign:'center',margin:"0 auto",padding:20}}>
        <Card variant="outlined">
          <CardContent style={{marginTop:20}}>
            <Typography style={{
              fontSize:"4vmax",
              textAlign:"center"
            }}color="textSecondary" gutterBottom>
              Register your shop!
            </Typography>
              
            <Typography color="textSecondary" style={{marginTop:10}}>
              <TextField id="name" fullWidth label="Shop Name" />
            </Typography>

            <Typography color="textSecondary" style={{marginTop:10}}>
              <TextField id="address" fullWidth label="Shop Address" />
            </Typography>


            <Typography color="textSecondary" style={{marginTop:10}}>
              <TextField id="email" fullWidth label="Email Address" />
            </Typography>

            <Button variant="contained" color="primary" style={{marginTop:20}} size="large" onClick={this.signUp}>Register</Button>
            </CardContent>

            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>

          </Card>
      </div>
    )
  }
}