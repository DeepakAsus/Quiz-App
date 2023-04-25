import React from "react"


export default function OptionComp(props){
    
    
    
    
    // inputArr, ansArr, value
    // 3 colored options 
    // pink = value not present in both input and ans arr
    // red = value present in input arr but not in ans arr
    // green = value present in both input and ans arr
    // dv
    
    
    
    
    
    return(
        <div className="option-comp">
            <span   className="options" onClick={props.handleSelect}>
                <p style={props.styles} id={props.questionNo}  className="option-data" dangerouslySetInnerHTML={{__html: props.value}}></p> 
            </span>
        </div>
    )
}