// 6dUjUzG4

//96695c4dfefd4b98dd9c2af2bff2ea5b

// ATTA18de1472551ec54e25fcba631be61748155cbe2cfd9d4c7df4c24811302f999cA7E3DE2C


export class Trello {
    constructor(board,apiKey,token){
        this.board = board
        this.apiKey = apiKey
        this.token = token
    }

    
    async  getListsOnABoard(){
        try {
           let requisicao = await fetch(`https://api.trello.com/1/boards/${this.board}/lists?key=${this.apiKey}&token=${this.token}`)
            
            return requisicao.json()
            
            
        } catch (error) {
            return error
            
        }
       
    }

    async getCardsOnABoard(){
        try {
           let requisicao = await fetch(`https://api.trello.com/1/boards/${this.board}/cards?key=${this.apiKey}&token=${this.token}`)
        return requisicao.json()
            
        } catch (error) {
            return error
        }
        
    }

    async getAMenber(idMember){
        try {
            let requisicao = await fetch(`https://api.trello.com/1/members/${idMember}?key=${this.apiKey}&token=${this.token}`)
         return  requisicao.json()
             
         } catch (error) {
             return error
         }
         
        
    }




}