import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie/movie';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  id : string;
  filme : Movie;
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.filme = new Movie();
    this.id = this.route.snapshot.paramMap.get('id');
    
  }

}
