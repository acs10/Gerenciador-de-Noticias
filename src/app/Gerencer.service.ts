import { Injectable, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GerencDoService {
  autores = [
    {'autor':'André Costa Silva',
    'quantidade': 0
    },
    {'autor':'Ana Julia',
    'quantidade': 0
    },
    {'autor':'Leticia Silva',
    'quantidade': 0
    },
    {'autor':'Kalebe Oliveira',
    'quantidade': 0
    },
    {'autor':'Arianne',
    'quantidade': 0
    }
  ]
  lista = [];
  listPublic = [];
  id = 0;

  noticia = null;
  constructor() { }

  CadastAutor(autor, noticia){
    let pessoa = {
      'id' : this.id++,
      'autor': autor,
      'noticia': noticia,
      'view': 0,
    };
    this.lista.push(pessoa);
  }

  PublicNoticia(pessoa){
    this.listPublic.push(pessoa);
    this.AutorMaiorNoticPublic(pessoa);
    this.lista = this.lista.filter(item => item.id != pessoa.id);
  };
  visualizarNoticia(pessoa){
    for (let v of this.listPublic){
      if (v === pessoa){
        pessoa.view++
        this.noticia = pessoa
      }
    }
  };
  AutorMaiorNoticPublic(pessoa){
    for (let a of this.autores){
      if (a.autor === pessoa.autor){
        a.quantidade++;
      }
    }
  };
  ranking(){
    return this.listPublic.sort((a,b)=>b.view-a.view);
  };
  MaiorPublicada(){
    let autorP = null;
    let maiorAutorP = this.autores[0].quantidade;
    for (let i = 1; i < this.autores.length; i++){
      if (maiorAutorP < this.autores[i].quantidade){
        maiorAutorP = this.autores[i].quantidade;
        autorP = this.autores[i].autor;
      }
    }
    return autorP;
  }
  
}
