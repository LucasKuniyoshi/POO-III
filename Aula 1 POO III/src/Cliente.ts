import Endereco from "./Endereco";
import Telefone from "./Telefone";

export default class Cliente{
    private _nome: string;
    private _cpf: number;
    private _dataNascimento: number;
    private _sexo: string;
    private _endereco: Endereco;
    private _telefone: Telefone[];

    constructor(nome: string, cpf:number, dataNascimento: number, sexo: string, endereco: Endereco, telefone: Telefone[]){
        this._nome = nome;
        this._cpf = cpf;
        this._dataNascimento = dataNascimento;
        this._sexo = sexo;
        this._endereco = endereco;
        this._telefone = telefone;        
    }

    get nome(): string{
        return this.nome;
    }
    get cpf(): number{
        return this.cpf;
    }
    get dataNascimento(): number{
        return this.dataNascimento;
    }
    get sexo(): string{
        return this.sexo;
    }
    get endereco(): Endereco{
        return this.endereco;
    }
    get telefone(): Telefone[]{
        return this.telefone;
    }
}