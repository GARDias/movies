import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { AppComponent } from './app.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
const routes: Routes = [
  {path: 'Home', component: MovieComponent},
  {path: '', component: MovieComponent},
  {path: 'detalhes/:id', component: DetalhesComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ], 
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
