import { useRef, useState,useEffect } from 'react'
import Modal from './modal'
import Imput from './imput'
import "./app.css"
import {getNota} from "./config/database"

// var notas = await  getNota()
function App() {
  const [displayTitulo, setDisplayTitulo] = useState(0)
  const [notas,setNotas] = useState([])
  async function atualizaModal(){
    let n = await getNota()
    setNotas(n) 
  }
  const referencia = useRef()
  useEffect(()=>{
    atualizaModal()
  },[])
  return (
    <>

      <div className="App">
        <div className='container-input'>

          <Imput atualizaModal={atualizaModal()} setDisplayTitulo={setDisplayTitulo} displayTitulo={displayTitulo} />
        </div>
        <div className='container-modal'>
               {
                notas.map((i)=>{
                  return <Modal nota={i.nota} titulo={i.titulo} />
                })
               }
        </div>
      </div>

    </>
  )
}

export default App
