import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { AppComponent } from './app.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { PesquisarComponent } from './pesquisar/pesquisar.component';
import { APIComponent } from './api/api.component';
const routes: Routes = [
  {path: 'Home', component: MovieComponent},
  {path: '', component: MovieComponent},
  {path: 'detalhes/:id', component: DetalhesComponent},
  {path: 'pesquisar/:titulo', component: PesquisarComponent},
  {path: 'api/:titulo', component: APIComponent}
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
