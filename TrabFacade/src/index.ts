import MakeCoffeeFacade from "./Facade/MakeCoffeeFacade";

const facade = new MakeCoffeeFacade();
facade.escolherCafe(new CoffeeType.PRETO)
facade.fazerCafe();