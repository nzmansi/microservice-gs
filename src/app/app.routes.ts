import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OceanConditionsComponent } from './components/ocean-conditions/ocean-conditions.component';
import { EndangeredSpeciesComponent } from './components/endangered-species/endangered-species.component';
import { ConservationProjectsComponent } from './components/conservation-projects/conservation-projects.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'ocean-conditions', component: OceanConditionsComponent },
  { path: 'endangered-species', component: EndangeredSpeciesComponent },
  { path: 'conservation-projects', component: ConservationProjectsComponent }
];
