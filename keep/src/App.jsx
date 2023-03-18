import { useRef, useState, useEffect, useReducer } from 'react'
import teste from "../db.json"
import Modal from './modal'
import Imput from './imput'
import "./style.css"
import { getNota } from "./config/database"
import Nota from './nota'
import {Trello} from "./services/trello"

function App() {
  const [displayTitulo, setDisplayTitulo] = useState(0)
  const [notas, setNotas] = useState([])
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
    }).catch(err => console.log("deu err"))
  }
  const referencia = useRef()

  useEffect(() => {
    atualizaModal()
    
  }, [])

  return (
    <>

      <div className="App">
        <div className='container-input' >

          <Imput atualizaModal={{notas:notas,setNotas:setNotas}} setDisplayTitulo={setDisplayTitulo} displayTitulo={displayTitulo} />
        </div>
        <div className='teste' style={{ display: "flex", flexWrap: "wrap" }}>
          {
            notas.length > 0 ? notas.map((i, key) => {
              return <Modal  atualizaModal={{notas:notas,setNotas:setNotas}} dispatchNotas={dispatchNotas} id={key} nota={i.nota} titulo={i.titulo} />
            })
              :
              <p>Suas notas aparecerão aqui</p>
          }
        </div>
        <button onClick={async ()=>{
          let tello = new Trello('6dUjUzG4',"96695c4dfefd4b98dd9c2af2bff2ea5b","ATTA18de1472551ec54e25fcba631be61748155cbe2cfd9d4c7df4c24811302f999cA7E3DE2C")
          let retorno = await tello.getCardsOnABoard() 
          await Promise.all(retorno.map(async (i) => {
            let mem = i.idMembers.map(async (id) => {
              if (id) {
                return await tello.getAMenber(id);
              }
              return null;
            });
            i.idMembers = await Promise.all(mem);
          }));
          console.log(retorno)

        }}>
          dff
        </button>
        <Nota atualizaModal={{notas:notas,setNotas:setNotas}} dispatchNotas={dispatchNotas} showModal={showNotas} />
      </div>

    </>
  )
}

export default App
