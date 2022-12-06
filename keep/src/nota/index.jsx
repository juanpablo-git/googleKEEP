import { useEffect, useRef } from "react"
import { editNota } from "../config/database"

export default ({ atualizaModal,showModal, dispatchNotas }) => {
    const tituloRef = useRef()
    const notaRef = useRef()
    useEffect(() => {
        tituloRef.current.value = showModal.titulo
        notaRef.current.value = showModal.nota
    }, [showModal])

    return (
        <div style={{
            width: "100%",
            height: "100%",
            zIndex: "330",
            position: "absolute",
            top: 0,
            left: 0,
            display: showModal.display ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: '100vh',
                width: "100vw",
                zIndex: "146",
                backgroundColor: "InfoText",
                opacity:"0.98"
            }}
                onClick={() =>{
                    dispatchNotas({ type: false })
                    editNota(atualizaModal,showModal.id,{titulo: tituloRef.current.value,nota:notaRef.current.value})
                }}
            >

            </div>

            <div style={{
                padding: "20px",
                display: "flex",
                height: "max-content",
                flexDirection: "column",
                width: "50%",
                alignItems: "center",

                zIndex: 300,
                position: "absolute"
            }}>

                <textarea ref={tituloRef} style={{ width: "90%" }} rows="1"></textarea>
                <textarea ref={notaRef} onClick={() => { console.log("mantem") }} style={{ width: "90%" }} ></textarea>

            </div>
        </div>
    )

}