import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DevlopService {
  url = 'http://localhost:3000/devlop';
  constructor(private http: HttpClient) { }
        addData(fname,taddress,acity,eemail) {
        const obj = {fname,taddress,acity,eemail};
          this
          .http
          .post(`${this.url}/addd`, obj)
          .subscribe(res => console.log(res));
    }
    getData() {
      return(
      this
        .http
          .get(`${this.url}`)
      );
  }
  upData(id, name) {
    const obj = { name };
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


//     up_data(fname,acity,taddress,eemail, id) {

//       const obj = {
//           name: name,
//           city: city,
//           password: password,
//           address:address,
//           email:email
//         };
//         this
//           .http
//           .post(`${this.url}/update/${id}`, obj)
//           .subscribe(res => console.log('Done'));
//         }

    }
