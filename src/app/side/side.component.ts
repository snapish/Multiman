import { Component, ChangeDetectorRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { NgbModule, NgbDropdownConfig, NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { map, shareReplay } from 'rxjs/operators';
import { RandomService } from '../random.service'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})

export class SideComponent {
  @ViewChildren(NgbDropdown)
  dropdowns: QueryList<NgbDropdown>;
  dropdown: NgbDropdown;



  ngOnInit(): void {
    $('.pmv').hide()
    $('.ultimate').hide()
  }

  constructor(private breakpointObserver: BreakpointObserver, config: NgbDropdownConfig, private randomService: RandomService, private modalService : NgbModal) {
    config.placement = 'right';
    config.autoClose = true;
    this.meleeCharCount = randomService.getMeleeCharCount();
    this.ultimateCharCount = randomService.getUltimateCharCount();
    this.pmCharCount = randomService.getPMcharCount();
    this.currentCharCount = this.meleeCharCount[this.meleeCharCount.length - 1];
    this.playerCount = randomService.getPlayerCount("melee")
    var temp = window.location.href.replace(/\//g ,"")
    this.roomCode =  temp.slice(temp.length - 5, temp.length) //gets rid of the slashes and gets last 5 chars    
    $(document).click(function (event) {
      if ($(event.target).attr('class') != undefined && !$(event.target).attr('class').includes('dropdown-toggle')) { //clicked on something other than a dropdown (or other things that shouldnt close dropdowns)
        $('.charCount').each(function () {
          $(this).css('height', '1%')
        })
      }
    });
  }
  /*
  plans/todo
  
  mark some IP as the host
  room options checkbox should be disabled for all but host
  if page is locked to others, make it so if your IP isn't the hosts, any clicks on the page do nothing / return before the click "goes thru" (document.on()...)
  add a better welcome popup
  possibly a tour
  make rows more than 1 char when shrinking page
  

  */
  inputVal = ""
  roomCode = "";
  currentCharCount;
  meleeCharCount;
  ultimateCharCount;
  pmCharCount;
  playerCount;
  currentPlayerCount = 2;
  dropdownOpen = false;
  currentView = "melee"
  closeResult = '';

/**
  Checks room code entered if its 5 chars long, if theres an active sesh, join it, if not give err
 */
joinRoomCode(){
  this.inputVal = "asdf"
console.log(this.inputVal)
}
/**
 * came with the modal example that i yoinked, keeping it all here
 * @param content :shrug:
 */
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
/**
 * * came with the modal example that i yoinked, keeping it all here
 * @param reason :shrug:
 */
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }



  /**
   * Checks if a dropdown is opened, and adjusts that div height accordingly
   * @param dropdown pass #dropX
   */
  checkDropDown(dropdown: any) {
    this.dropdown = this.dropdowns.find(x => (x as any)._elementRef.nativeElement == dropdown)
    if (this.dropdown.isOpen()) {
      $('.charCount').each(function (index) {
        $(this).css('height', '91%')
      })
    }
    else {
      $('.charCount').each(function (index) {
        $(this).css('height', '1%')
      })
    }
  }

  /**
   * sets current character count
   * @param count What to set character count to
   */
  setCharacterCount(count: number) {
    this.currentCharCount = count
  }
  /**
   * sets current player count
   * @param count What to set player count to
   */
  setPlayerCount(count: number) {
    this.currentPlayerCount = count
  }
  /**
   * switches the main content to whatever they clicked, and adjusts variables accordingly
   * @param view what to switch to
   */
  transition(view: string) {
    $('.' + this.currentView).hide(); //hide old page
    console.log('hiding: ', this.currentView)
    $('.' + view).show(); //display new viewed page
    console.log("showing: ", view)
    this.currentView = view;//set active page reference to new page name
    
 //  char count stuff
 
    if (this.currentView == "ultimate") {
      this.playerCount = this.randomService.getPlayerCount("ultimate")
      $('.meleeCharCount').css('visibility', 'hidden')
      $('.pmCharCount').css('visibility', 'hidden')
      $('.ultimateCharCount').css('visibility', 'visible')
      this.currentCharCount = this.ultimateCharCount[this.ultimateCharCount.length - 1];
    }
    if (this.currentView == "melee") {
      this.playerCount = this.randomService.getPlayerCount("melee")
      $('.pmCharCount').css('visibility', 'hidden')
      $('.ultimateCharCount').css('visibility', 'hidden')
      $('.meleeCharCount').css('visibility', 'visible')
      this.currentCharCount = this.meleeCharCount[this.meleeCharCount.length - 1];

    }
    if (this.currentView == "pmv") {
      this.playerCount = this.randomService.getPlayerCount("pm")
      $('.meleeCharCount').css('visibility', 'hidden')
      $('.ultimateCharCount').css('visibility', 'hidden')
      $('.pmCharCount').css('visibility', 'visible')
      this.currentCharCount = this.pmCharCount[this.pmCharCount.length - 1];
    }

  }














  //came with sidebar stuff for if on mobile
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

}
