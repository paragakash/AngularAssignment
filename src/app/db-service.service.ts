import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { post } from './users.module';

@Injectable({
  providedIn: 'root'
})
export class DbServiceService {
  constructor(private http:HttpClient) { }


  // CRUD operation using Firebase realtime Database

  saveUsers(postData:post){
     return this.http.post('https://storedb-73d07.firebaseio.com/posts.json',postData)
  }

   fetchUsers(){
    return this.http.get('https://storedb-73d07.firebaseio.com/posts.json')
  }


  // CRUD operation using jsone-server

  // saveUsers(postData:post){
  //    return this.http.post('http://localhost:3000/posts',postData)
  // }

  // fetchUsers(){
  //   return this.http.get('http://localhost:3000/posts')
  // }
  // updateUsers(postData:post){
  //   return this.http.put('http://localhost:3000/posts',postData.id,postData)
  // }
  // deleteUsers(postData:post){
  //   return this.http.delete('http://localhost:3000/posts',postData.id)
  // }

}
