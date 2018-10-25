import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { api } from './api';
import { apilist } from './apilist';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class APIComponent implements OnInit {
  titulo : string;
  filme : api;
  list : apilist;
  constructor(private route : ActivatedRoute, private service : MovieService) { }

  ngOnInit() {
    this.filme = new api();
    this.titulo = this.route.snapshot.paramMap.get('titulo');
    this.service.api(this.titulo).subscribe(resp => this.list = resp);
  }

  adicionar(imdbID : string){
    ''

  }
}
