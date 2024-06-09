import { Routes } from '@angular/router';
import { IntegrantesEquipeComponent } from './components/integrantes-equipe/integrantes-equipe.component';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';

export const routes: Routes = [
  { path: '', component: PaginaInicialComponent },
  { path: 'integrantes-equipe', component: IntegrantesEquipeComponent },
];