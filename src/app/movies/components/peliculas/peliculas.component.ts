import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router } from '@angular/router';
import { Pelicula } from '../../../core/models/pelicula/pelicula.model';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {

  peliculas: Pelicula[];

  constructor(
    private peliculasService: PeliculasService,
    private router: Router
    ) {
    this.peliculas = [];
   }
 
  ngOnInit(): void {

    this.peliculasService.obtenerPeliculas().subscribe(
      {
        next: (value) => {
          this.peliculas = value.results;
        }
      }
    )

  }

  verDetalle(id: number){
    this.router.navigate([`/pelicula/${id}`]).then()
  }

}
