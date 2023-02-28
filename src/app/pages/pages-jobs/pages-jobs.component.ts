import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages-jobs',
  templateUrl: './pages-jobs.component.html',
  styleUrls: ['./pages-jobs.component.css']
})
export class PagesJobsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  gotoCreateJob(){
    this.router.navigate(['new-job'])
  }
}
