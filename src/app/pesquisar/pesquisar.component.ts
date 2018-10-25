import { Component, OnInit } from '@angular/core';
import { pesquisarnoBanco } from './pesquisa';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie/movie';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent implements OnInit {
  list : pesquisarnoBanco;
  titulo : string;
  filme : Movie;
  constructor(private service : MovieService ,private route : ActivatedRoute) { }
  
  ngOnInit() {
    this.filme = new Movie();
    this.list = new pesquisarnoBanco();
    this.titulo = this.route.snapshot.paramMap.get('titulo');
    console.log(this.titulo);
    this.service.pesquisarnoBanco(this.titulo).subscribe(resp => this.list = resp);
    console.log(this.list.search);
  }

}
