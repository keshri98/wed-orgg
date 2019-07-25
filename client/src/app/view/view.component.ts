import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  
  arr;
  // name;
  constructor(private us: UsersService) { }
 
  ngOnInit() {
    this.getData();
  }
  getData() {
    this.us.getData().subscribe(data => { this.arr = data; });
}
 
delData(id) {
  this.us.delData(id);
}

  

}
