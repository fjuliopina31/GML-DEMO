import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../services/clients.service';
import { Client } from '../models/client';

@Component({
  selector: 'app-edit-clients',
  templateUrl: './edit-clients.component.html',
  styleUrls: ['./edit-clients.component.scss']
})
export class EditClientsComponent implements OnInit {
  client:Client;
  listClient:any;
  showCardAdd:boolean= false;
  showListClient: boolean = false;
  showSearchForm: boolean = false;
  showBtnCancel: boolean = false;
  constructor(private clientService: ClientsService) { }

  ngOnInit() {
    this.showListClient = true;
    this.showSearchForm = true;
    this.getClients()
  }

  getClients(){
    this.clientService.getClients().subscribe(
      res => {
        this.listClient = res;
      },
      err => alert("Oopss, something is wrong, try again later" + err)
    )
  }

  getClient(sharedKey: string){
    this.showCardAdd = false;
    if(sharedKey){
      this.clientService.getClient(sharedKey).subscribe(
        res => {
          this.client = res;
          if(this.listClient.length === 0){
            this.getClients();
          }
          this.listClient = this.listClient.filter(clientFilter => clientFilter.sharedKey.includes(this.client.sharedKey));
        },
        err => {
          this.listClient =[];
        }
      
      )
    }
    
  }

  showCreateClient(){
    this.showListClient = false;
    this.showSearchForm = false;
    this.showBtnCancel = true;
    this.showCardAdd=true;
    this.client = {};
  }

  viewForDefault(){
    this.showListClient = true;
    this.showSearchForm = true;
    this.showBtnCancel = false;
    this.showCardAdd=false;
    this.getClients();
  }

  addClient(){
    this.clientService.saveClient(this.client).subscribe(
      res => {
        this.viewForDefault();
      },
      err => alert("Oopss, something is wrong, try again later" + err)
    )
  }

  validateField(sharedKey: string){
    if(!sharedKey){
      this.getClients();
    }
  }


}
