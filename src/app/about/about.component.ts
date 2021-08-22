import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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


}
