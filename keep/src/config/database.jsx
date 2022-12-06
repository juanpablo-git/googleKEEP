import fs from "fs/promises"


export async function insertNota({titulo,nota}){
    const file = await fs.readFile('./db.json');
    const fileJSON = JSON.parse(file)
    fileJSON.push({titulo:titulo,nota:nota})
    let str =JSON.stringify(fileJSON)
    await fs.writeFile('./db.json', str).then(r=>console.log(r))


}

export async function deleteNota(key){
    const file = await fs.readFile('./db.json');
    const fileJSON = JSON.parse(file)
    fileJSON.splice(key,1)
    console.log(fileJSON)
    await fs.writeFile('./db.json', JSON.stringify(fileJSON)).then(r=>console.log(r))
}

export async function getNota(){
    const file = await fs.readFile('./db.json');
    console.log(file)
    return JSON.parse(file)
}

export async function editNota({id,titulo,nota}){
    const file = await fs.readFile('./db.json');
    const fileJSON = JSON.parse(file)
    fileJSON[id] = {titulo,nota}
    await fs.writeFile('./db.json', JSON.stringify(fileJSON)).then(r=>console.log(r))
    console.log("Editou")


}