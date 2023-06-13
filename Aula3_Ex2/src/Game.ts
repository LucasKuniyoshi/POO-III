import ItemApp from "./Location/Item/Interface/ItemApp";

export default class Game implements ItemApp{
    start(): void {
        this.getDescription();
        console.log("Jogo alugado!!")
    }
    getDescription(): void {
        console.log("Jogo encontrado!!!");
    }

}