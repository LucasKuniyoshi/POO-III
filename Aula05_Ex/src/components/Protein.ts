export default class Protein{
    constructor(private _protein: string, private _peso: number){};

    get protein(): string{
        return this._protein;
    }

    set protein(protein: string){
        this._protein = protein;
    }

    get peso(): number{
        return this._peso;
    }

    set peso(peso: number){
        this._peso = peso;
    }
}