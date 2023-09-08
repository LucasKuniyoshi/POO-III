import { Injectable } from '@angular/core';
import Livro from '../entities/Livro';
import { Genero } from 'src/app/Enum/genero';

@Injectable({
  providedIn: 'root'
})
export class Livroervice {

  public lista_livro : Livro[] = [];
  //private genero!: Genero;

  constructor() { 
    let c1 : Livro = new Livro("Harry Potter", "Deb", "Saraiva", Genero.ROMANCE, 1996);
    
    this.lista_livro.push(c1);
    
  }

cadastrar(livro: Livro){
  this.lista_livro.push(livro);
}

obterTodos() : Livro[]{
  return this.lista_livro;
}

obterPorIndice(indice : number) : Livro{
  //pega o indice do vetor
  return this.lista_livro[indice];
}

editar(indice:number, livro: Livro){
  this.lista_livro[indice] = livro;
}

excluir(indice: number){
  this.lista_livro.splice(indice, 1); //retira os elementos do vetor daquele indice / tira o vetor da lista, sem precisar linkar o anterior com o proximo
}
}
