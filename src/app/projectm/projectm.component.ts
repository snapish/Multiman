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
  charnums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41]
  playernums = [1, 2, 3, 4]
  state = {
    game:"projectm",
    all:{
      playerCount: 2,
      charCount: 4,
    },
    projectm:{
      playerAChars: [],
      playerBChars: [],
      playerCChars: [],
      playerDChars: [],
      disabledChars: [],
    }


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
    this.state.projectm.playerAChars = newState.playerAChars;
    this.state.projectm.playerBChars = newState.playerBChars;
    this.state.projectm.playerCChars = newState.playerCChars;
    this.state.projectm.playerDChars = newState.playerDChars;
    this.state.projectm.disabledChars = newState.disabledChars;
    this.state.all.charCount = newState.charCount;
    this.state.all.playerCount = newState.playerCount;
    this.updateOpacity()
    this.changeRef.tick();
    console.log(this.changeRef.tick())
    //repaint broswer
  }
  updateOpacity() {
    for (let i of this.state.projectm.disabledChars) {
      for (let v of this.pmChars) {
        if (v.id == i && document.getElementById(v.name).style.opacity != ".3") {
          document.getElementById(v.name).style.opacity = ".3";
        }
      }
    }
    for (let p of this.pmChars) {
      if (!this.state.projectm.disabledChars.includes(p.id)) {
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
        if (!this.state.projectm.disabledChars.includes(x.id)) { 
          this.state.projectm.disabledChars.push(x.id);
          document.getElementById(x.name).style.opacity = "0.3";
          this.side.setCharacterCount(this.side.currentCharCount - 1)

        }
        else {
          document.getElementById(x.name).style.opacity = "1";
          this.side.setCharacterCount(this.side.currentCharCount + 1)

          this.state.projectm.disabledChars = this.removeFromArray(this.state.projectm.disabledChars, x.id);
        }
      }
    }
    console.log(this.state.projectm.disabledChars)
    this.pushState()
  }
  removeFromArray(arr: Array<number>, num:number) {
    var newArr = arr.filter(element => element != num)
    return newArr

  }
  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  randomFill() {
    this.state.all.charCount = this.side.currentCharCount
    this.state.all.playerCount = this.side.currentPlayerCount
    this.state.projectm.playerAChars = this.randomService.randomizePM(this.state.projectm.disabledChars)
    this.state.projectm.playerBChars = this.randomService.randomizePM(this.state.projectm.disabledChars)
    this.state.projectm.playerCChars = this.randomService.randomizePM(this.state.projectm.disabledChars)
    this.state.projectm.playerDChars = this.randomService.randomizePM(this.state.projectm.disabledChars)  

    }
}


