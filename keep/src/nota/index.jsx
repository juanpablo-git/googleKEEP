export default ({
    titulo,nota
})=>{
    return (
    <div 
    onClick={()=>{console.log("Fechou")}}
    style={{display:"flex",justifyContent:"center",position:"fixed",top:0,left:0,backgroundColor:"GrayText",width:"100vw",height:"100vh",zIndex:"150"}}>
        <div style={{display:"flex",flexDirection:"column",width:"50%",alignItems:"center",backgroundColor:"InfoText"}}>

        <textarea style={{width:"90%"}} rows="1">{titulo}</textarea>
        <textarea style={{width:"90%"}} >
            {nota}
        </textarea>
        </div>
        </div>
    )
     
}