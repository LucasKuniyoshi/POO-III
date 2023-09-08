import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { AlertController } from '@ionic/angular';
import Contato from 'src/app/model/entities/Livro';
import { ContatoService } from 'src/app/model/services/contato.service';
import { FirebaseService } from 'src/app/model/services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public nome!: string;
  public telefone!: number;
  public email!: string;
  public lista_contatos : Contato[] = [];
  

  constructor(private firebase : FirebaseService, private router : Router){
    this.firebase.read().subscribe(res => {
      this.lista_contatos = res.map(contato =>{
        return{
          id: contato.payload.doc.id,//anexa esse conteúdo a um id
          ... contato.payload.doc.data() as any //tudo q a gente insere -> data, telefone
        }as Contato
      })
    })
    //this.lista_contatos = this.contatoService.obterTodos();
  }

  irParaCadastrar(){
    this.router.navigate(['/cadastrar']);
  }

  editar(contato: Contato){
    this.router.navigateByUrl("/detalhar", {state : {contato:contato}});//passa o objeto inteiro, n mais só o parametro
    //console.log(index);
  }
}
