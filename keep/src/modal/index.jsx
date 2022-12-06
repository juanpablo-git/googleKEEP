import React,{useRef} from "react";
import { deleteNota } from "../config/database";
import "./style.css"

export default ({ setShowNotas, titulo, nota, id }) => {
    const closeModal = useRef()
    return (
        <div
        onMouseOver={()=>{
            closeModal.current.style.display = "flex"
        }}
        onMouseOut={()=>{
            closeModal.current.style.display = "none"
        }}
        style={{ margin: "5px", border: "1px solid #e0e0e0", borderRadius: "10px", width: "50%", maxHeight: 300, padding: "10px" }}>
            <button ref={closeModal} style={{marginLeft:"100%",display:"none",marginBottom:"-24px"}} onClick={()=>{deleteNota(id)}}>x</button>
            <div onClick={() => {
                setShowNotas({id:id, display: "flex", titulo, nota })
            }} 
           
            style={{overflow:"hidden"}}>
                <h1>
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