import AdicionarCafe from "../Subsistemas/AdicionarCafe";
import AdicionarLeite from "../Subsistemas/AdicionarLeite";
import CoarCafe from "../Subsistemas/CoarCafe";
import EsquentarAgua from "../Subsistemas/EsquentarAgua";

export default class MakeCoffeeFacade{
    coffee: CoffeeType;

    private agua: EsquentarAgua;
    private cafe: AdicionarCafe;
    private leite: AdicionarLeite;
    private coar: CoarCafe;

    constructor(){
        this.agua = new EsquentarAgua();
        this.cafe = new AdicionarCafe();
        this.leite = new AdicionarLeite();
        this.coar = new CoarCafe();
    }

    escolherCafe(coffee: any): void {
        if(coffee == CoffeeType.PRETO){
            console.log("Café escolhido: CAFÉ PRETO");
        }else if(coffee == CoffeeType.COMLEITE){
            console.log("Café escolhido: CAFÉ COM LEITE");
        }else{
            console.log("Café escolhido: CAPUCCINO");
        }
    }
    fazerCafe(tipo: CoffeeType): void {
        console.log("preparando café ${tipo}");

        this.agua.fazerCafe();
        this.cafe.fazerCafe();
        this.coar.fazerCafe();
        this.leite.fazerCafe();
        console.log("Café pronto!!!");
    }

}