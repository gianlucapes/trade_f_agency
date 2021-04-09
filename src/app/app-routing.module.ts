import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DipartimentiComponent } from './dipartimenti/dipartimenti.component';
import { ImpiegatiComponent } from './impiegati/impiegati.component';
import {HomeComponent} from './home/home.component'; 
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DipartimentiDetailComponent } from './dipartimenti-detail/dipartimenti-detail.component';
import {ImpiegatiDetailComponent} from './impiegati-detail/impiegati-detail.component';

const routes: Routes = [
  { path :'' , redirectTo: '/home',pathMatch:'full'},
  { path:'team', component:ImpiegatiComponent},
  { path :'team/Detail',component:ImpiegatiDetailComponent},
  { path:'dipartimenti', component:DipartimentiComponent},
  { path:'dipartimenti/:GeoCode', component:DipartimentiDetailComponent},
  { path:'home', component:HomeComponent},
  { path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = 
[DipartimentiComponent, 
  ImpiegatiComponent,
  HomeComponent,
  PageNotFoundComponent,
  DipartimentiDetailComponent,
  ImpiegatiDetailComponent]