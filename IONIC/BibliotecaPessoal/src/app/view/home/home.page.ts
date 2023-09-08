import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { AlertController } from '@ionic/angular';
import Livro from 'src/app/model/entities/Livro';
import { LivroService } from 'src/app/model/services/livro.service';
import { FirebaseService } from 'src/app/model/services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public nome: string;
  public autor: string;
  public genero: string;
  public editora: string;
  public anoPublicacao: number;
  public lista_livros : Livro[] = [];
  

  constructor(private firebase : FirebaseService, private router : Router){
    this.firebase.read().subscribe(res => { //pega os dados do firebase e armazena no id do livro da home
      this.lista_livros = res.map(livro =>{
        return{
          id: livro.payload.doc.id,//anexa esse conteúdo a um id
          ... livro.payload.doc.data() as any //tudo q a gente insere -> data, telefone
        }as Livro
      })
    })
  }

  irParaCadastrar(){
    this.router.navigate(['/cadastrar']);
  }

  editar(livro: Livro){
    this.router.navigateByUrl("/detalhar", {state : {livro:livro}});//passa o objeto inteiro, n mais só o parametro
    //console.log(index);
  }
}
