import React, { Component } from 'react'
import ThankCard from './ThankCard'
export default class ThankYou extends Component{
    constructor(props){
        super(props)

        this.state={
            number:props.location.num || localStorage.getItem('number'),
        }
    }
    componentDidMount() {
        this.setState({
            number:this.state.number},()=>{
                localStorage.setItem('number',this.state.number)
            })
    }
    render(){
        return(
            <ThankCard info={{ticket:this.state.number}}/>
        )
    }
}
