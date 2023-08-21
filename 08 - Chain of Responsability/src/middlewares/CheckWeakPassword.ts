import Database from "../server/DataBase";
import Middleware from "./Middleware";

export default class CheckWeakPassword extends Middleware{
    public check(email: any, password: any): boolean {
        const weakSenha = (Database.filter(item => item.password === password))
        if(weakSenha.length < 6){
            console.log("Senha fraca!!")
            return false;
        }
        console.log("Senha Segura!!")
        return this.checkNext(email,password);
    }
}