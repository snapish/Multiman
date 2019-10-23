import { Component, OnInit } from '@angular/core';
//import {UsersComponent} from '../app/users/users.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){
  // if(!(window.location.href.startsWith("https"))){
  //   document.location.replace('https://ironman.gg')
  // }

  }

  idx = 0;
  switchToMelee(event){

    console.log('cock')
    console.log(event)
  }
}
