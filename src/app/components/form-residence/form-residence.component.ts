import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.css'],
})

export class FormResidenceComponent implements OnInit {
  formR!: FormGroup;

  ngOnInit(): void {
    this.formR = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.minLength(2)]),
      name: new FormControl('', [Validators.required, Validators.pattern("^[A-Z][a-zA-Z]*")]),
      address: new FormControl('', [Validators.required,Validators.maxLength(10)]),
      image: new FormControl('', Validators.required),
      status: new FormControl('', [Validators.required,Validators.pattern(/^disponible+$/)]),
    });
  }

 
  show(val:ValidationErrors){
    console.log(val);
  }

  get id() {
    return this.formR.get('id');
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
  add() {
    console.log('My Form: ' + JSON.stringify(this.formR.value));
  }
}
