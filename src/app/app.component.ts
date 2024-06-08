import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FiltersComponent } from "./components/filters/filters.component";
import { DataTableComponent } from "./components/data-table/data-table.component";
import { BarraInicialComponent } from './components/barra-inicial/barra-inicial.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FiltersComponent, DataTableComponent, BarraInicialComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Oceanic Data Explorer';
}