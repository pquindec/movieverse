import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { MoviesRoutingModule } from './movies-routing.module';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    PeliculaComponent,
    PeliculasComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MoviesRoutingModule,
    NgbCarouselModule
  ]

})
export class MoviesModule { }
