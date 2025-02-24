import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './components/residences/residences.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ResidencedetailsComponent } from './components/residences/residencedetails/residencedetails.component';
import { FormResidenceComponent } from './components/form-residence/form-residence.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'residence',
    component: ResidencesComponent,
    children: [{ path: ':id', component: ResidencedetailsComponent }],
  },
  {
    path: 'residence-details/:id',
    component: ResidencedetailsComponent,
  },
  { path: 'form', component: FormResidenceComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
