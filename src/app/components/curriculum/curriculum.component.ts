import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html'
})
export class CurriculumComponent implements OnInit, AfterViewInit {

  constructor(private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
  }

}
