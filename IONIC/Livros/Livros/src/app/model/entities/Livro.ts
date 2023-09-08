import { Genero } from "src/app/Enum/genero";

export default class Livro{
    private _nome!: string;
    private _id!: string;
    private _autor!: string;
    private _editora!: string;
    private _genero!: Genero;
    private _anoPublicacao!: number;

    constructor(nome: string, autor: string, editora: string, genero: Genero, anoPublicacao: number){
        this._nome = nome;
        this._autor = autor;
        this._editora = editora;
        this._genero = genero;
        this._anoPublicacao = anoPublicacao;
    }

    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }
    
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

    public get autor(): string {
        return this._autor;
    }
    public set autor(value: string) {
        this._autor = value;
    }

    public get editora(): string {
        return this._editora;
    }
    public set editora(value: string) {
        this._editora = value;
    }
    
    public get genero(): Genero {
        return this._genero;
    }
    public set genero(value: Genero) {
        this._genero = value;
    }
    
    public get anoPublicacao(): number {
        return this._anoPublicacao;
    }
    public set anoPublicacao(value: number) {
        this._anoPublicacao = value;
    }
    
}