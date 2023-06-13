/*const disciplina : string = "Programação Orientada a Objetos III";
console.log(disciplina);*/

/*var a = 6;
var b = 15;

if(a === 6){
    let a = 5;
    let b = 3;
    console.log("Dentro do IF");
    console.log(a);
    console.log(b);
}
console.log("Fora do IF");
console.log(a);
console.log(b);*/

/*let numeroQualquer : number;
numeroQualquer = 10.6;
console.log(numeroQualquer);*/

/*let list : number[] = [2,3,4,5];
let i : number;
for( i = 0; i < list.length; i++) {
    console.log(list[i]);
}*/

/*let list : number[] = [2,3,4,5];
let i : number;
for(let valor of list) {
    console.log(valor);
}*/

//any[]
//let valor : any; PODE RECEBER QUALQUER COISA (string, int, float...)

/*let list : Array<number> = [2,3,4,5];
let i : number;
for(let valor of list) {
    console.log(valor);
}*/

/*enum Genero{
    MASCULINO, //salva como 0; ocupa menos espaço no BD
    FEMININO, //salva como 1
    INDEFINIDO, //salva como 2
}
let genero : Genero = Genero.MASCULINO;
console.log(genero);
*/

/*function minhaFunçao(){
    console.log("minha funcao");
}
minhaFunçao();*/

/*function minhaFunçao() : number{
    return 5;
}
console.log(minhaFunçao());
*/
/*import Pessoa from "./Pessoa";

let pessoa: Pessoa = new Pessoa("Carlos", "Jetski", 987);
console.log(pessoa.nomeCompleto());
*/
/*
import Telefone from "./Telefone";

let telefone: Telefone = new Telefone("PR", 98766, "Apple");
console.log(telefone.tipo, telefone.ddd);
*/

import Cliente from "./Cliente";
import Endereco from "./Endereco";
import Produto from "./Produto";
import Telefone from "./Telefone";
import Venda from "./Venda";

let endereco1 : Endereco = new Endereco("Saldanha", 36, "Gpuava", "PR");
let telefone1 : Telefone = new Telefone("PR", 9611, "TIM");
let cliente1  : Cliente= new Cliente("Kuni", 123, 19082002, "M", endereco1, [telefone1]); 
let produto1 : Produto = new Produto(1,"Pão", 6.50);
let venda1 : Venda = new Venda(1, 8062023, cliente1, [produto1]);

console.log("Cliente: ");
console.log(cliente1);
console.log(" ");
console.log("Valor da venda = ",venda1.calcularTotal());