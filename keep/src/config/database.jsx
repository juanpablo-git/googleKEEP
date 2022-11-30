import fs from "vite-plugin-fs/browser"


export async function insertNota({titulo,nota}){
    const file = await fs.readFile('./db.json');
    const fileJSON = JSON.parse(file)
    fileJSON.push({titulo:titulo,nota:nota})
    let str =JSON.stringify(fileJSON)
    await fs.writeFile('./db.json', str).then(r=>console.log(r))


}

export async function getNota(){
    const file = await fs.readFile('./db.json');
    console.log(file)
    return JSON.parse(file)
}

// export async function readNota(){
//     const file = await fs.readFile('./db.json');
//     console.log(file)

//     await fs.writeFile('./db.json', 'File content');

// }