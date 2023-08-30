import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { CardPeliculaComponent } from './components/card-pelicula/card-pelicula.component';
import { PeliculasSimilaresComponent } from './components/peliculas-similares/peliculas-similares.component';
import { FormularioBasicoComponent } from './components/formulario-basico/formulario-basico.component';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';

@NgModule({
  declarations: [
    NavComponent,
    CardPeliculaComponent,
    PeliculasSimilaresComponent,
    FormularioBasicoComponent
  ],
  imports: [
    CommonModule,
    NgbCarousel, 
    ReactiveFormsModule, 
    MdbFormsModule,
    MdbValidationModule
  ],
  exports: [
    NavComponent,
    PeliculasSimilaresComponent,
    FormularioBasicoComponent
  ]
})
export class SharedModule { }
