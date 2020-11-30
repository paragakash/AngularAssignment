import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ClientsComponent } from './clients/clients.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DbServiceService } from './db-service.service';
import { HttpClientModule } from  '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ClientsComponent,
    HomeComponent,
    PagenotfoundComponent,
    CarouselComponent,
  ],
  imports: [
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    CarouselModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  
  ],
  providers: [DbServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
