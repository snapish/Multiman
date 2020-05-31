import { Component, OnInit, ChangeDetectorRef, ApplicationRef } from '@angular/core';
import { RandomService } from '../random.service';
import { SideComponent } from '../side/side.component';
import { StateService } from '../state.service';
declare var $: any;
declare var PUSH_STATE: any;
@Component({
  selector: 'app-ultimate',
  templateUrl: './ultimate.component.html',
  styleUrls: ['./ultimate.component.css']
})
export class UltimateComponent implements OnInit {
  charnums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78];

  playernums = [1, 2, 3, 4,5,6,7,8]

  ultimateChars= []
  state = {
    game:"ultimate",
    all:{
      charCount: 4,
      playerCount: 2,
    },
    ultimate:{
      playerAChars: [],
      playerBChars: [],
      playerCChars: [],
      playerDChars: [],
      playerEChars: [],
      playerFChars: [],
      playerGChars: [],
      playerHChars: [],
      disabledChars: [],
      dlcDisabled: false
    },
  }
  constructor(private randomService: RandomService, private side: SideComponent, private stateService : StateService, private changeRef: ApplicationRef) {
    this.ultimateChars = this.randomService.getUltimateChars();
    // console.log(this.ultimateChars)
   }

  ngOnInit() {
    //update state here
    this.stateService.updateState(this.state)

  }
  pushState(){
    try{PUSH_STATE(this.state)}
    catch{console.log("uh oh stinky")}
  }
  onOptionsSelected(event) {
    this.state.all.charCount = event;
    this.stateService.updateState(this.state)
    //update state here
  }
  random() {
    var min = 27;
    var max = 106; //char ids are fucked
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  removeFromArray(arr: Array<number>, num:number) {
    var newArr = arr.filter(element => element != num)
    return newArr

  }
  toggleDLC(){
    
    if(this.state.ultimate.dlcDisabled){
     
          if(!this.state.ultimate.disabledChars.includes(101)){
            this.toggleChar("Piranha Plant")
          }
          if(!this.state.ultimate.disabledChars.includes(102)){
            this.toggleChar("Joker")
          }
          if(!this.state.ultimate.disabledChars.includes(103)){
            this.toggleChar("Banjo")
          }
          if(!this.state.ultimate.disabledChars.includes(104)){
            this.toggleChar("Hero")
          }
          if(!this.state.ultimate.disabledChars.includes(105)){
            this.toggleChar("Terry")
          }
          if(!this.state.ultimate.disabledChars.includes(106)){
            this.toggleChar("Byleth")
          }
          //update state here
        }
    else{
      if(this.state.ultimate.disabledChars.includes(101)){
        this.toggleChar("Piranha Plant")
      }
      if(this.state.ultimate.disabledChars.includes(102)){
        this.toggleChar("Joker")
      }
      if(this.state.ultimate.disabledChars.includes(103)){
        this.toggleChar("Banjo")
      }
      if(this.state.ultimate.disabledChars.includes(104)){
        this.toggleChar("Hero")
      }
      if(this.state.ultimate.disabledChars.includes(105)){
        this.toggleChar("Terry")
      }
      if(this.state.ultimate.disabledChars.includes(106)){
        this.toggleChar("Byleth")
      }
      
    }
    this.stateService.updateState(this.state)

  }
  toggleChar(charName: string) {
    for (let x of this.ultimateChars) {
      if (charName == x.name) { // run thru ult chars until it hits the one passed
        if (!this.state.ultimate.disabledChars.includes(x.id)) { //if the character passed is not disabled yet
          this.state.ultimate.disabledChars.push(x.id);
          if (this.ultimateChars.length - this.state.ultimate.disabledChars.length  < this.side.state.all.currentCharCount ){
            this.side.setCharacterCount(this.side.state.all.currentCharCount - 1)
           }

          document.getElementById(x.name).style.opacity = "0.3";
        }
        else {    
          document.getElementById(x.name).style.opacity = "1";
          this.state.ultimate.disabledChars = this.removeFromArray(this.state.ultimate.disabledChars, x.id);
        }
      }
    }
    this.stateService.updateState(this.state)

  }


  exclusiveRandom(exclusions) { // exclusions is an array of numbers which we don't want
    // we would have an infinite loop if exclusions contained all the numbers between 0 - 26
    // because we'd never find a satisfying random number.
    if (exclusions.length >= 78) throw Error('WARNING: avoiding infinite loop')
    let result
    do {
      result = this.random()
    } while (!exclusions.includes(result))
    return result
  }

  addUnique(array, number) { // adds the number to array if not already there
    if (!array.includes(number)) array.push(number)
  }
  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

    /**
   * Takes a new state and updates the state object to match the given one
   * @param newState New state to set to the "current" state
   */
  updateState(newState) {
    console.log("got new state: ", newState);
    this.state.ultimate.playerAChars = newState.playerAChars;
    this.state.ultimate.playerBChars = newState.playerBChars;
    this.state.ultimate.playerCChars = newState.playerCChars;
    this.state.ultimate.playerDChars = newState.playerDChars;
    this.state.ultimate.disabledChars = newState.disabledChars;
    this.state.all.charCount = newState.charCount;    
    this.state.all.playerCount = newState.playerCount;
    this.updateOpacity();
    this.changeRef.tick();
    //repaint broswer
  }
  /**
   * Brute forces updates on what the opacity of a character should be.
   */
  updateOpacity() {
    for (let i of this.state.ultimate.disabledChars) {
      for (let v of this.ultimateChars) {
        if (
          v.id == i &&
          document.getElementById(v.name).style.opacity != ".3"
        ) {
          document.getElementById(v.name).style.opacity = ".3";
        }
      }
    }
    for (let p of this.ultimateChars) {
      if (!this.state.ultimate.disabledChars.includes(p.id)) {
        document.getElementById(p.name).style.opacity = "1";
      }
    }
  }
    randomFill() {
      this.state.all.charCount = this.side.state.all.currentCharCount
      this.state.all.playerCount = this.side.state.all.currentPlayerCount
      this.state.ultimate.playerAChars = this.randomService.randomizeUltimate(this.state.ultimate.disabledChars)
      this.state.ultimate.playerBChars = this.randomService.randomizeUltimate(this.state.ultimate.disabledChars)
      this.state.ultimate.playerCChars = this.randomService.randomizeUltimate(this.state.ultimate.disabledChars)
      this.state.ultimate.playerDChars = this.randomService.randomizeUltimate(this.state.ultimate.disabledChars)  
      this.state.ultimate.playerEChars = this.randomService.randomizeUltimate(this.state.ultimate.disabledChars)  
      this.state.ultimate.playerFChars = this.randomService.randomizeUltimate(this.state.ultimate.disabledChars)  
      this.state.ultimate.playerGChars = this.randomService.randomizeUltimate(this.state.ultimate.disabledChars)  
      this.state.ultimate.playerHChars = this.randomService.randomizeUltimate(this.state.ultimate.disabledChars)  
      this.stateService.updateState(this.state)
    }

}
