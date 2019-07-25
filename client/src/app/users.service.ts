import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'http://localhost:3000/user';
  constructor(private http: HttpClient) { }
        addData(name,address,city,Cost,image) {
        const obj = {name,address,city,Cost,image};
          this
          .http
          .post(`${this.url}/add`, obj)
          .subscribe(res => console.log(res));
    }
    caddData(fname,taddress,acity,eemail) {
      const obj = {fname,taddress,acity,eemail};
        this
        .http
        .post(`${this.url}/cadd`, obj)
        .subscribe(res => console.log(res));
  }

    getData() {
      return(
      this
        .http
          .get(`${this.url}`)
      );
  }

  cgetData() {
    return(
    this
      .http
        .get(`${this.url}/cview`)
    );
}
  upData(id, name) {
    const obj = { id };
  this
      .http
      .post(`${this.url}/update/${id}`, obj)
      .subscribe(res => console.log(res));
}
delData(id) {
  return this.http.get(`${this.url}/delete/${id}`).subscribe();
}
editData(id) {
  return this
          .http
          .get(`${this.url}/edit/${id}`);
      }


    up_data(name,city, password,address,email, id) {

      const obj = {
          name: name,
          city: city,
          password: password,
          address:address,
          email:email
        };
        this
          .http
          .post(`${this.url}/update/${id}`, obj)
          .subscribe(res => console.log('Done'));
        }
}
