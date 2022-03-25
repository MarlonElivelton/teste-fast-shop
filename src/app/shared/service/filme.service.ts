import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Detalhe } from '../model/detalhe';
import { Filme } from '../model/filme';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  filmes: Filme[] = [];

  apiUrl = 'https://api.themoviedb.org/3';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getFilmeLista(): Observable<Filme> {
    return this.httpClient.get<Filme>(this.apiUrl + '/list/8195888?api_key=3f95b4c1403b1a25029a026b67eb0f99&language=pt-BR');
  }

  public getDetalheFilme(): Observable<Detalhe> {
    return this.httpClient.get<Detalhe>(this.apiUrl + '/movie/634649?api_key=3f95b4c1403b1a25029a026b67eb0f99&language=pt-BR');   
  }

}
