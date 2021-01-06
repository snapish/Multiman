import { Component, OnInit } from '@angular/core';
//import {UsersComponent} from '../app/users/users.component';
import { MatDialogRef, MatDialogConfig, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { WelcomeComponent } from './welcome/welcome.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectmComponent } from './projectm/projectm.component';
import { MeleeComponent } from './melee/melee.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 selectedIndex = 0;
 disabledFrees: boolean = false;
  private dialogRef: any;
  constructor(public dialog: MatDialog, private pm : ProjectmComponent, private melee: MeleeComponent) { }



  ngOnInit(): void {
  // localStorage.setItem("showAgain","y") //testing purposes
    // if (localStorage.getItem("showAgain") != "n") { // if they havent been here before
    //   this.openPopup()
    // }
  }


  /**
   * This runs after loading all child components. AKA do any kind of "needing to do after rendering things" here
   */
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    console.log("ngafterviewinit")

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

}
