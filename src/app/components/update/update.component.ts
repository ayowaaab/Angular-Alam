import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceService } from 'src/app/service/residence.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent {
  formR!: FormGroup;
  path_id!: Number;
  constructor(
    private service: ResidenceService,
    private router: Router,
    private act: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.path_id = this.act.snapshot.params['id'];

    this.formR = new FormGroup({
      name: new FormControl(),
      address: new FormControl(),
      image: new FormControl(),
      status: new FormControl(),
    });

    this.service.getResidence(this.path_id).subscribe((data) => {
      this.formR.patchValue(data);
    });
  }

  get name() {
    return this.formR.get('name');
  }
  get address() {
    return this.formR.get('address');
  }
  get image() {
    return this.formR.get('image');
  }
  get status() {
    return this.formR.get('status');
  }
  update() {
    this.service
      .updateResidence(this.formR.value, this.path_id)
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['/residence']);
      });
  }
}
