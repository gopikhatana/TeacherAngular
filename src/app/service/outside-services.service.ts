import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from 'src/app/beans/response';
// import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OutsideServicesService {

  constructor(private _http : HttpClient) { }
  
  getTeacherBySchool(udise_code: any): Observable<Response> {
    // alert("in")
    // debugger
    // let url = environment.BASE_URL_DATA + "getTeacherBySchool/" + JSON.stringify(udise_code);
    // return this._http.post(url);


    // const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
        // console.log(JSON.stringify(this.http.post<any>(`https://demopgi.udiseplus.gov.in/UserService/api/userCradential/get-usercradential`,udise_code,{headers})));
        return this._http.post<any>(`http://10.25.26.251:8014/api/teacher/getTeacherBySchool`,udise_code); 
  }
}
