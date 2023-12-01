import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emailsettings',
  templateUrl: './emailsettings.component.html',
  styleUrls: ['./emailsettings.component.scss']
})
export class EmailsettingsComponent implements OnInit {
  password='password'
  show = false;

  constructor() { }

  ngOnInit(): void {
  }


  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }
}
