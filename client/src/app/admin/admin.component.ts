import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  arr;
  // name;
  constructor(private us: UsersService) { }
 
  ngOnInit() {
    this.cgetData();
  }
  cgetData() {
    this.us.cgetData().subscribe(data => { this.arr = data; });
}
 
delData(id) {
  this.us.delData(id);
}

}
