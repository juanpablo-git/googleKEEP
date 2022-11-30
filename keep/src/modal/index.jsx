import React from "react";
import "./style.css"
export default ({ titulo, nota, id }) => {
    return (
        <div onClick={() => {

        }} style={{ margin: "5px", border: "1px solid #e0e0e0", borderRadius: "10px", width: "50%",maxHeight:300,  padding:"10px" }}>
            <h1>
                {titulo}
                </h1>
          <br />
            <textarea className="modal-nota" style={{ outline: "none", border: "none", resize: "none" }}>
                {nota}
            </textarea>
        </div>

    )
}