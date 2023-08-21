import Database from "../server/DataBase";
import PermissionType from "../server/PermissionType";
import Middleware from "./Middleware";

export default class CheckPermissionMiddleware extends Middleware{
    public check(email: any, password: any): boolean {
        const user = Database.filter(item => item.email === email)
        if(!user.length){
            console.log("Email nao cadastrado");
            return false;
        }
        if(user[0].permission === PermissionType.ADMIN){
            console.log("Seja bem vindo administrador!");
        }else{
            console.log("Seja bem vindo Usuario!");
        }
        return this.checkNext(email, password);

    }
    
}