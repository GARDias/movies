import { Component, OnInit} from '@angular/core';
import { MovieService } from './movie.service';
import { Movie } from './movie/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'movies';
  titulo:String;

  filme : Movie;
  constructor(private service : MovieService){  }
  ngOnInit(){
      this.filme = new Movie();
  }
  pesquisar(){
      this.service.buscarFilme(this.titulo).subscribe(resp => this.filme = resp);
      console.log(this.filme);
      
  }

  
}
