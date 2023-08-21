export default abstract class Middleware{
    public next: Middleware;

    public linkWith(next: Middleware): Middleware{
        this.next = next;
        return next;
    }

    public abstract check(email, password): boolean; //valida email e senha antes de busacr no banco

    protected checkNext(email: string, password: string): boolean{//checa se tem um proximo
        if(this.next === undefined){
            return true; //retorna q correu a corrente inteira
        }
        return this.next.check(email, password); //pega o proximo
    }
}