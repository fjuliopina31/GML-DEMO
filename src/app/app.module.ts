import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ClientListComponent } from './client-list/client-list.component'
import { FormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';
import { EditClientsComponent } from './edit-clients/edit-clients.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientListComponent,
    EditClientsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GoogleChartsModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
