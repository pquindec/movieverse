import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { PeliculasComponent } from "./components/peliculas/peliculas.component";
import { PeliculaComponent } from "./components/pelicula/pelicula.component";

const routes: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            {
                path: 'peliculas', component: PeliculasComponent
            },
            {
                path: '', redirectTo: 'peliculas', pathMatch: 'full'
            },
            {
                path: 'pelicula/:id', component: PeliculaComponent
            }
        ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MoviesRoutingModule {}

