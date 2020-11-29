import { Injectable } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { PasswordValidator } from 'src/shared/password.validator';
import { forbiddenNameValidator } from 'src/shared/user-validator';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly url=environment.baseUrl;
  
  constructor(private fb:FormBuilder,private http:HttpClient) { }

    registrationForm= this.fb.group({
   Username: ['',[Validators.required,forbiddenNameValidator]],
   Email: ['',Validators.required],
   FullName: ['',Validators.required],
   Password: ['',Validators.required],
   confirmPassword:['',Validators.required],
   address:this.fb.group({
     city:['',Validators.required],
     state:['',Validators.required],
     postalCode:['',Validators.required],
   })
  },{validator:  PasswordValidator});

  username=this.registrationForm.get('Username');

  Loadvalue(){
    this.registrationForm.patchValue({
      Username: 'Ajay',
      Email:'ajay@gmail.com',
      FullName:"Ajay Kulkarni",
      Password: 'Ajay',
      confirmPassword:'Ajay',
      address:({
        city:'georai',
        state:'maha',
        postalCode:'431127',
      })
    })
  }

  registerUser(){
var body={
  Username: this.registrationForm.value.Username,
    Email: this.registrationForm.value.Email,
  FullName: this.registrationForm.value.FullName,
    Password: this.registrationForm.value.Password,
    city: this.registrationForm.value.address.city,
    State: this.registrationForm.value.address.state,
    PostalCode:parseInt(this.registrationForm.value.address.postalCode),
}

 return this.http.post(this.url +"/ApplicationUser/Register",body);

  }

  login(formData) {
    return this.http.post(this.url + '/ApplicationUser/Login', formData);
  }

  GetUserDetail(){
   // var tokenHeader=new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')});
    return this.http.get(this.url +'/UserDetail/GetProfile' );
  }

  roleMatch(allowedRoles):boolean{
     var isMatch=false;
     var payLoad=JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
     var userRole=payLoad.role;
     allowedRoles.forEach(element => {
       if(userRole == element){
         isMatch=true;
         return false;
       }
     });
     return isMatch;
  }
}
