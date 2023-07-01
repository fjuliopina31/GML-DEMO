import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClientListComponent } from './client-list/client-list.component'; 

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
}, {
  path: 'clients',
  component: ClientListComponent
}, {
  path: '**',
  redirectTo: 'home'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
