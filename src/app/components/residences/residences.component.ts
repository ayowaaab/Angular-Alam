import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ResidenceService } from 'src/app/service/residence.service';
import { Residence } from 'src/core/models/residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css'],
})
export class ResidencesComponent implements OnInit {
  address: string = '';
  listResidences: Residence[] = [];
  filtredList: Residence[] = this.listResidences;
  searchValue: string = '';
  favoris: Residence[] = [];
  likeStatue: string = 'disliked';
  constructor(private residenceService: ResidenceService) {}

  ngOnInit(): void {
    this.residenceService.getAllResidence().subscribe((data) => {
      this.listResidences = data;
    });
  }
  handelFilterList(value: string) {
    this.filtredList = this.listResidences.filter((residence) =>
      residence.address.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
  }
  showNumber() {
   
  }
  deleteResidence(id: number) {
    this.residenceService.deleteResidence(id);
    this.ngOnInit();
  }
  addFavoris(residence: Residence) {
    let exist = false;
    let pos: Residence = new Residence();
    this.favoris.forEach((res) => {
      if (res.id == residence.id) {
        exist = true;
        pos = res;
      }
    });
    if (!exist) this.favoris.push(residence);
    else this.favoris = this.favoris.filter((el) => el.id != pos.id);
  }
  isFavoris(id: number) {
    let contain = this.favoris.some((fav) => fav.id === id);
    return contain ? 'liked' : 'disliked';
  }
  showLocation(address: string) {
    if (address == 'inconnu') return alert('An Error occured !');
    this.address = address;
  }
}
