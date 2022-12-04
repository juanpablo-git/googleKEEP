import fs from "fs"


export async function insertNota({titulo,nota}){
    const file = await fs.readFile('./db.json');
    const fileJSON = JSON.parse(file)
    fileJSON.push({titulo:titulo,nota:nota})
    let str =JSON.stringify(fileJSON)
    await fs.writeFile('./db.json', str).then(r=>console.log("inserindo",r))


}

export async function getNota(){
    const file = await fs.readFile('./db.json');
    return JSON.parse(file)
}

export async function deletNota(key){
    let fileJSON = await getNota()
    fileJSON.splice(key,1)
    if(fileJSON.length > 0){
        await fs.writeFile('./db.json',JSON.stringify(fileJSON)).then(r=>console.log(r))
    }else{

        await fs.writeFile('./db.json',JSON.stringify([])).then(r=>console.log(r))
    }


}

export async function editNota(key,{titulo,nota}){
    let fileJSON = await getNota()
    fileJSON[key] = {titulo,nota}
    console.log({titulo,nota})
    await fs.writeFile('./db.json',JSON.stringify(fileJSON)).then(r=>console.log(r))



}