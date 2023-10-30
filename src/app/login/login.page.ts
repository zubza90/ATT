import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string="usuario"
  password: string="123456"

  constructor() { }

  login(){}

  ngOnInit() {
  }

}
