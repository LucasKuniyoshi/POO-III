import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Genero } from 'src/app/Enum/genero';
import Livro from 'src/app/model/entities/Livro';
import { FirebaseService } from 'src/app/model/services/firebase.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  public nome!: string;
  public autor!: string;
  public editora!: string;
  public genero!: Genero;
  public anoPublicacao!: number;
  public lista_livros : Livro[] = [];

  constructor(private firebase: FirebaseService, private alertController: AlertController, private router : Router) { }

  cadastrar(){
    if(this.nome && this.autor && this.anoPublicacao && this.genero && this.editora){
      let novo: Livro = new Livro(this.nome, this.autor, this.editora, this.genero, this.anoPublicacao);
      this.firebase.create(novo);
      //this.lista_contatos.push(novo);
      this.presentAlert('Sucesso', 'Contato Salvo');
      this.router.navigate(["/home"]);
    }
    else{
      this.presentAlert('ERRO', 'Campos Obrigatórios');
    }
  }

  async presentAlert(subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Agenda de contatos',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });

    await alert.present(); //só finaliza a ação quando o botão é clicado
  }
  ngOnInit() {
  }

}
