import { useRef, useReducer } from "react"
import { insertNota } from "../config/database";
import { focusTextArea } from "./events";
import "./style.css";
export default ({atualizaModal, displayTitulo, setDisplayTitulo }) => {
    const textArea = useRef()
    const titulo = useRef()
    const reducer = (state, action) => {
        switch (action.type) {
            case "noEnvolto":
                return {
                    displayEnvolto: !state.displayEnvolto
                }
        }
    }
    const [state, dicpach] = useReducer(reducer, { displayEnvolto: false })

    return (
        <>

            <div style={{ position: "fixed", width: "100vw", height: "100vh", top: 0, display: state.displayEnvolto ? "flex" : "none" }} onClick={() => {
                setDisplayTitulo(0)
                dicpach({ type: "noEnvolto" })
                if(textArea.current.value !== ""){
                    insertNota({
                    nota:textArea.current.value !== ""?textArea.current.value: "",
                    titulo:titulo.current.value !== ""? titulo.current.value : ""})
                    atualizaModal.setNotas([... atualizaModal.notas,{titulo:titulo.current.value,nota:textArea.current.value}])
                    textArea.current.value = ""
                    titulo.current.value = ""
                }
              
               
            }} className="envolto">
            </div>

            <div style={{ zIndex: 100 }}   >

                <div>

                    <input ref={titulo} placeholder="Titulo" style={{ display: displayTitulo == 1 ? "flex" : "none" }} />
                </div>
                <div >
                    <textarea ref={textArea} autoFocus className="textArea" cols="70"
                    onKeyDown={(e)=>{
                        e.target.style.height = "15px"
                        e.target.style.height = `${e.target.scrollHeight}px`
                    }}
                    onClick={() =>{
                        setDisplayTitulo(1)
                        dicpach({type:"noEnvolto"})

                    }}   name="" id="" placeholder=" Crie uma nota...">

                    </textarea>
                </div>
            </div>
        </>


    )
}