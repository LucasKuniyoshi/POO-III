export default class Pessoa{  //permite exportar a classe para outros "classes" (vulgo 'public' em JAVA)
    //atributos
    //construtor
    //encapsulamento -> Get, Set
    //outros metodos

    private _nome: string;
    private _sobrenome : string;
    private _dataNascimento: number;

    constructor(nome:string, sobrenome: string, dataNascimento: number){
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._dataNascimento = dataNascimento;
    }

    get nome(): string{
        return this._nome;
    }
    set nome(nome: string){
        this._nome = nome;
    }
    nomeCompleto(): string{
        return this._nome + " " + this._sobrenome;
    }

    
}