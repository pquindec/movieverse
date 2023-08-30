import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioBasicoComponent } from './shared/components/formulario-basico/formulario-basico.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule) },
  {
    path: 'formulario-basico', component: FormularioBasicoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
