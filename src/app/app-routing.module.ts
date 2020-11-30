import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CarouselComponent } from './Components/carousel/carousel.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'contacts',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'contacts',
    component:ContactsComponent,
  },
  {
    path:'clients',
    component:ClientsComponent,
  },
  {
    path:'carousel',
    component:CarouselComponent,
  },
  {
    path:'**',
    component:PagenotfoundComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
