import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WelcomeComponent } from '../welcome/welcome.component';
declare var $: any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  
  private dialogRef: any;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  
  }
  test(){
    console.log('asdf')
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
