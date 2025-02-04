import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ResidencesComponent } from './components/residences/residences.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { ResidencedetailsComponent } from './components/residences/residencedetails/residencedetails.component';

@NgModule({
  declarations: [AppComponent, ResidencesComponent, NavbarComponent, NotfoundComponent, HomeComponent, ResidencedetailsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
