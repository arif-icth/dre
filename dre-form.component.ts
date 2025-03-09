import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DreService, DreRecord } from '../dre.service';

@Component({
  selector: 'app-dre-form',
  templateUrl: './dre-form.component.html',
  styleUrl: './dre-form.component.css'
})
export class DreFormComponent implements OnInit {

  record: DreRecord = { name: '', certification_date: '', status: 'Active' };
  isEditMode = false;
  dateError: string = '';

  constructor(
    public dreService: DreService,
    public router: Router,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.dreService.getDreById(Number(id)).subscribe((data) => {
        this.record = data;
      });
    }
  }

  isValidDateFormat(dateString: string): boolean {
    //date format alow (YYYY-MM-DD)
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(dateString);
  }

  saveRecord(): void {

    if (!this.isValidDateFormat(this.record.certification_date)) {
      this.dateError = 'Invalid date format! Use YYYY-MM-DD.';
      return;
    }
    this.dateError = '';

    if (this.isEditMode) {
      this.dreService.updateDre(this.record.id!, this.record).subscribe(() => {
        this.router.navigate(['/dre']);
      });
    } else {
      this.dreService.createDre(this.record).subscribe(() => {
        this.router.navigate(['/dre']);
      });
    }
  }


}
