import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FiltersComponent } from "./components/filters/filters.component";
import { DataTableComponent } from "./components/data-table/data-table.component";
import { OceanDataService } from './services/ocean-data.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [Component, RouterOutlet, NavbarComponent, FiltersComponent, DataTableComponent, OceanDataService]
})
export class AppComponent {
  title = 'gs-microservices';
  filteredData: any[] = [];

  constructor(private oceanDataService: OceanDataService) { }

  ngOnInit() {
    this.oceanDataService.getAllData()
      .subscribe(data => {
        this.filteredData = data;
      });
  }

  onFilterData(filters: any) {
    this.oceanDataService.filterData(filters)
      .subscribe(data => {
        this.filteredData = data;
      });
  }


}


