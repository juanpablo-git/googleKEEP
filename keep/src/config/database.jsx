import fs from "vite-plugin-fs/browser"
export async function insertNota({ titulo, nota }) {
    console.log("INSERINDO")
    const file = await fs.readFile('/db.json');
    console.log("INSERINDO",file)
    const fileJSON = JSON.parse(file)
    fileJSON.push({ titulo: titulo, nota: nota })
    let str = JSON.stringify(fileJSON)
    await fs.writeFile('./db.json', str).then(r => console.log("inserindo", r))


}

export async function deleteNota(key) {
    const file = await fs.readFile('./db.json');
    const fileJSON = JSON.parse(file)
    fileJSON.splice(key, 1)
    console.log(fileJSON)
    await fs.writeFile('./db.json', JSON.stringify(fileJSON)).then(r => console.log(r))
}

export async function getNota() {
    const file = await fs.readFile('./db.json');
    return JSON.parse(file)
}

export async function deletNota(atualizaModal,key) {
    let fileJSON = await fs.readFile('./db.json');
    fileJSON = JSON.parse(fileJSON)
    fileJSON.splice(key,1)
    if(fileJSON.length > 0){
        await fs.writeFile('./db.json',JSON.stringify(fileJSON)).then(r=>console.log(r))
         atualizaModal.setNotas(fileJSON)
    }else{
// 
        await fs.writeFile('./db.json',JSON.stringify([])).then(r=>console.log(r))
        atualizaModal.setNotas(fileJSON)
    }


}

export async function editNota(atualizaModal,key, { titulo, nota }) {
    let fileJSON = await getNota()
    fileJSON[key] = { titulo, nota }
    await fs.writeFile('./db.json', JSON.stringify(fileJSON)).then(r => console.log(r))
    atualizaModal.setNotas(fileJSON)



}