import { useRef, useState, useEffect, useReducer } from 'react'
import teste from "../db.json"
import Modal from './modal'
import Imput from './imput'
import "./app.css"
import { getNota } from "./config/database"
import Nota from './nota'

function App() {
  const [displayTitulo, setDisplayTitulo] = useState(0)
  const [notas, setNotas] = useState([])
  const inicialState = { display: false, titulo: "", nota: "" }
  const reducer = (state, action) => {
    switch (action.type) {
      case true:

        return {
          display: true,
          titulo: action.titulo,
          nota: action.nota,
          id:action.id
        }
        break;
      case false:
        return { display: false, titulo: "", nota: "" }
        break;

    }
  }
  const [showNotas, dispatchNotas] = useReducer(reducer, inicialState)
  async function atualizaModal() {
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
            notas?.map((i, key) => {
              return <Modal dispatchNotas={dispatchNotas} id={key} nota={i.nota} titulo={i.titulo} />
            })
          }
        </div>
        <Nota dispatchNotas={dispatchNotas} showModal={showNotas} />
      </div>

    </>
  )
}

export default App
