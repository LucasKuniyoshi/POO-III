import Movie from "../Movie";
import ItemApp from "./Item/Interface/ItemApp";
import Location from "./Location";

export default class GameLocation extends Location{
    protected createItem(): ItemApp{
        return new Movie();
    }
}