import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Khoa, MonHoc, SinhVien} from 'src/app/models/khoa';
import { HttpHeaders } from '@angular/common/http';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json'
//   })
// };
@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
  readonly APIURL="https://localhost:44306/api";


  constructor(private http:HttpClient) { }
  //Khoa
  getKhoaList():Observable<Khoa[]>
  {
    return this.http.get<Khoa[]>(this.APIURL+ '/Khoas');
  }
  addKhoas(val:any)
  {
    return this.http.post<Khoa[]>(this.APIURL+ '/Khoas',val);
  }
  updateKhoas(val:any) : Observable<any>
  {
    return this.http.put<any>(this.APIURL+'/Khoas/'+val.maKhoa, val);
  }
  deleteKhoas(val:any)
  {
    return this.http.delete(this.APIURL+'/Khoas/'+val);
  }
  //Mon Hoc
  getMonHocList():Observable<MonHoc[]>
  {

    return this.http.get<MonHoc[]>(this.APIURL+ '/MonHocs');
  }
  //Sinh Vien
  getSinhvienList():Observable<SinhVien[]>
  {
    return this.http.get<SinhVien[]>(this.APIURL+ '/SinhViens');
  }
}
