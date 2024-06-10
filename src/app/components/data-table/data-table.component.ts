import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OceanDataService } from '../../services/ocean-data.service';
import { OceanData } from '../../interfaces/oceandata';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input() filters: any = {};
  rowData: OceanData[] = [];

  columnDefs = [
    { headerName: 'Região', field: 'regiao' },
    { headerName: 'Espécies', field: 'especies' },
    { headerName: 'Status de Conservação', field: 'projetosConservacao' },
    { headerName: 'Temperatura da Água', field: 'temperaturaAgua' },
    { headerName: 'pH', field: 'pH' },
    { headerName: 'Nível de Poluição', field: 'nivelPoluicao' }
  ];

  constructor(private oceanDataService: OceanDataService) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnChanges(): void {
    console.log('Mudou')
    console.log(this.filters)
    this.loadData();
  }

  loadData(): void {
    this.oceanDataService.list(this.filters).subscribe(data => {
      this.rowData = data;
    });
  }
}
