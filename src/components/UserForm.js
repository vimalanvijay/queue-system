import React, { Component } from 'react';
import fire from './db'
import {Button,TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {Link} from 'react-router-dom'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default class Form extends Component{
  constructor(props){
    super(props)
    this.state={
        key:props.location.uid || localStorage.getItem('key'),
        number:props.location.ticket
    }
  }

  componentDidMount() {
    this.setState({
        key:this.state.key},()=>{
            localStorage.setItem('key',this.state.key)
        })
}

  signUp(uid){
      return function(){
        const userName=document.querySelector("#name").value
        const userPhone=document.querySelector("#phone").value

        var pushRef=fire.database().ref().child("shops/"+uid+"/users")
        pushRef.push({
        details:{
            name:userName,
            phone:userPhone
        }
        })
      }
 
      // ,()=>{
      //         window.location.href = "/thankyou";}

  }

  render(){
    return(
      <div style={{textAlign:'center',margin:"0 auto",padding:20}}>
        <Card variant="outlined">
          <CardContent style={{marginTop:20}}>
            <Typography style={{
              fontSize:"4vmax",
              textAlign:"center"
            }}color="textSecondary" gutterBottom>
              Confirm your spot!
            </Typography>
              
            <Typography color="textSecondary" style={{marginTop:10}}>
              <TextField id="name" fullWidth label="Name" />
            </Typography>

            <Typography color="textSecondary" style={{marginTop:10}}>
              <TextField id="phone" fullWidth label="Phone Number" />
            </Typography>

            <Link to={{ pathname: '/thankyou',
                 num:this.state.number
              }}>
              <Button variant="contained" color="primary" style={{marginTop:20}} size="large" onClick={this.signUp(this.state.key)}>Register</Button>
            </Link>
            </CardContent>
        
          </Card>
      </div>
    )
  }
}