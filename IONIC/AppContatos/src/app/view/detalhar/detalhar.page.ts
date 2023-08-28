import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Contato from 'src/app/model/entities/Contato';
import { AlertController } from '@ionic/angular';
import { ContatoService } from 'src/app/model/services/contato.service';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.page.html',
  styleUrls: ['./detalhar.page.scss'],
})
export class DetalharPage implements OnDestroy {
  //contato!: Contato; //contato! => tem que declarar e inicializar
  contato: Contato;
  indice: number;
  nome: string;
  telefone: number;
  email: string | undefined;
  edicao: boolean = true;


  constructor(private alertController: AlertController, private router: Router, private actRoute: ActivatedRoute, private contatoService: ContatoService) { }

  //possibilita carregar todos os dados na tela no q o usuario é redirecionado para essa tela 
  ngOnInit() {
    // () = (parametros) -> possibilita pegar o q foi passado por parametro e desmembra-lo
    this.actRoute.params.subscribe((parametros) => {
      if(parametros["indice"]){
        this.indice = parametros["indice"];
        this.contato = this.contatoService.obterPorIndice(this.indice);
      }
    })
    this.nome = this.contato.nome;
    this.telefone = this.contato.telefone;
    this.email = this.contato.email;
    console.log(this.contato);
  }

  habilitar(){ //inverte os true/false
    if(this.edicao){
      this.edicao = false;
    }else{
      this.edicao = true;
    }
  }
  editar(){
    if(this.nome && this.telefone){
      let novo: Contato = new Contato(this.nome, this.telefone, this.email);
      this.contatoService.editar(this.indice, novo);
      this.router.navigate(["/home"]);
    }else{
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

  async deleteAlert(subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Agenda de contatos',
      subHeader: subHeader,
      message: message,
      buttons: ['Sim', 'Não'],
    });

    await alert.present(); //só finaliza a ação quando o botão é clicado
  }

  ngOnDestroy(): void {
    this.deleteAlert('ATENÇÃO', 'Quer mesmo deletar este contato?');
  }

  excluir(){
    this.ngOnDestroy();
    /*if(this.ngOnDestroy().buttons['Sim']){
      
    }*/
    this.contatoService.excluir(this.indice);
    this.router.navigate(["/home"]);
  }

}
