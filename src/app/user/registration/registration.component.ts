import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  constructor(public service: UserService) { }

  ngOnInit(): void {
  }
  Loadvalue() {
    this.service.Loadvalue();
  }
  
  onSubmit() {
    this.service.registerUser().subscribe(
      (res: any) => {
        if (res.succeeded) {
          alert('ss');
          this.service.registrationForm.reset();
        }else{
        console.log(res.errors);
        }

      }
    )
  }

}
