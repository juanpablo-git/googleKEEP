import React from "react";
import "./style.css"
export default ({titulo,nota,id})=>{
    return(
        <div onClick={()=>console.log("clicou")} style={{margin:"5px",border:"1px solid #e0e0e0",borderRadius:"10px",maxWidth:200,paddingLeft:"10px"}}>
            <h2>{titulo}</h2>
            <textarea disabled  style={{outline:"none",border:"none",resize:"none"}}>
                {nota}
            </textarea>
        </div>

    )
}