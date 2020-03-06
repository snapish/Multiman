import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

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
  constructor(private breakpointObserver: BreakpointObserver) { 
 
  }
  /**
   * switches the main content to whatever they clicked
   * @param view what to switch to
   */
  transition(view: string) {
    if (this.currentView != view) {
      
      $('.' + this.currentView).hide();
      $('.'+view).toggle();
      this.currentView=view;
    }
    
  }
}
