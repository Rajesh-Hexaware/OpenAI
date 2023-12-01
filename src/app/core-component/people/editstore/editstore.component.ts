import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editstore',
  templateUrl: './editstore.component.html',
  styleUrls: ['./editstore.component.scss']
})
export class EditstoreComponent implements OnInit {
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
