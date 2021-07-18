import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from '../user-form/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
loadedUsers: User[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchUser();
  }

  onCreateUser(userData : User ){
     this.http.post('https://angular-task-cd765-default-rtdb.firebaseio.com/users.json',userData)
     .subscribe(resData => {
       console.log(resData)
     })
    
  }
  
   onFetchUser(){
     this.fetchUser();
   }
  private fetchUser(){
    this.http.get('https://angular-task-cd765-default-rtdb.firebaseio.com/users.json')
    .pipe(map((responseData : any )=> {
      const userArray: User[] = [];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
          userArray.push({ ...responseData[key] , id: key });
        }
      }
      return userArray;
    }))
    .subscribe(usersData => {
       this.loadedUsers = usersData;
       console.log(this.loadedUsers)
    })
  }

}
