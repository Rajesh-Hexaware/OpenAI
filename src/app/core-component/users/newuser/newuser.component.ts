import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.scss']
})
export class NewuserComponent implements OnInit {
 
  usersPassword={
    password: 'password',
    show : false,
    confirmPassword:'password',
    confirmShow:false
  }

  constructor() { }

  ngOnInit(): void {
  }


  onClick(type:string){
  if(type === 'password'){
    if (this.usersPassword.password === 'password') {
      this.usersPassword.password = 'text';
      this.usersPassword.show = true;
    } else {
      this.usersPassword.password = 'password';
      this.usersPassword.show = false;
    }
  }else{
    if (this.usersPassword.confirmPassword === 'password') {
      this.usersPassword.confirmPassword = 'text';
      this.usersPassword.confirmShow = true;
    } else {
      this.usersPassword.confirmPassword = 'password';
      this.usersPassword.confirmShow = false;
    }
  }
  }

}
