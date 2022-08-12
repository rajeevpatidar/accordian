import React from "react";
import { useState } from "react";
import "./AccordianQouestions-css.css";
const AccordianQuestions=({question,answer})=>{
    const [set,setstate] = useState(false);
    return(
        <article className="AQ-article">
            <header>
                <h4 className="AQ-question">{question}</h4>
                <button className="AQ-btn" onClick={()=>setstate(!set)}>
                    {
                        !set ? "+":"-"
                    }
                </button>
            </header>
            {set && <p>{answer}</p>}
        </article>
    )
}
export default AccordianQuestions