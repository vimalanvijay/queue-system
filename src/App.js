import React, { Component } from "react"

import Home from "./components/Home"
import UserForm from "./components/UserForm"
import Header from "./components/Header"
import Form from "./components/Form"
import './style.css'
import Loading from "./components/Loading"
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import Route from 'react-router-dom/Route'
import ShopList from "./components/ShopList"
import ThankYou from "./components/ThankYou"

class App extends Component{

    constructor(){
        super()
        this.state={isLoading:true}
    }

    componentDidMount(){
        this.timerHandle = setTimeout(() => this.setState({ isLoading: false }), 1000); 
    }

    componentWillUnmount(){
        if (this.timerHandle) {
          clearTimeout(this.timerHandle);
          this.timerHandle = 0;
        }
    }
    
    render(){
        return (
            this.state.isLoading ? <Loading/>:
            <Router>
                    <Header />
                    <Route exact path='/' exact component={ShopList}/>
                    <Route path="/shops" exact component={ShopList} />
                    <Route path="/business" exact component={Form} />
                    <Route path="/store-home" exact component={Home} />
                    <Route path="/user-register" exact component={UserForm} />
                    <Route path="/thankyou" exact component={ThankYou} />
            </Router>
        )
    }
}

export default App