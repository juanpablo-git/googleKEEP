import { useRef,useReducer } from "react"
import { focusTextArea } from "./events";
import "./style.css";
export default ({displayTitulo,setDisplayTitulo}) => {
    const textArea = useRef()
    const reducer = (state,action)=>{
        switch(action.type){
            case "noEnvolto":
                return {
                    displayEnvolto: !state.displayEnvolto
                }
           
                
        }
    }
    const [state,dicpach] = useReducer(reducer,{displayEnvolto:false})
   
    return (
        <>
       
       <div style={{position:"fixed",width:"100vw",height:"100vh",top:0,display:state.displayEnvolto ? "flex" : "none"}} onClick={()=>{
        setDisplayTitulo(0)
        dicpach({type:"noEnvolto"})
        }} className="envolto">
        </div>
        
        <div style={{zIndex:100}}   >

                <div>

                    <input className="titulo" placeholder="Titulo" style={{ display: displayTitulo ==1 ? "flex" : "none" }} />
                </div>
                <div >
                    <textarea ref={textArea} autoFocus className="textArea" cols="70"
                    onKeyDown={(e)=>{
                        e.target.style.height = "15px"
                    //    console.log(e.target)
                        e.target.style.height = `${e.target.scrollHeight}px`
                    }}
                    onClick={() =>{
                        setDisplayTitulo(1)
                        dicpach({type:"noEnvolto"})

                    }}   name="" id="" placeholder=" Crie uma nota...">

                    </textarea>
                </div>
            </div>
            </>


            )
}