import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ResidencesComponent } from './components/residences/residences.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { ResidencedetailsComponent } from './components/residences/residencedetails/residencedetails.component';
import { FormResidenceComponent } from './components/form-residence/form-residence.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent,
    NavbarComponent,
    NotfoundComponent,
    HomeComponent,
    ResidencedetailsComponent,
    FormResidenceComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, RouterModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
