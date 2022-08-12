import React, { useState } from "react";
import "./Accordian-css.css"
import data from "./Accordian-data"
import AccordianQuestions from "./AccordianQuestions";
const Accordian=()=>{
    const [ques,setQues] = useState(data)
    return(
        <div className="main-box">
            <h1 className="accordian-head">Accordian</h1>
            <div className="inner-box">
                <div className="inner-left">
                    Accordian<br/>(Questions and Answers )<br/> Box
                </div>
                <div className="inner-right">
                    {
                        ques.map((val)=>{
                            return <AccordianQuestions key = {val.id} {...val} />
                        })
                    }    
                </div>
            </div>
        </div>
    )
}
export default Accordian