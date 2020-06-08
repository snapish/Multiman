import { Component, ChangeDetectorRef, ViewChild, ViewChildren, QueryList, ApplicationRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { NgbModule, NgbDropdownConfig, NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { map, shareReplay } from 'rxjs/operators';
import { RandomService } from '../random.service'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { StateService } from '../state.service';
import {ClipboardModule} from '@angular/cdk/clipboard';


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
//all variables not in the state are not to be shared between people in a room
currentView ="melee"
inputVal = ""
roomCode = "";
meleeCharCount;
ultimateCharCount;
pmCharCount;
dropdownOpen = false;
closeResult = '';
noRoomFound = true
clipboardFailure = false
  constructor(private breakpointObserver: BreakpointObserver, config: NgbDropdownConfig, private randomService: RandomService, private modalService : NgbModal, public stateService: StateService, private appRef : ApplicationRef) {
        config.placement = 'right';
    config.autoClose = true;
    this.meleeCharCount = randomService.getMeleeCharCount();
    this.ultimateCharCount = randomService.getUltimateCharCount();
    this.pmCharCount = randomService.getPMcharCount();
    //this.stateService.state.all.currentCharCount = this.meleeCharCount[this.meleeCharCount.length - 1];
    this.stateService.state.all.playerCount = randomService.getPlayerCount("melee")
    var temp = window.location.href.replace(/\//g ,"")
    this.roomCode =  temp.slice(temp.length - 5, temp.length) //gets rid of the slashes and gets last 5 chars    
    $(document).click(function (event) {
      if ($(event.target).attr('class') != undefined && !$(event.target).attr('class').includes('dropdown-toggle')) { //clicked on something other than a dropdown (or other things that shouldnt close dropdowns)
        $('.charCount').each(function () {
          $(this).css('height', '1%')
        })
      }
    });  }
  /*
  plans/todo
   
  mark some IP as the host
  get a list of current session IDS for joining room code
  get https to auto redirect in server and not in index.html
  when someone connects, update component states from state service
  
  room options checkbox should be disabled for all but host
  if page is locked to others, make it so if your IP isn't the hosts, any clicks on the page do nothing / return before the click "goes thru" (document.on()...)
  add a better welcome popup
      -possibly a tour
  add battleship, 8x8 grid
  get state service in full schwing
  
  ---DONE---
  put everything into one state variable
  fixed closing of sidenav
  new color theme 
  have ult pull char/player counts from side comp
  have pm pull char/player counts from side comp
  get rid of hide upcoming
  have melee pull char/player counts from side comp
  make randomservice return random sets of chars, given the disabled chars
  */

  
/**
  Checks room code entered if its 5 chars long, if theres an active sesh, join it, if not give err
 */
joinRoomCode(){
    fetch('/sessions')
      .then(response => {
        var directed = false;
        this.noRoomFound = true
        response.json().then(ids => {
          if(this.inputVal.length >= 5 && ids.includes(this.inputVal)){ //if 5 chars...//if the url of the room includes the code they typed
                document.location.replace(window.location.protocol + "//" + window.location.host + '?session=' + this.inputVal) //redirect
                directed = true
          }
        })
        if(!directed && this.inputVal.length >= 5){
          this.noRoomFound = false; //for if they remove the text in the box after not finding a room, itll hide the message again 
          console.log("a")
        }
      })
      .catch(err => {
      
    }) 
 
  
}

joinRoomWithCode(code){
  fetch('/sessions')
      .then(response => {
        response.json().then(ids => {
          var directed = false;
          if(this.inputVal.length >= 5 && ids.includes(code)){ //if 5 chars...//if the url of the room includes the code they typed
                document.location.replace(window.location.protocol + "//" + window.location.host + '?session=' + code) //redirect
                directed = true
          }
        })
      })
      .catch(err => this.noRoomFound = true) //for if they remove the text in the box after not finding a room, itll hide the message again 
}
getRoomCode(){
  return this.roomCode
}
/**
 * gets clipboard text, if it's good, call joinRoomCode()
 * if its bad say clipboard thing was bad
 */
joinClipboard(){  
  navigator.clipboard.readText().then(text =>{
    this.inputVal = text
    this.joinRoomCode()
  }).catch(err =>{
    this.clipboardFailure = true
  })
}
/**
 * came with the modal example that i yoinked, keeping it all here
 * @param content :shrug:
 */
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.clipboardFailure = false
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
  setMeleeCharacterCount(count: number) {
    this.stateService.state.all.meleeCharCount = count
  }
  setPMCharacterCount(count: number){
    this.stateService.state.all.ultimateCharCount = count
  }
  setUltimateCharacterCount(count: number){
    this.stateService.state.all.pmCharCount = count
  }
  /**
   * sets current player count
   * @param count What to set player count to
   */
  setPlayerCount(count: number) {
    this.stateService.state.all.currentPlayerCount = count
  }
  /**
   * switches the main content to whatever they clicked, and adjusts variables accordingly
   * @param view what to switch to
   */
  transition(view: string) {
    $('.' + this.currentView).hide(); //hide old page
    $('.' + view).show(); //display new viewed page
    this.currentView = view;//set active page reference to new page name
    
 //  char count stuff
 
    if (this.currentView == "ultimate") {
      this.stateService.state.all.playerCount = this.randomService.getPlayerCount("ultimate")

      $('.meleeCharCount').css('visibility', 'hidden')
      $('.pmCharCount').css('visibility', 'hidden')
      $('.ultimateCharCount').css('visibility', 'visible')
     // this.stateService.state.all.currentCharCount = this.ultimateCharCount[this.ultimateCharCount.length - 1];
    }
    if (this.currentView == "melee") {
      this.stateService.state.all.playerCount = this.randomService.getPlayerCount("melee")
      $('.pmCharCount').css('visibility', 'hidden')
      $('.ultimateCharCount').css('visibility', 'hidden')
      $('.meleeCharCount').css('visibility', 'visible')
      //this.stateService.state.all.currentCharCount = this.meleeCharCount[this.meleeCharCount.length - 1];

    }
    if (this.currentView == "pmv") {
      this.stateService.state.all.playerCount = this.randomService.getPlayerCount("pm")
      $('.meleeCharCount').css('visibility', 'hidden')
      $('.ultimateCharCount').css('visibility', 'hidden')
      $('.pmCharCount').css('visibility', 'visible')
    //  this.stateService.state.all.currentCharCount = this.pmCharCount[this.pmCharCount.length - 1];
    }
    //console.log(this.stateService.state)
  }














  //came with sidebar stuff for if on mobile
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

}
