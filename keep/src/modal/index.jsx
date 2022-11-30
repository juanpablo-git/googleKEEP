import React from "react";
import "./style.css"
export default ({ titulo, nota, id }) => {
    return (
        <div onClick={() => {

        }} style={{ margin: "5px", border: "1px solid #e0e0e0", borderRadius: "10px", maxWidth: 200,maxHeight:300,  padding:"10px" }}>
            <h2><input value={titulo} /></h2>
          
            <textarea  style={{ outline: "none", border: "none", resize: "none" }}>
                {nota}
            </textarea>
        </div>

    )
}