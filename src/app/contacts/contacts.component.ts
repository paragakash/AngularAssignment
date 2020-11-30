import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DbServiceService } from './../db-service.service';
import { post } from './../users.module';
 import { map} from 'rxjs/operators'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {

  myForm:FormGroup;

  postArr=[];

  constructor(private dbServiceService:DbServiceService) { }

  ngOnInit(){
    this.myForm=new FormGroup({
      'userName':new FormControl(null,[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+[a-zA-Z]$")]),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'message':new FormControl(null),
    })
  }

  //Save Data on Firebase

  onSubmit(postData:post){
    console.log(JSON.stringify(postData))
    this.dbServiceService.saveUsers(postData).subscribe(
      (res)=>{
        this.getAllPostFromFB()
      }
    )
  }

  getAllPostFromFB(){
    this.dbServiceService.fetchUsers()
    .subscribe((res)=>{
      for(const key in res)
      {
        this.postArr.push({id:key,...res[key]})
      }
      console.log(this.postArr)
    })
  }


  // getAllPost(){
  //   this.dbServiceService.fetchUsers().subscribe((res)=>{
  //     console.log(res)
  //   })
  // }

  // deletePost(postData:post){
  //   this.dbServiceService.deleteUsers(postData).subscribe(()=>{
  //     this.getAllUsers()
  //   })
  // }

  // updatePost(postData:post){
  //   this.dbServiceService.updateUsers(postData).subscribe(()=>{
  //     this.getAllUsers
  //   })
  // }

}
