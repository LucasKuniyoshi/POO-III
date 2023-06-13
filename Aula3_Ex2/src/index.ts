import GameLocation from "./Location/GameLocation";
import MovieLocation from "./Location/MovieLocation";
import Location from "./Location/Location";

declare var process;

let location: Location;

if(process.argv.includes("cinema")){
    location = new MovieLocation();
    location.startItem();   
}else if(process.argv.includes("jogo")){
    location = new GameLocation();
    location.startItem();
}else{
    console.log("Alugou nada");
}