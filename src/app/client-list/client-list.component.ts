import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../services/clients.service';
import { Client } from '../models/client';

@Component({
  selector: 'app-movie-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  clients: any = [];
  client: Client;
  availableStock: boolean = true;
  constructor(private movieService: ClientsService) {
    this.movieService.getClients().subscribe(
      res => { this.clients = res },
      err => console.error(err)
    )
  }

  ngOnInit() {
    this.getClients()
  }

  getClients() {
    this.movieService.getClients().subscribe(
      res => { this.clients = res },
      err => console.error(err)
    )
  }
}
