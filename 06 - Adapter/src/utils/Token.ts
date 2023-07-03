export default class Token{
    private _token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InRva2VuX3BhZ2FtZW50byJ9.q16S_CqGnxs64-HGo2LIoPKBV5BjF2auZfEl0hhBhQY";

    public get token() {
        return this._token;
    }
    public set token(value) {
        this._token = value;
    }
}