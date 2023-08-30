import { Pelicula } from "./pelicula.model"

export interface PeliculaResponse {
    page: number
    results: Pelicula[]
    total_pages: number
    total_results: number
  }