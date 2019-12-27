import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private dref : MatDialogRef<WelcomeComponent>) { }

  ngOnInit() {
 

  }
  close(){
    window.localStorage.setItem("showAgain","n")
    this.dref.close()
  }


}
