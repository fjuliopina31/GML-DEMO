import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showHome: boolean = true;
  showClient: boolean = false;
  showEditClients: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(id) {
      this.showHome = true;
      this.showClient = true;
      this.showEditClients = true;
  }

}
