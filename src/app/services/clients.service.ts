import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Client} from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  API_URI = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getClients() {
    return this.http.get(`${this.API_URI}/client/`)
  }

  getClient(sharedKey: string) {
    return this.http.get(`${this.API_URI}/client/?sharedKey=${sharedKey}`)
  }

  saveClient(client: Client) {
    return this.http.post(`${this.API_URI}/client/`, client);
  }

  deleteClient(id: number){
    return this.http.delete(`${this.API_URI}/client/?id=${id}`)
  }

}
