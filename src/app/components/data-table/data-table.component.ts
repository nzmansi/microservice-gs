import { Component, OnInit } from '@angular/core';
import { OceanDataService } from '../../services/ocean-data.service';

@Component({
  selector: 'app-data-table',
  standalone: true,
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  oceanData: any[] = [];

  constructor(private oceanDataService: OceanDataService) { }

  ngOnInit(): void {
    this.oceanDataService.getOceanData().subscribe(data => {
      this.oceanData = data;
    });
  }
}
