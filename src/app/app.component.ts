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
  
  }
  title = 'Random Ironmans!';
  idx = 0;
 
 


}