import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie/movie';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { comentario } from './comentario';
@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  id : string;
  filme : Movie;
  com : comentario;
  constructor(private route : ActivatedRoute, private service : MovieService) { }
  comentario : string;
  ngOnInit() {
    this.com = new comentario();
    this.filme = new Movie();
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.detalhes(this.id).subscribe(resp => this.filme = resp);
  }
  comentar(){
    this.com.comentario = this.comentario;
    this.com.id_filme = this.id;
    this.com.id_usuario = '1';
    this.com.nomeusuario = 'Gabriel';
    
  }
}
