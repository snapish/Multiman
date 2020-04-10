import { Component, OnInit, ApplicationRef } from '@angular/core';
import { RandomService } from '../random.service';
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
  charnums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,42]
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
  constructor(private randomService: RandomService, private changeRef: ApplicationRef) {
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
    console.log('got new state: ', newState)
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
    // we would have an infinite loop if exclusions contained all the numbers between 0 - 43
    // because we'd never find a satisfying random number.
    if (exclusions.length >= 43) throw Error('WARNING: avoiding infinite loop')
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
        }
        else {
          console.log(x.name)
          document.getElementById(x.name).style.opacity = "1";
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
    console.log(this.state.disabledChars)
    this.pushState()
      this.firstRoll = true;
      this.state.charCount = ((document.getElementById("charCount")) as HTMLSelectElement).selectedIndex + 1; //set char count
      this.state.playerCount = ((document.getElementById("playerCount")) as HTMLSelectElement).selectedIndex + 1; //set the player count
      this.state.playerAChars = [];
      this.state.playerBChars = []; //clear they shits
      this.state.playerCChars = [];
      this.state.playerDChars = [];
      this.state.overCharCount = false;
  
      if (this.pmChars.length - this.state.disabledChars.length + 1 > this.state.charCount) { // if the whitelisted char count is under the allowed count. Rewording: if disabled chars is over char count
        while (this.state.playerAChars.length < this.state.charCount) { // while the set is not filled
          var n = this.random();
          this.shuffle(this.pmChars);
          for (let l of this.pmChars) {
            if (l.id == n && !this.state.disabledChars.includes(l.id)) {
              this.addUnique(this.state.playerAChars, l);
            }
          }
        }
        console.log(this.state.playerAChars)
        if (this.state.playerCount >= 2) {
          while (this.state.playerBChars.length < this.state.charCount) {
            var n = this.random();
            this.shuffle(this.pmChars);
            for (let l of this.pmChars) {
              if (l.id == n && !this.state.disabledChars.includes(l.id)) {
                this.addUnique(this.state.playerBChars, l);
              }
            }
          }
        }
  
        if (this.state.playerCount >= 3) {
          while (this.state.playerCChars.length < this.state.charCount) {
            var n = this.random();
            this.shuffle(this.pmChars);
            for (let l of this.pmChars) {
              if (l.id == n && !this.state.disabledChars.includes(l.id)) {
                this.addUnique(this.state.playerCChars, l);
              }
            }
          }
        }
        if (this.state.playerCount == 4) {
          while (this.state.playerDChars.length < this.state.charCount) {
            var n = this.random();
            this.shuffle(this.pmChars);
            for (let l of this.pmChars) {
              if (l.id == n && !this.state.disabledChars.includes(l.id)) {
                this.addUnique(this.state.playerDChars, l);
              }
            }
          }
        }
        if (!this.state.checked) {
          this.state.playerAShowCount = 50;
          this.state.playerBShowCount = 50;
          this.state.playerCShowCount = 50;
          this.state.playerDShowCount = 50;
        }
        else {
          this.state.playerAShowCount = 0;
          this.state.playerBShowCount = 0;
          this.state.playerCShowCount = 0;
          this.state.playerDShowCount = 0;
        }
 
      }
      else {
        //set the char count to the maximum and roll again
        this.state.charCount = 42 - this.state.disabledChars.length
        $('#charCount').val(this.state.charCount)
        this.randomFill()
        //this.state.overCharCount = true;
      }
      this.pushState()
    }
    updateAvailableChars(){
      $('#charcount')
      if(42- this.state.disabledChars.length < this.state.charCount){
        console.log($('#charcount').val())
      }
      this.pushState()
    }
    advancePlayer(player: string){
      switch (player) {
        case 'A':
            if (this.state.playerAShowCount < this.state.playerAChars.length) {
              this.state.playerAShowCount += 1;
            }
          break;
        case 'B':
            if (this.state.playerBShowCount < this.state.playerBChars.length) {
              this.state.playerBShowCount += 1;
            }
          break;
        case 'C':
            if (this.state.playerCShowCount < this.state.playerCChars.length) {
              this.state.playerCShowCount += 1;
            }
          break;
        case 'D':
            if (this.state.playerDShowCount < this.state.playerDChars.length) {
              this.state.playerDShowCount += 1;
            }
          break;
      }
      this.pushState()
    }
}


