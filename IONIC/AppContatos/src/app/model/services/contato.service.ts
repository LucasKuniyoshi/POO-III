import { Injectable } from '@angular/core';
import Contato from '../entities/Contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  public lista_contatos : Contato[] = [];

  constructor() { 
    let c1 : Contato = new Contato("Carlos Eduardo", 910728123);
    let c2 : Contato = new Contato("Jotair", 909828123, "vsjsasa@gmail.com");
    let c3 : Contato = new Contato("Giovanne Galvão", 912348123, "vsjfggfda@gmail.com");
    let c4 : Contato = new Contato("Josiel", 910735223, "ja@gmail.com");
    this.lista_contatos.push(c1);
    this.lista_contatos.push(c2);
    this.lista_contatos.push(c3);
    this.lista_contatos.push(c4);
  }

cadastrar(contato: Contato){
  this.lista_contatos.push(contato);
}

obterTodos() : Contato[]{
  return this.lista_contatos;
}

obterPorIndice(indice : number) : Contato{
  //pega o indice do vetor
  return this.lista_contatos[indice];
}

editar(indice:number, contato: Contato){
  this.lista_contatos[indice] = contato;
}

excluir(indice: number){
  this.lista_contatos.splice(indice, 1); //retira os elementos do vetor daquele indice / tira o vetor da lista, sem precisar linkar o anterior com o proximo
}
}
