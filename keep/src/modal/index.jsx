import React, { useRef } from "react";
import { deletNota } from "../config/database";
import "./style.css"
export default ({ dispatchNotas, titulo, nota,id }) => {
    const buttonEdit = useRef()
    return (
        <div
        onMouseOver={(e) => {
            buttonEdit.current.style.display = "flex"
        }}
            onMouseOut={() => {
                buttonEdit.current.style.display = "none"
            }} 
        style={{ width: "50%",margin:"5px", maxHeight: 300, padding: "10px",border: "1px solid #e0e0e0", borderRadius: "10px",}}>
             <button ref={buttonEdit}
                    onClick={()=>{
                        console.log(id)
                        deletNota(id)
                    }}
                    style={{
                        borderRadius: "100%",
                        display: "none",
                        marginLeft: "100%",
                    }}>
                    ✖️
                </button>
            <div 
                onClick={() => {
                    dispatchNotas({ type: true, id:id,titulo: titulo, nota: nota })
                }} style={{}}>
               
                <h1 style={{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"unset"}}>
                    {titulo}
                </h1>
                <br />
                <textarea className="modal-nota" style={{ outline: "none", border: "none", resize: "none" }}>
                    {nota}
                </textarea>
            </div>
        </div>

    )
}