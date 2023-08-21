import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { AlertController } from '@ionic/angular';
import Contato from 'src/app/model/entities/Contato';
import { ContatoService } from 'src/app/model/services/contato.service';

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
  

  constructor(private contatoService : ContatoService, private router : Router){
    this.lista_contatos = this.contatoService.obterTodos();
  }
  /*constructor(private alertController: AlertController, private router : Router) {
    let c1 : Contato = new Contato("Carlos Eduardo", 910728123);
    let c2 : Contato = new Contato("Jotair", 909828123);
    let c3 : Contato = new Contato("Giovanne Galvão", 912348123);
    let c4 : Contato = new Contato("Josiel", 910735223);
    this.lista_contatos.push(c1);
    this.lista_contatos.push(c2);
    this.lista_contatos.push(c3);
    this.lista_contatos.push(c4);
  }*/

  /*cadastrar(){
    if(this.nome && this.telefone){
      let novo: Contato = new Contato(this.nome, this.telefone);
      this.lista_contatos.push(novo);
      this.presentAlert('Sucesso', 'Contato Salvo');
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
  }*/

  irParaCadastrar(){
    this.router.navigate(['/cadastrar']);
  }

  editar(index: number){
    this.router.navigate(["/detalhar", index]);
    console.log(index);
  }
}
