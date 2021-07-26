import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logged: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.logged = JSON.parse(localStorage.getItem('logged'))
  }

  login(){
    localStorage.setItem('logged','true')
    this.ngOnInit()
  }


}
