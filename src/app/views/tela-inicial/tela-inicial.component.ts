import { Component, OnInit } from '@angular/core';
import { FilmeService } from 'src/app/shared/service/filme.service';
import { Filme } from '../../shared/model/filme';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {

  filmes: Filme[] = [];
  selectedFilme?: Filme;

  constructor(
    public filmeService: FilmeService
  ) { }

  ngOnInit(): void {
    this.getFilmes();
  }
  
  getFilmes() {
    this.filmeService.getFilmeLista().subscribe(data => {
      this.filmes = data.items;
    });
  }

  onSelect(filme: Filme): void {
    this.selectedFilme = filme;
    console.log('Abaixo JSON com os dados do filme selecionado');
    console.log(this.selectedFilme);
  }
  

}
