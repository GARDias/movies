import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MovieComponent } from './movie/movie.component';
import { MovieService } from './movie.service';
import { FormsModule } from '@angular/forms';

import { DetalhesComponent } from './detalhes/detalhes.component';
@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
   
    DetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
