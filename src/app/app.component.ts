import { Component, OnInit } from '@angular/core';
//import {UsersComponent} from '../app/users/users.component';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Content } from '@angular/compiler/src/render3/r3_ast';
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
  title = 'Random Ironmans!';
  idx = 0;
  switchToMelee(event){

    console.log('cock')
    console.log(event)
  }
 


}
