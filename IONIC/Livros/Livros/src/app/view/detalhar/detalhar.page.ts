import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Genero } from 'src/app/Enum/genero';
import Livro from 'src/app/model/entities/Livro';
import { FirebaseService } from 'src/app/model/services/firebase.service';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.page.html',
  styleUrls: ['./detalhar.page.scss'],
})
export class DetalharPage implements OnInit {
  //contato!: Contato; //contato! => tem que declarar e inicializar
  livro!: Livro;
  indice!: number;
  nome!: string;
  autor!: string;
  editora!: string;
  genero!: Genero;
  anoPublicacao!: number;
  edicao: boolean = true;


  constructor(private alertController: AlertController, private router: Router, private firebase: FirebaseService) { }

  //possibilita carregar todos os dados na tela no q o usuario é redirecionado para essa tela 
  ngOnInit() {
    // () = (parametros) -> possibilita pegar o q foi passado por parametro e desmembra-lo
    this.livro = history.state.livro // pega o objeto
    this.nome = this.livro.nome;
    this.autor = this.livro.autor;
    this.editora = this.livro.editora;
    this.genero = this.livro.genero;
    this.anoPublicacao = this.livro.anoPublicacao;
    console.log(this.livro);
  }

  habilitar(){ //inverte os true/false
    if(this.edicao){
      this.edicao = false;
    }else{
      this.edicao = true;
    }
  }
  editar(){
    if(this.nome && this.autor && this.anoPublicacao && this.genero && this.editora){
      let novo: Livro = new Livro(this.nome, this.autor, this.editora, this.genero, this.anoPublicacao);
      this.firebase.update(novo, this.livro.id)
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

  /*async deleteAlert(subHeader: string, message: string) {
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
  }*/

  excluir(){
    //this.ngOnDestroy();
    /*if(this.ngOnDestroy().buttons['Sim']){
      
    }*/
    this.firebase.delete(this.livro);
    this.router.navigate(["/home"]);
  }

}
