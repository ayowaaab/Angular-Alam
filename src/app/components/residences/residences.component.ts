import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Residence } from 'src/core/models/residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css'],
})
export class ResidencesComponent {
  address: string = '';
  listResidences: Residence[] = [
    {
      id: 1,
      name: 'El fel',
      address: 'Borj Cedria',
      image: '../../../assets/images/R1.jpeg',
      status: 'Disponible',
    },
    {
      id: 2,
      name: 'El yasmine',
      address: 'Ezzahra',
      image: '../../../assets/images/R2.jpeg',
      status: 'Disponible',
    },
    {
      id: 3,
      name: 'El Arij',
      address: 'Rades',
      image: '../../../assets/images/R3.jpeg',
      status: 'Vendu',
    },
    {
      id: 4,
      name: 'El Anber',
      address: 'inconnu',
      image: '../../../assets/images/R4.jpeg',
      status: 'En Construction',
    },
  ];
  filtredList: Residence[] = this.listResidences;
  searchValue: string = '';
  favoris: Residence[] = [];
  likeStatue: string = 'disliked';
  handelFilterList(value: string) {
    this.filtredList = this.listResidences.filter((residence) =>
      residence.address.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
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
