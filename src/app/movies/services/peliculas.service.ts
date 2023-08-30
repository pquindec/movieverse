import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { PeliculaResponse } from 'src/app/core/models/pelicula/pelicula-response.model';
import { Pelicula } from 'src/app/core/models/pelicula/pelicula.model';
import { ImagenPeliculaResponse } from 'src/app/core/models/img/imagenes-pelicula.model';



@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  apiUrl = environment.apiUrl;  

  constructor(private http: HttpClient) { }

  obtenerPeliculas(){

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${environment.apiKey}`
      })
    }
    return this.http.get<PeliculaResponse>(`${this.apiUrl}/trending/movie/day?language=en-US`, httpOptions);
  }

  obtenerDetalle(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${environment.apiKey}`
      })
    };
    return this.http.get<Pelicula>(`${this.apiUrl}/movie/${id}?language=en-US`, httpOptions);

  }

  obtenerImagenes(id: number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${environment.apiKey}`
      })
    };
    return this.http.get<ImagenPeliculaResponse>(`${this.apiUrl}/movie/${id}/images`, httpOptions);

  
  }
  obtenerSimilares(id: number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${environment.apiKey}`
      })
    };
    return this.http.get<PeliculaResponse>(`${this.apiUrl}/movie/${id}/similar?language=en-US&page=1`, httpOptions);
  }
}
