import { useRef, useState, useEffect, useReducer } from 'react'
import Modal from './modal'
import Imput from './imput'
import "./style.css"
import Nota from './nota'
var none = "none"
var contents = "contents"
var todasAsNotas = []
function App() {
  const [displayTitulo, setDisplayTitulo] = useState(0)
  const [notas, setNotas] = useState([])
  const inputSearsh = useRef()
  const inicialState = { id: 0, display: false, titulo: "", nota: "" }
  const reducer = (state, action) => {
    switch (action.type) {
      case true:

        return {
          display: true,
          titulo: action.titulo,
          nota: action.nota,
          id: action.id
        }
        break;
      case false:
        return { display: false, titulo: "", nota: "" }
        break;

    }
  }
  const [showNotas, dispatchNotas] = useReducer(reducer, inicialState)
  async function atualizaModal() {
    await fetch("../db.json").then(r => r.json()).then(r => {
      setNotas(r)
      todasAsNotas = r
    }).catch(err => console.log("deu err"))
  }
  console.log("reinderizou")
  useEffect(() => {
    atualizaModal()

  }, [])

  return (
    <>

      <div className="App">

        <div className='container-input' >
          <Imput atualizaModal={{ notas: notas, setNotas: setNotas }} setDisplayTitulo={setDisplayTitulo} displayTitulo={displayTitulo} />
        </div>
        <div className='container-pesquisar' >
          <div className='input-pesquisar' >
            <label>
              <span style={{ display: contents }} >
                🔎
              </span>
              <input ref={inputSearsh} onInput={(e) => {
                setTimeout(() => {
                  if (e.target.value == "") {
                    contents = "contents"
                    none = "none"
                    atualizaModal()
                  }
                  else {
                    contents = "none"
                    none = "contents"
                    let notas2 = todasAsNotas.filter(iten => iten.titulo.toUpperCase().includes(e.target.value.toUpperCase()))
                    setNotas(notas2)

                  }
                }, 2000)
              }} type="search" placeholder='Pesquisar' />
              <span onClick={(e) => {
                inputSearsh.current.value = ""
                atualizaModal()
                none = "none"
                contents = "contents"
              }} style={{ display: none }} >
                ❌
              </span>
            </label>

          </div>

        </div>
        <div className='teste' style={{ display: "flex", flexWrap: "wrap" }}>
          {
            notas.length > 0 ? notas.map((i, key) => {
              return <Modal atualizaModal={{ notas: notas, setNotas: setNotas }} dispatchNotas={dispatchNotas} id={key} nota={i.nota} titulo={i.titulo} />
            })
              :
              <p>Suas notas aparecerão aqui</p>
          }
        </div>
        <Nota atualizaModal={{ notas: notas, setNotas: setNotas }} dispatchNotas={dispatchNotas} showModal={showNotas} />
      </div>
      <div>

      </div>

    </>
  )
}

export default App
