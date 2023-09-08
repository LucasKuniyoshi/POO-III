import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import Contato from 'src/app/model/entities/Livro';
import { LivroService } from 'src/app/model/services/livro.service';
import { FirebaseService } from 'src/app/model/services/firebase.service';
import Livro from 'src/app/model/entities/Livro';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  public nome: string;
  public autor: string;
  public genero: string;
  public editora: string;
  public anoPublicacao: number;
  public lista_livros : Livro[] = [];

  constructor(private firebase: FirebaseService, private alertController: AlertController, private router : Router) { }

  cadastrar(){
    if(this.nome && this.autor && this.editora && this.anoPublicacao && this.genero){
      let novo: Livro = new Livro(this.nome, this.autor, this.genero, this.editora, this.anoPublicacao);
      this.firebase.create(novo);
      //this.lista_contatos.push(novo);
      //this.presentAlert('Sucesso', 'Contato Salvo');
      this.router.navigate(["/home"]);
    }
    else{
      this.presentAlert('ERRO', 'Campos Obrigatórios');
    }
  }

  async presentAlert(subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Biblioteca Pessoal',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });

    await alert.present(); //só finaliza a ação quando o botão é clicado
  }
  ngOnInit() {
  }

}
