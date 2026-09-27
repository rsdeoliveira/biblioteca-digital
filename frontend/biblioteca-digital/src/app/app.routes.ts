
import { Routes } from '@angular/router';
import { Lista } from './pages/livros/lista/lista';
import { Formulario } from './pages/livros/formulario/formulario';
export const routes: Routes = [
  {
    path: 'livros',
    component: Lista
  },
  {
    path: '',
    redirectTo: 'livros',
    pathMatch: 'full'
  },
  {
    path: 'livros/novo',
    component: Formulario
  },

  {
    path: 'livros/editar/:id',
    component: Formulario
  }
];
