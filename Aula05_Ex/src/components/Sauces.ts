export default class Sauces{
    constructor(private _sauce : string){};

    get sauce() : string{
        return this._sauce;
    }

    set sauce(sauce : string){
        this._sauce = sauce;
    }
}