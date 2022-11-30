import { useRef, useState, useEffect, useCallback, useMemo } from 'react'
import teste from "../db.json"
import Modal from './modal'
import Imput from './imput'
import "./app.css"
import { getNota } from "./config/database"

// var notas = await  getNota()
function App() {
  const [displayTitulo, setDisplayTitulo] = useState(0)
  const [notas, setNotas] = useState([])
  async function atualizaModal() {
    console.log("Atualizou")
    setNotas(teste)
  }
  const referencia = useRef()

  useEffect(() => {
    atualizaModal()

  }, [displayTitulo])

  return (
    <>

      <div className="App">
        <div className='container-input'>

          <Imput atualizaModal={atualizaModal} setDisplayTitulo={setDisplayTitulo} displayTitulo={displayTitulo} />
        </div>
        <div className='container-modal'>
          {
            notas?.map((i) => {
              return <Modal nota={i.nota} titulo={i.titulo} />
            })
          }
        </div>
        <div style={{ backgroundColor: "#767676", height: "100vh", width: "100vw", position: "absolute", top: "0px", left: "0px", zIndex: "200",display:"flex",justifyContent:"center"}}>
          <Modal nota="i.nota" titulo="i.titulo" />
        </div>
      </div>

    </>
  )
}

export default App
