import { Component, OnInit, ApplicationRef } from '@angular/core';
import { RandomService } from '../random.service';
import { SideComponent } from '../side/side.component';
declare var $: any;
declare var ON_STATE_CHANGED: any;
declare var PUSH_STATE: any;
@Component({
  selector: 'app-projectm',
  templateUrl: './projectm.component.html',
  styleUrls: ['./projectm.component.css']
})
export class ProjectmComponent implements OnInit {
  pmChars = []
  Opacity = "0.5";
  firstRoll = false;
  playerCount;
  charCount;
  public isCollapsed = true;
  checked: boolean = false;
  playerAShowCount: number;
  playerBShowCount: number;
  playerCShowCount: number;
  playerDShowCount: number;
  charnums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41]
  playernums = [1, 2, 3, 4]
  state = {
    version: "p",
    playerAChars: [],
    playerBChars: [],
    playerCChars: [],
    playerDChars: [],
    playerCount: 2,
    charCount: 4,
    playerAShowCount: this.playerAShowCount,
    playerBShowCount: this.playerBShowCount,
    playerCShowCount: this.playerCShowCount,
    playerDShowCount: this.playerDShowCount,
    disabledChars: [],
    checked: this.checked,
    overCharCount: false
  }
  constructor(private randomService: RandomService, private changeRef: ApplicationRef, private side: SideComponent) {
    this.pmChars = this.randomService.getPMChars();

    ON_STATE_CHANGED = (state) => this.updateState(state)
  }

  ngOnInit() {
    //when switched to tab, disable free space. Also should do this on melee tab :\
  
  }
  pushState() {
    try {
      PUSH_STATE(this.state)
    }
    catch{
      console.log("uh oh stinky")
    }
  }
  updateState(newState) {
    console.log("old state: ", this.state.disabledChars);
    
    console.log('got new state: ', newState.disabledChars)
    this.firstRoll = true;
    this.state.playerAChars = newState.playerAChars;
    this.state.playerBChars = newState.playerBChars;
    this.state.playerCChars = newState.playerCChars;
    this.state.playerDChars = newState.playerDChars;
    this.state.checked = newState.checked;
    this.state.disabledChars = newState.disabledChars;
    this.state.playerAShowCount = newState.playerAShowCount;
    this.state.playerBShowCount = newState.playerBShowCount;
    this.state.playerCShowCount = newState.playerCShowCount;
    this.state.playerDShowCount = newState.playerDShowCount;
    this.state.overCharCount = newState.overCharCount;
    this.state.charCount = newState.charCount;
    this.state.playerCount = newState.playerCount;
    this.updateOpacity()
    this.changeRef.tick();
    console.log(this.changeRef.tick())
    //repaint broswer
  }
  updateOpacity() {
    for (let i of this.state.disabledChars) {
      for (let v of this.pmChars) {
        if (v.id == i && document.getElementById(v.name).style.opacity != ".3") {
          document.getElementById(v.name).style.opacity = ".3";
        }
      }
    }
    for (let p of this.pmChars) {
      if (!this.state.disabledChars.includes(p.id)) {
        document.getElementById(p.name).style.opacity = "1";
      }
    }
  }
  exclusiveRandom(exclusions) { // exclusions is an array of numbers which we don't want
    // we would have an infinite loop if exclusions contained all the numbers between 0 - 42
    // because we'd never find a satisfying random number.
    if (exclusions.length >= 42) throw Error('WARNING: avoiding infinite loop')
    let result
    do {
      result = this.random()
    } while (!exclusions.includes(result))
    return result
  }

  addUnique(array, number) { // adds the number to array if not already there
    if (!array.includes(number)) array.push(number)
  }
  random() {
    var min = 1;
    var max = 43;
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  toggleChar(charName: string) {
    for (let x of this.pmChars) {
      if (charName == x.name) {
        if (!this.state.disabledChars.includes(x.id)) { 
          this.state.disabledChars.push(x.id);
          document.getElementById(x.name).style.opacity = "0.3";
          this.side.setCharacterCount(this.side.currentCharCount - 1)

        }
        else {
          document.getElementById(x.name).style.opacity = "1";
          this.side.setCharacterCount(this.side.currentCharCount + 1)

          this.state.disabledChars = this.removeFromArray(this.state.disabledChars, x.id);
        }
      }
    }
    console.log(this.state.disabledChars)
    this.pushState()
  }
  removeFromArray(arr: Array<number>, num:number) {
    var newArr = arr.filter(element => element != num)
    return newArr

  }
  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  showToggle(){
    if(!this.state.checked){
      this.state.playerAShowCount= 50;
      this.state.playerBShowCount=50;
      this.state.playerCShowCount= 50;
      this.state.playerDShowCount= 50;
    }
    this.pushState()
  }
  randomFill() {
    this.state.charCount = this.side.currentCharCount
    this.state.playerCount = this.side.currentPlayerCount
    this.state.playerAChars = this.randomService.randomizePM(this.state.disabledChars)
    this.state.playerBChars = this.randomService.randomizePM(this.state.disabledChars)
    this.state.playerCChars = this.randomService.randomizePM(this.state.disabledChars)
    this.state.playerDChars = this.randomService.randomizePM(this.state.disabledChars)  

    }
}


