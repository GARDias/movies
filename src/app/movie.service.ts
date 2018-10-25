import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Movie } from './movie/movie';
import { pesquisarnoBanco } from './pesquisar/pesquisa';

import { apilist } from './api/apilist';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  URL_API = 'http://localhost:8080/filme/';
    constructor(private http: HttpClient){}
   buscarFilme(nome : String):Observable<Movie>{
        let requisicao = 'titulo?title=';
        return this.http.get<Movie>(this.URL_API + requisicao + nome);
   }

   getFilmes():Observable<Movie[]>{
    let requisicao = "buscar";
    console.log(this.URL_API + requisicao);
     return this.http.get<Movie[]>(this.URL_API + requisicao);
   }

   detalhes(id : string):Observable<Movie>{
     let requisicao = "id?id=" + id;
     console.log(this.URL_API + requisicao);
     return this.http.get<Movie>(this.URL_API + requisicao);
   }

   pesquisarnoBanco(titulo : string):Observable<pesquisarnoBanco>{
     let requisicao = "filmes?nome=" + titulo;
     console.log(this.URL_API + requisicao);
      return this.http.get<pesquisarnoBanco>(this.URL_API + requisicao);
   }

   api(titulo : string):Observable<apilist>{
      let requisicao = "filmesAPI?nome=" + titulo;
      console.log(this.URL_API + requisicao);
      return this.http.get<apilist>(this.URL_API + requisicao);
   }

   inserir(imdbID : string){
      let requisicao = "inserir?id=" + imdbID;
      console.log(this.URL_API + requisicao);
      return this.http.post(this.URL_API + requisicao);
   }
}
