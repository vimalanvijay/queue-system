import React, { Component } from 'react'
import Background from './back.png';
import Typography from '@material-ui/core/Typography';

export default class Intro extends Component{

    constructor(){
        super()
    }

    render(){

        const useStyles = ({
            root: {
                margin:0,
                minHeight:'25vh',
                maxxHeight:"30vh",
                overflow:"hiddden",
                textAlign:"center",
                backgroundImage: "url(" + Background + ")",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: "30% 20%",
            },
            title:{
                paddingTop: "3vh",
                textAlign:"center",
                color:'#FCFCFF',
                fontSize:'11vmax'
            },
            subtitle:{
                textAlign:"center",
                color:'#FCFCFF',
                fontSize:'2.7vmax',
                marginTop:-10
            }
          });

        return(
            <div style={useStyles.root}>
               <div>
               <Typography variant="h1" style={useStyles.title}>
                    Q-Online
                </Typography>
                </div>
               <div  style={useStyles.subtitle} >
                <Typography variant="subtitle1" style={useStyles.subtitle}>
                    Que inline, online!
                </Typography></div>
            </div>
        )
    }
}