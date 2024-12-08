import { Injectable } from '@angular/core';

import { getFirebaseBackend } from '../../authUtils';

import { User } from '../models/auth.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })

export class AuthenticationService {

    user: User;

    private apiUrl = environment.baseUrl;

    constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

    /**
     * Returns the current user
     */
    // public currentUser(): User {
    //     return getFirebaseBackend().getAuthenticatedUser();
    // }

    // /**
    //  * Performs the auth
    //  * @param email email of user
    //  * @param password password of user
    //  */
    // login(email: string, password: string) {
    //     return getFirebaseBackend().loginUser(email, password).then((response: any) => {
    //         const user = response;
    //         return user;
    //     });
    // }

    /**
     * Performs the register
     * @param email email
     * @param password password
     */
    register(email: string, password: string) {
        return getFirebaseBackend().registerUser(email, password).then((response: any) => {
            const user = response;
            return user;
        });
    }

    /**
     * Reset password
     * @param email email
     */
    resetPassword(email: string) {
        return getFirebaseBackend().forgetPassword(email).then((response: any) => {
            const message = response.data;
            return message;
        });
    }

    // /**
    //  * Logout the user
    //  */
    // logout() {
    //     // logout the user
    //     getFirebaseBackend().logout();
    // }

    login(email: string, password: string): Observable<any> {
        return this.http.post(`${this.apiUrl}/api/auth/login`, { email, password }).pipe(
            tap((response: any) => {
              // Store token in sessionStorage
              sessionStorage.setItem('token', response.token);
              sessionStorage.setItem('name', response.name);
              sessionStorage.setItem('role', response.role);
            })
          );;
      }
    
      isLoggedIn(): boolean {
        const token = sessionStorage.getItem('token');
        if(token)
        return true;
        return token && !this.jwtHelper.isTokenExpired(token);
      }
    
      logout() {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('name');
        sessionStorage.removeItem('role');
      }
}

