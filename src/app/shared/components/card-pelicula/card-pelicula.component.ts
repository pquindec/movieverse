import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/core/models/pelicula/pelicula.model';

@Component({
  selector: 'app-card-pelicula',
  templateUrl: './card-pelicula.component.html',
  styleUrls: ['./card-pelicula.component.scss']
})
export class CardPeliculaComponent {

  @Input("pelicula") set changePelicula(pelicula: Pelicula) {
    this.pelicula = pelicula
  }

  pelicula: Pelicula | null

  constructor(private router: Router) {
    this.pelicula = null
  }

  abrirPelicula() {
    this.router.navigate([`/pelicula/${this.pelicula?.id}`]).then(() => {
      // Recargar los datos del componente actual
      window.location.reload()
    });
  }

}
