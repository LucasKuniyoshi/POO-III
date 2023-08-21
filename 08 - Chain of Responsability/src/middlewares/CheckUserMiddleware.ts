import Database from "../server/DataBase";
import Middleware from "./Middleware";

export default class CheckUserMiddleware extends Middleware{
    public check(email: any, password: any): boolean {
        if(email.indexOf("@") === -1){
            console.log("Formato de email invalido!!");
            return false;
        }
        //verifica se o email e a senha estao cadastrados no banco
        const verificarEmail = (Database.filter(item => item.email === email))
        if(!verificarEmail.length){
            console.log("Email nao cadastrado");
            return false;
        } 
        const verificarSenha = (Database.filter(item => item.password === password))
        if(!verificarSenha.length){
            console.log("Senha nao cadastrada"); //n esta cadastrado no banco "!"
            return false;
        }

        return this.checkNext(email, password);
    }
    
}