import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';

import { from } from 'rxjs';
@Component({ 
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  fname;
  eemail;
  taddress;
   acity;
  constructor(private us: UsersService) { }
  

  ngOnInit() {
  }
  caddData() {
    this.us.caddData(this.fname,this.taddress,this.acity,this.eemail);
    // console.log(this.name)
  }
  

}
