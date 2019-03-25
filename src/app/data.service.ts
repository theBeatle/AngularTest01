import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private client: HttpClient) { }

  firstClick() {
    console.log('Clicked by Service!!!');
  }

  getUsers() {
    const apiUrl = 'https://reqres.in/api/users';
    return this.client.get(apiUrl);
  }

}
