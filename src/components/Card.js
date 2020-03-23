import React from "react"

function Card(props){
  
    return(
        <div className="cardstyle">
            <div className="title">{props.info.title}<br></br></div>
                <p className="value">{props.info.data}</p>
        </div>
    )
}

export default Card