import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/core/models/pelicula/pelicula.model';

@Component({
  selector: 'app-peliculas-similares',
  templateUrl: './peliculas-similares.component.html',
  styleUrls: ['./peliculas-similares.component.scss']
})
export class PeliculasSimilaresComponent implements OnInit {
  @Input("peliculas") set changePeliculas(peliculas: Pelicula[]) {
    this.peliculas = peliculas;
  }

  peliculas: Pelicula[]
  peliculasGrupos: Pelicula[][]

  constructor() {
    this.peliculas = []
    this.peliculasGrupos = []
  }

  ngOnInit(): void {
    console.log(this.peliculas.length)

    if (this.peliculas.length > 0) {
      console.log(this.peliculas.length)
      for (let i = 0; i < this.peliculas.length; i += 4) {
        this.peliculasGrupos.push(this.peliculas.slice(i, i + 4));
      }
    }
  }

}
