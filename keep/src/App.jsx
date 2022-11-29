import { useRef,useState} from 'react'
import Modal from './modal'
import Imput from './imput'
import "./app.css"
function App() {
  const [displayTitulo,setDisplayTitulo] = useState(0)
  const referencia = useRef()
  return (
<>
   
    <div className="App">
      <div   className='container-input'>
        <textarea ref={referencia} onInput={(e)=>{
           if (referencia.current.rows >= 1 && referencia.current.scrollHeight > referencia.current.offsetHeight) referencia.current.rows += 1

           if (referencia.current.rows >= 1 && referencia.current.scrollHeight < referencia.current.offsetHeight) referencia.current.rows -= 1

          console.log(referencia.current)
        }} name="" id="" cols="30" rows="2">

        </textarea>
      <Imput setDisplayTitulo={setDisplayTitulo} displayTitulo={displayTitulo} />
      </div>
      <div className='container-modal'>
      <Modal />
      <Modal />
      <Modal />
      <Modal />
      <Modal />
      <Modal />
      <Modal />
      <Modal />
      <Modal />
      <Modal />

      </div>
    </div>
 
    </>
  )
}

export default App
