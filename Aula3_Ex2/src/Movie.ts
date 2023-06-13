import ItemApp from "./Location/Item/Interface/ItemApp";

export default class Movie implements ItemApp{
    start(): void {
        this.getDescription();
        console.log("Filme alugado!!")
    }
    getDescription(): void {
        console.log("filme encontrado!!!");
    }

}