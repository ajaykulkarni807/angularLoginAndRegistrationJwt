import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/shared/password.validator';
import { forbiddenNameValidator } from 'src/shared/user-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ParentData="this data coming from parent component";
  childData="";
  getdata(data){
this.childData=data;
  }

//   title = 'reactive-form';

//   // registrationForm=new FormGroup({
//   //   Username:new FormControl('Ajay'),
//   //   Password:new FormControl(''),
//   //   confirmPassword:new FormControl(''),
//   //   address:new FormGroup({
//   //     city1:new FormControl(''),
//   //     state:new FormControl(''),
//   //     postalCode:new FormControl('')
//   //   })
//   // });

// constructor(private fb:FormBuilder){}




//   registrationForm= this.fb.group({
//    Username: ['',[Validators.required,forbiddenNameValidator]],
//    Password: ['Ajay'],
//    confirmPassword:[''],
//    address:this.fb.group({
//      city:[''],
//      state:[''],
//      postalCode:['']
//    })
//   },{validator:  PasswordValidator});

//   username=this.registrationForm.get('Username');

//   Loadvalue(){
//     this.registrationForm.patchValue({
//       Username: 'Ajay',
//       Password: 'Ajay',
//       confirmPassword:'Ajay',
//       address:({
//         city:'georai',
//         state:'maha',
//         postalCode:'431127',
//       })
//     })
//   }



}
