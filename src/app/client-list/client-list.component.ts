import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../services/clients.service';
import { Client } from '../models/client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  clients: any = [];
  client: Client;
  availableStock: boolean = true;
  constructor(private clientService: ClientsService) {
    this.clientService.getClients().subscribe(
      res => { this.clients = res },
      err => console.error(err)
    )
  }

  ngOnInit() {
    this.getClients()
  }

  getClients() {
    this.clientService.getClients().subscribe(
      res => { this.clients = res },
      err => console.error(err)
    )
  }
}
