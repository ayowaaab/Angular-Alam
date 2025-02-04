import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-residencedetails',
  templateUrl: './residencedetails.component.html',
  styleUrls: ['./residencedetails.component.css'],
})
export class ResidencedetailsComponent {
  pathname: string = '';
  constructor(route:ActivatedRoute) {
    console.log(route.snapshot.params)
    this.pathname=route.snapshot.params['id'];
  }

}
