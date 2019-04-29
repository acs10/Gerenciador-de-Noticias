import { Component } from '@angular/core';
import { GerencDoService } from './Gerencer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tela = "home";
  autor = null;
  noticia = null;
  constructor(private service: GerencDoService){
  }
  salvarPublicacao(){
    this.tela = 'publica';
    this.service.CadastAutor(this.autor, this.noticia);
    this.autor = null;
    this.noticia = null;
  }
  mudarTela(nome){
    this.tela = nome;
  }
  visualizar(pessoa){
    this.tela = 'noticia';
    this.service.visualizarNoticia(pessoa);
  }
}
export class FormFieldOverviewExample {}
