import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import Contato from 'src/app/model/entities/Livro';
import { ContatoService } from 'src/app/model/services/contato.service';
import { FirebaseService } from 'src/app/model/services/firebase.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  public nome!: string;
  public telefone!: number;
  public email!: string;
  public lista_contatos : Contato[] = [];

  constructor(private firebase: FirebaseService, private alertController: AlertController, private router : Router) { }

  cadastrar(){
    if(this.nome && this.telefone){
      let novo: Contato = new Contato(this.nome, this.telefone, this.email);
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
