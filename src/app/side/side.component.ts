import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent {

  currentView = "melee"
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    
  ngOnInit(): void {
    $('.pmv').hide()
    $('.ultimate').hide()
    console.log(window.location.host + window.location.search)
  }

  constructor(private breakpointObserver: BreakpointObserver, config: NgbDropdownConfig) {
    config.placement = 'top-left';
    config.autoClose = false;
  }
  /**
   * switches the main content to whatever they clicked
   * @param view what to switch to
   */
  transition(view: string) {
    if (this.currentView != view) {

      $('.' + this.currentView).hide();
      $('.' + view).toggle();
      this.currentView = view;
    }

  }
  charnums = [ //used in the dropdown for selecting character count
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26
  ];
}
