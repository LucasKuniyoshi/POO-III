import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Genero } from 'src/app/Enum/genero';
import Livro from 'src/app/model/entities/Livro';
import { FirebaseService } from 'src/app/model/services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public nome!: string;
  public autor!: number;
  public editora!: string;
  private genero!: Genero;
  private anoPublicacao!: number;
  public lista_livros : Livro[] = [];
  

  constructor(private firebase : FirebaseService, private router : Router){
    this.firebase.read().subscribe(res => {
      this.lista_livros = res.map(livro =>{
        return{
          id: livro.payload.doc.id,//anexa esse conteúdo a um id
          ... livro.payload.doc.data() as any //tudo q a gente insere -> data, telefone
        }as Livro
      })
    })
    //this.lista_contatos = this.contatoService.obterTodos();
  }

  irParaCadastrar(){
    this.router.navigate(['/cadastrar']);
  }

  editar(livro: Livro){
    this.router.navigateByUrl("/detalhar", {state : {livro: livro}});//passa o objeto inteiro, n mais só o parametro
    //console.log(index);
  }
}
