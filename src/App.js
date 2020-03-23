import React, { Component } from "react"
import InLine from "./components/Card"
import Header from "./components/Header"
import './style.css'

import fire from "./components/db"
class App extends Component{

    constructor(){
        super()
        this.state={
            ppl_inline:null,
            urNum: null
        }
    }

    componentDidMount(props){
        var line = fire.ref().child('shop1').child('today').child('overview').child('standing');
        var urNum = fire.ref().child('shop1').child('today').child('overview').child('nextnumber');

        line.on('value', snap =>{
            this.setState({
                ppl_inline:snap.val(),
            })
        });

        urNum.on('value', snap =>{
            this.setState({
                urNum:snap.val(),
            })
        });
    }

    

    render(){
        return (
            <div>
                <Header />
                <InLine
                    info={{title:"People in line", data:this.state.ppl_inline}}
                />

            
                <InLine 
                    info={{title:"Your number:", data:this.state.urNum}}
                />
                <InLine 
                    info={{title:"Approximate time:", data:"10 minutes"}}
                />
    
            </div>
        )
    }
}

export default App