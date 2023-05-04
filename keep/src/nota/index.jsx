import { useEffect, useRef } from "react"
import { editNota } from "../config/database"
import "./style.css"

export default ({ atualizaModal, showModal, dispatchNotas }) => {
    const tituloRef = useRef()
    const notaRef = useRef()
    useEffect(() => {
        tituloRef.current.value = showModal.titulo
        notaRef.current.value = showModal.nota
        notaRef.current.style.height = `${notaRef.current.scrollHeight}px`
    }, [showModal])

    return (
        <div className="container-nota" style={{display: showModal.display ? "flex" : "none"}}>
            <div className="focus-nota"
                onClick={() => {
                    dispatchNotas({ type: false })
                    editNota(atualizaModal, showModal.id, { titulo: tituloRef.current.value, nota: notaRef.current.value })
                }}
            >

            </div>

            <div className="modal" >

                <textarea ref={tituloRef}
                className="input-titulo"
                    rows="1">

                </textarea>
                <textarea
                 className="input-nota"
                    ref={notaRef}
                    onClick={() => { console.log("mantem") }}
                    onKeyDown={(e)=>{
                        e.target.style.height = `15px`
                        e.target.style.height = `${e.target.scrollHeight}px`
                        if(e.key == "Enter"){
                            console.log(e.key)
                            e.target.style.height = `${e.target.scrollHeight+20}px`
                        }
                    }}
                    >
                                

                </textarea>

            </div>
        </div>
    )

}