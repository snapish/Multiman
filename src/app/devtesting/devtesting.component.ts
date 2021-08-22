import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { StateService } from '../state.service';
import { MeleeComponent } from '../melee/melee.component';
@Component({
  selector: 'app-devtesting',
  templateUrl: './devtesting.component.html',
  styleUrls: ['./devtesting.component.css']
})
export class DevtestingComponent implements OnInit {
  melee = "melee"
  items = [
    '/assets/meleeIcons/1.png ',
    '/assets/meleeIcons/2.png ',
    '/assets/meleeIcons/3.png ',
    '/assets/meleeIcons/4.png ',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
  constructor(public stateService: StateService, public meleeComp: MeleeComponent) { }

  ping(){
    console.log(Object.keys(this.stateService.state.melee)[1])
  }
  ngOnInit(): void {
  }

}
