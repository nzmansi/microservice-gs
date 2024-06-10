import { Component } from '@angular/core';
import { BarraInicialComponent } from '../barra-inicial/barra-inicial.component';
import { FiltersComponent } from '../filters/filters.component';
import { DataTableComponent } from '../data-table/data-table.component';

@Component({
  selector: 'app-pagina-inicial',
  standalone: true,
  imports: [BarraInicialComponent, FiltersComponent, DataTableComponent],
  templateUrl: './pagina-inicial.component.html',
  styleUrl: './pagina-inicial.component.css'
})

export class PaginaInicialComponent {

  filters: any = {};

  onFilterChange(filters: any) {
    this.filters = filters;
  }

}
