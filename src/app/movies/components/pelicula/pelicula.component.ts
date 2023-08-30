import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Backdrop } from 'src/app/core/models/img/imagenes-pelicula.model';
import { Pelicula } from 'src/app/core/models/pelicula/pelicula.model';
import { PeliculasService } from '../../services/peliculas.service';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss']
})
export class PeliculaComponent implements OnInit {

  pelicula: Pelicula | null;
  peliculasSimilares: Pelicula[];
  backdrops: Backdrop[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private peliculasService: PeliculasService
  ) {
    this.pelicula = null;
    this.peliculasSimilares = [];
    this.backdrops = [];
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      {
        next: params => {
          const id = params['id']

          if (!id || isNaN(id)) {
            this.router.navigate(['/peliculas']);
            return;
          }

          this.obtenerDetalle(id);
          this.obtenerImagenes(id);
          this.obtenerPeliculasSimilares(id);
        },
        error: error => {
          console.log(error);
        }
      }
    )
  }

  private obtenerDetalle(id: number) {
    this.peliculasService.obtenerDetalle(id).pipe(
      tap(pelicula => this.pelicula = pelicula),
      catchError(error => {
        console.error('Error al obtener detalle de la película:', error);
        return of(null);
      })
    ).subscribe();
  }

  private obtenerImagenes(id: number) {
    this.peliculasService.obtenerImagenes(id).pipe(
      tap(res => this.backdrops = res.backdrops),
      catchError(error => {
        console.error('Error al obtener imágenes de la película:', error);
        return of({ posters: [] });
      })
    ).subscribe();
  }

  private obtenerPeliculasSimilares(id: number) {
    this.peliculasService.obtenerSimilares(id).subscribe({
      next: res => {
        this.peliculasSimilares = res.results
      },
      error: err => console.error(err)
    })
  }

}
