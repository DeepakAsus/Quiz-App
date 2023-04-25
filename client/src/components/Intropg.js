import React from "react"

export default function Intropg(props){
    return(
        <div className="intro-pg">
            <h1 className="title">Quizzical</h1>
            <h3 className="description">Some description if needed</h3>
            <button className="start-btn" onClick={props.handleClick  }><p className="start">Start quiz</p></button>
        </div>
    )
}