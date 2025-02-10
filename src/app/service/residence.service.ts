import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResidenceService {
  constructor() {}
  getDataById(list: any[], criteria: any, value: any) {
    let n = 0;
    list.forEach((element) => {
      element[criteria] === value ? n++ : n;
    });
    return n;
  }
}
