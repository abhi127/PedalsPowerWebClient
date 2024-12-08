import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/auth.models';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UserProfileService {
    apiUrl = environment.baseUrl
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`/api/login`);
    }

    register(user: User) {
        // return this.http.post(`/users/register`, user);
        return this.http.post(`${this.apiUrl}/api/users`, user);
    }
    
    getAddress(){
        return this.http.get(`${this.apiUrl}/api/users/userAddress`);
    }
    
    saveAddress(userAddress:any){
        return this.http.put(`${this.apiUrl}/api/users/saveUserAddress`,userAddress);
    }
}
