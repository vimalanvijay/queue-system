import React from "react"
import MaterialCard from "./MaterialCard"
import Card from "./Card"
import { Button } from "@material-ui/core"
import {Link} from 'react-router-dom'

class Home extends React.Component{
   
    constructor(props){ 
       super(props)

       this.state={
           name:props.location.id || localStorage.getItem('shop'),
           line:props.location.item || localStorage.getItem('l'),
           key:props.location.uid,
           number:0
       }
    }

    componentDidMount() {
        this.setState({
            name:this.state.name},()=>{
                localStorage.setItem('shop',this.state.name)
            })
        this.setState({
            line:this.state.line},()=>{
                localStorage.setItem('l',this.state.line)
            })
        var num=parseInt(this.state.line)+1
        this.setState({
            number:num
        })
    }
    
    render(){
        return(
    
        <div>
            <div>
                <MaterialCard
                    info={{title:this.state.name, data:this.state.line}}
                />
            </div>
            <div>
                <Card 
                    info={{title:"Your number:", data:this.state.number}}
                />
            </div>
            <div style={{textAlign:'center',marginTop:10,marginBottom:10}}>
                <Link to={{ pathname: '/user-register',
                 uid:this.state.key,
                 ticket:this.state.number
                }}>
                    <Button variant="contained" color="primary" style={{marginTop:10,marginBottom:10,fontSize:'2.3vmax'}} size="large" onClick={this.signUp}>Register</Button>
                </Link>
            </div>
            
        </div>
        )
    }
    
}
 
export default Home