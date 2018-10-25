import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie/movie';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  id : string;
  filme : Movie;
  constructor(private route : ActivatedRoute, private service : MovieService) { }
  comentario : string;
  ngOnInit() {
    this.filme = new Movie();
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.detalhes(this.id).subscribe(resp => this.filme = resp);
  }
  comentar(){
    console.log(this.comentario);
  }
}
