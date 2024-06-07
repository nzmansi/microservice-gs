import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FiltersComponent } from "./components/filters/filters.component";
import { DataTableComponent } from "./components/data-table/data-table.component";
import { BarraInicialComponent } from './components/barra-inicial/barra-inicial.component';
//import { OceanDataService } from './services/ocean-data.service';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [FiltersComponent, DataTableComponent,BarraInicialComponent]
})
export class AppComponent {
  title = 'gs-microservices';


}


