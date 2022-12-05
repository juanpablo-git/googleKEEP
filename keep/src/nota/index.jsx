import { useEffect, useRef } from "react"

export default ({ showNota }) => {
    const titulo = useRef()
    const nota = useRef()
    useEffect(() => {
        titulo.current.value = showNota.titulo
        nota.current.value = showNota.nota
    }, [showNota])
    return (
        <div style={{ display: showNota.display ? "flex" : "none",justifyContent:"center",alignItems:"center",height:"100vh",width:"100vw",position:"absolute",top:0}}>
            <div onClick={()=>console.log("clicou")} style={{zIndex:"151", padding: "20px", display: "flex", height: "max-content", flexDirection: "column", width: "50%", alignItems: "center", backgroundColor: "InfoText" }}>
                <textarea ref={titulo} style={{ width: "90%" }} rows="1"></textarea>
                <textarea ref={nota} style={{ width: "90%" }} ></textarea>
            </div>
            <div
                onClick={() => { console.log("Fechou") }}
                style={{ backgroundColor:"aliceblue",display: "flex", justifyContent: "center", alignItems: "center", position: "fixed", top: 0, left: 0, width: "100vw", height: "100%", zIndex: "150" }}>
            </div>

        </div>
    )

}