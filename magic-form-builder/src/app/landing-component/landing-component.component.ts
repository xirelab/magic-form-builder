import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-landing-component',
    templateUrl: './landing-component.component.html',
    styleUrls: ['./landing-component.component.scss'],
    standalone: false
})
export class LandingComponentComponent implements OnInit {

  constructor(
    public router: Router    
  ) { }

  ngOnInit(): void { }

  title = 'magic-form-builder';

  navigate(page: string) {
    this.router.navigate([page]);
  }
}
