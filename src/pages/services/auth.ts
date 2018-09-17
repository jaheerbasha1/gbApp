import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';

@Injectable()
export class AuthService{
  datas: any;
constructor(private http: HTTP) {
  this.datas = null
}

    login(empNo:number,password:string){
      //this.http.enableSSLPinning
       this.http.get('http://10.106.144.115:8080/data', {}, {})
        .then(data => {
      
          console.log(data.status);
          console.log(data.data); // data received by server
          console.log(data.headers);
      
        })
        .catch(error => {
      
          console.log(error.status);
          console.log(error.error); // error message as string
          console.log(error.headers);
      
        });
    }
}
