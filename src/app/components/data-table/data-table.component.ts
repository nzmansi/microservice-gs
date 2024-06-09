import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OceanData } from '../../interfaces/oceandata';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})

export class DataTableComponent implements OnInit {
  rowData: OceanData[] = [];
 
  columnDefs = [
    { headerName: 'Região', field: 'regiao' },
    { headerName: 'Espécies', field: 'especies' },
    { headerName: 'Projetos de Conservação', field: 'projetosConservacao' },
    { headerName: 'Temperatura da Água', field: 'temperaturaAgua' },
    { headerName: 'pH', field: 'pH' },
    { headerName: 'Nível de Poluição', field: 'nivelPoluicao' }
  ];
  oceanDataService: any;

  //constructor(private oceanDataService: OceanDataService) { }
 
  ngOnInit(): void {
    this.oceanDataService.list().subscribe((data: OceanData[]) => {
      this.rowData = data;  
    });
  }
}