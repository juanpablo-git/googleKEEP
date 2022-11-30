import { useRef,useState} from 'react'
import Modal from './modal'
import Imput from './imput'
import "./app.css"
function App() {
  const [displayTitulo,setDisplayTitulo] = useState(0)
  return (
<>
   
    <div className="App">
      <div className='input-searsh'>
        <input type="text" style={{display:"flex"}}/>
      </div>
      <div   className='container-input'>
        
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
