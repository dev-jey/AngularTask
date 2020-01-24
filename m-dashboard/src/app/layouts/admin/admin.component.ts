import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  user: User;


  constructor() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit() {
  }

}
