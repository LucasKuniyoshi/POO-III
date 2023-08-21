import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Contato from 'src/app/model/entities/Contato';
import { ContatoService } from 'src/app/model/services/contato.service';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.page.html',
  styleUrls: ['./detalhar.page.scss'],
})
export class DetalharPage implements OnInit {
  //contato!: Contato; //contato! => tem que declarar e inicializar
  contato: Contato;
  indice: number;
  nome: string;
  telefone: number;
  email: string | undefined;


  constructor(private actRoute: ActivatedRoute, private contatoService: ContatoService) { }

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

}
