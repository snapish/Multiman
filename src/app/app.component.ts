import { Component, OnInit } from '@angular/core';
//import {UsersComponent} from '../app/users/users.component';
import { MatDialogRef, MatDialogConfig, MatDialog, MatDialogModule } from '@angular/material'
import { WelcomeComponent } from './welcome/welcome.component';
import { MAT_DIALOG_DATA } from '@angular/material';
declare var ON_STATE_CHANGED: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  idx = 0;
  private dialogRef: any;
  constructor(public dialog: MatDialog) { }



  ngOnInit(): void {
  // localStorage.setItem("showAgain","y") //testing purposes
    if (localStorage.getItem("showAgain") != "n") { // if they havent been here before
      this.openPopup()
    }
  }
  openPopup() {
    this.dialogRef = this.dialog.open(WelcomeComponent, {
      width: '95%',
      maxWidth: '100%',
      height: '90%',
      panelClass: 'dialog',
      disableClose: true
    });
  }
}
