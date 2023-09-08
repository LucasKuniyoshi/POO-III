import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import Livro from '../entities/Livro';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private PATH: string ='livro';

  constructor(private firestore : AngularFirestore) { }

  read(){
    return this.firestore.collection(this.PATH).snapshotChanges();
  }

  create(livro: Livro){
    return this.firestore.collection(this.PATH)
    .add({nome: livro.nome,autor: livro.autor, editora: livro.editora,
    genero: livro.genero, anoPublicacao: livro.anoPublicacao});

  }

  update(livro: Livro,id: string){
    return this.firestore.collection(this.PATH).doc(id)
    .update({nome: livro.nome, autor: livro.autor, editora: livro.editora,
    genero: livro.genero, anoPublicacao: livro.anoPublicacao});
  }

  delete(livro: Livro){
    return this.firestore.collection(this.PATH)
    .doc(livro.id).delete()
  }
}
