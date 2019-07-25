import { Component, OnInit } from '@angular/core';
import{UsersService} from '../users.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  name;
  image;
  Cost;
  address;
   city;
  constructor(private us: UsersService) { }
  

  ngOnInit() {
  }
  addData() {
    this.us.addData(this.name,this.address,this.city,this.Cost,this.image);
    // console.log(this.name)
  }
  

}
