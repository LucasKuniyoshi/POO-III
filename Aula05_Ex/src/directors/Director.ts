import IBuilder from "../buidler/IBuilder";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauces from "../components/Sauces";

export default class Director{
    constructor(private builder: IBuilder){}

    constructHotDog(){
        this.builder.setSanduicheType(SanduicheType.DOGAO);
        this.builder.setBread(Bread.AUSTRALIANO);
        this.builder.setProtein(new Protein("VINA", 150));
        this.builder.setSalad(new Salad("Vinagrete"));
        this.builder.addSauces(new Sauces("Maoinese"));
        this.builder.addSauces(new Sauces("BBC"));
        this.builder.addSauces(new Sauces("Ketchup"));
    }

    constructXSalada(){
        this.builder.setSanduicheType(SanduicheType.HAMBURGUER);
        this.builder.setBread(Bread.BRIOCHE);
        this.builder.setProtein(new Protein("BOI", 200));
        this.builder.setSalad(new Salad("cebola crispy"));
        this.builder.addSauces(new Sauces("Maoinese"));
        this.builder.addSauces(new Sauces("BBC"));
        this.builder.addSauces(new Sauces("Alho"));
    }
}