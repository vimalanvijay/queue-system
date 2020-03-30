import React, { Component } from "react"
import MaterialCard from "./MaterialCard"
import fire from "./db"
import {Link} from 'react-router-dom'

export default class ShopList extends Component{

    _isMounted=false;

    constructor(props) {
        super(props);

        this.state = {
            temp: [],
            keys: [],
        };

    }

    componentDidMount(){
        this._isMounted=true

        var temp=[]
        var keys=[]


        if(this._isMounted){
            fire.database().ref('/shops').on('value', (snapshot) => {
                temp=[] 
                snapshot.forEach((child) => {
                    temp.push(child.val())
                    keys.push(child.key)
                    this.setState({temp : temp})
                    this.setState({keys : keys})
                });
            })
        }


        for(var i=0;i<keys.length;i++){
            var uid=keys[i]

            fire.database().ref('/shops/'+uid+'/users').on('value', (snapshot) => {
                console.log("NUM CHILDREN"+snapshot.numChildren())

                var len=snapshot.numChildren()
             
                
                snapshot.ref.parent.child("/overview").update({line:len})
                   
                
            })
        }
    }

    
    render(){
        return( 
            <div>
                {this.state.temp.map((cardinfo,index)=> 

                <Link to={{ pathname: '/store-home',
                 id:cardinfo.overview.name,
                 item:cardinfo.overview.line,
                 uid:this.state.keys[index],
                }} style={{ textDecoration: 'none' }}>

                <div> <MaterialCard key={this.state.keys[index]} info={{title:cardinfo.overview.name,address:cardinfo.overview.address,data:cardinfo.overview.line}}/> </div>
                </Link>,
                
                )}
                
             </div>       
        )
    }
    
}
 
