import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DreService, DreRecord  } from '../dre.service';

@Component({
  selector: 'app-dre',
  templateUrl: './dre.component.html',
  styleUrl: './dre.component.css'
})
export class DreComponent implements OnInit {
  records: DreRecord[] = [];
  filteredRecords: DreRecord[] = [];
  filterStatus: string = '';
  searchTerm: string = '';

  constructor(public dreService: DreService, public router: Router) {}

  ngOnInit(): void {
    this.loadRecords();
  }

  loadRecords(): void {
    this.dreService.getAllDre().subscribe((data) => {
      this.records = data;
      this.filteredRecords = data;
    });
  }

  deleteRecord(id: number): void {
    if (confirm('Are you sure you want to delete this record?')) {
      this.dreService.deleteDre(id).subscribe(() => {
        this.loadRecords();
      });
    }
  }

  editRecord(id: number): void {
    this.router.navigate(['/dre-form', id]);
  }

  addNewRecord(): void {
    this.router.navigate(['/dre-form']);
  }

  filterRecords(): void {
    if (this.filterStatus) {
      this.dreService.filterDreByStatus(this.filterStatus).subscribe((data) => {
        this.filteredRecords = data;
      });
    } else {
      this.filteredRecords = this.records;
    }
  }

  searchRecords(): void {
    if (this.searchTerm) {
      this.dreService.searchDreByName(this.searchTerm).subscribe((data) => {
        this.filteredRecords = data;
      });
    } else {
      this.filteredRecords = this.records;
    }
  }

}
