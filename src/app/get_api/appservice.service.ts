import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Diem, HeDaoTao, Khoa, Lop, MonHoc, MonHocTruot, SinhVien} from 'src/app/models/khoa';
import { HttpHeaders } from '@angular/common/http';
import { taiKhoan } from 'src/app/models/taikhoan';
import {environment} from 'src/environments/environment';
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
  readonly APISVtruot="https://localhost:44306/api/Diems/";
  // readonly apimonsvtruot="https://localhost:44306/api/Diems/laymonhoc/";
  formData: MonHoc;
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
  addMonhoc(formData:MonHoc)
  {
    return this.http.post<MonHoc[]>(this.APIURL+ '/MonHocs',formData);
  }
  updateMonHoc(val:any) : Observable<any>
  {
    return this.http.put<any>(this.APIURL+'/MonHocs/'+val.maMonHoc, val);
  }
  deleteMonHoc(val:any)
  {
    return this.http.delete(this.APIURL+'/MonHocs/'+val);
  }
  //Sinh Vien
  getSinhvienList():Observable<SinhVien[]>
  {
    return this.http.get<SinhVien[]>(this.APIURL+ '/SinhViens');
  }

  getAll() {
    return this.http.get<taiKhoan[]>(`${environment.APIURL}/users`);
  }
  getListLop():Observable<Lop[]>
  {
    return this.http.get<Lop[]>(this.APIURL+ '/Lops');
  }
  getListSV():Observable<SinhVien[]>
  {
    return this.http.get<SinhVien[]>(this.APIURL+ '/SinhViens');
  }
  // getdiemsinhvientruot(selectID:any):Observable<Diem[]>
  // {
  //   return this.http.get(this.APISVtruot+'getdiemsv/'+selectID.maSv,selectID);
  // }
  // getDiemSV():Observable<Diem[]>
  // {
  //   return this.http.get<Diem[]>(this.APIURL+ '/Diems');
  // }
  getdiemsinhvientruot(seletcID:any):Observable<any>
  {
    debugger
    let bien=new HttpParams().set('getdiemsv/',seletcID);
    return this.http.get(this.APISVtruot,{params:bien});
  }

  // getmonhocsvtruot(idmon:number,tenkhoa:string,tenlop:string):Observable<MonHocTruot[]>
  // {
  //   const url=`${this.apimonsvtruot}/${idmon}/${tenkhoa}/${tenlop}`;
  //   console.log(url);
  //   // return this.http.get<MonHocTruot[]>(this.apimonsvtruot+`${tenkhoa}/${tenlop}`);
  //   return this.http.get<MonHocTruot[]>(url)


  // }

}
