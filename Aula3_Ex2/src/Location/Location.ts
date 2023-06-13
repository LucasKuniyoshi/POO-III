import ItemApp from "./Item/Interface/ItemApp";

export default abstract class Location {
    startItem(){
        const item = this.createItem();
        item.start();
    }
    protected abstract createItem(): ItemApp
}