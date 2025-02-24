import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResidenceService } from 'src/app/service/residence.service';
import { Residence } from 'src/core/models/residence';

@Component({
  selector: 'app-residencedetails',
  templateUrl: './residencedetails.component.html',
  styleUrls: ['./residencedetails.component.css'],
})
export class ResidencedetailsComponent {
  pathname: string = '';
  residence:Residence=new Residence;
  constructor(
    private service: ResidenceService,
    private route: ActivatedRoute
  ) {
    this.pathname = route.snapshot.params['id'];
    
    
    
  }
  ngOnInit() {
    this.service.getResidence(this.pathname).subscribe((data) => {
      console.log(data);
      
      this.residence = data;      
    });
  }

}
