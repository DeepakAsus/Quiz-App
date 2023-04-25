import React from "react"
import OptionComp from "./OptionComp"

export default function Qna(props){
    
    
    
    var optionElems = props.options.map(item =>{
        var value = item + " " 

        var optionColor = "none"
        var opacity = 1
        
        // ans arr = []
        // input arr=[mudflap,2035,......]
        //green condition
        
        if(props.isChecked && props.ansArr.includes(value)){
            
            
            optionColor = "green"
            opacity = 1

        }
        //red condition
        else if(props.isChecked && props.inputArr.includes(value) && !props.ansArr.includes(value)){
            
            optionColor = "red"
            opacity = 0.5
        }
        //not selected condition
        else if(props.isChecked){
        
            opacity = 0.5
        }
        

        const styles ={
            backgroundColor: optionColor,
            opacity : opacity
        }
        
        return <OptionComp value={item} isSelected={false} handleSelect={props.handleSelect} questionNo={props.questionNo} 
        isChecked={props.isChecked} ansArr={props.ansArr} inputArr={props.inputArr} styles={styles}/>
    })
    

    return(
        <div className="qna-container">
            <div className="question"><p className="question-data" dangerouslySetInnerHTML={{__html: props.question}}></p></div>
            
            <div className="options-container">
                {optionElems}
            </div>
            <hr className="horizontal-line"></hr>
        </div>
    )
}