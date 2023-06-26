export default class Salad{
    constructor(private _salad: string){};

    get salad(): string{
        return this._salad;
    }

    set salad(salad: string){
        this._salad = salad;
    }
}