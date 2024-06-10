import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {

  @Output() filterChange = new EventEmitter<any>();

  selectedRegion: string = '';
  selectedEspecie: string = '';
  selectedProject: string = '';
  selectedTemp: string = '';
  selectedPH: string = '';
  selectedLevel: string = '';

  getSelectedValues() {

    const filters = {
      regiao: this.selectedRegion,
      especie: this.selectedEspecie,
      statusConservacao: this.selectedProject,
      temperaturaMax: this.selectedTemp,
      phMax: this.selectedPH,
      nivelPoluicao: this.selectedLevel,
    };

    this.filterChange.emit(filters);
    
  }
}
