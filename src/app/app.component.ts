import { Component, OnInit } from '@angular/core';
//import {UsersComponent} from '../app/users/users.component';
import { MatDialogRef, MatDialogConfig, MatDialog, MatDialogModule } from '@angular/material'
import { WelcomeComponent } from './welcome/welcome.component';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ProjectmComponent } from './projectm/projectm.component';
declare var ON_STATE_CHANGED: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 selectedIndex = 0;
  private dialogRef: any;
  constructor(public dialog: MatDialog, private pm : ProjectmComponent) { }



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
      maxHeight: '90%',
      panelClass: 'dialog',
      disableClose: true
    });
  }
  disableFreeSpaces(e){
    this.selectedIndex = e.index
    if(e.index == 2){
      this.pm.disableFreeSpace()
    }
  }
}
