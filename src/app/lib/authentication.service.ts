import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {taiKhoan} from 'src/app/models/taikhoan';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private userSubject: BehaviorSubject<taiKhoan>;
    public user: Observable<taiKhoan>;
    private url="https://localhost:44388/Users/authenticate";
    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<taiKhoan>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): taiKhoan {
        return this.userSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(this.url, { TenDangNhap:username, MatKhau:password })
            .pipe(map(user => {
                debugger;
                user.authdata=window.btoa(username+':'+password);
                localStorage.setItem('taikhoan', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('taikhoan');
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }

    remove() {
        // remove user from local storage to log user out
        localStorage.removeItem('taikhoan');
        this.userSubject.next(null);
    }
}
