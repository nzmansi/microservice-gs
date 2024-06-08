import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BarraInicialComponent } from './components/barra-inicial/barra-inicial.component';
import { FiltersComponent } from './components/filters/filters.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { OceanDataService } from './services/ocean-data.service';

@NgModule({
  declarations: [
    AppComponent,
    BarraInicialComponent,
    FiltersComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideHttpClient(),
    OceanDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
