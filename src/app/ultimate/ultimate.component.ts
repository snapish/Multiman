import { Component, OnInit } from '@angular/core';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-ultimate',
  templateUrl: './ultimate.component.html',
  styleUrls: ['./ultimate.component.css']
})
export class UltimateComponent implements OnInit {
  charnums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80];
  firstRoll = false;
  playernums = [1, 2, 3, 4,5,6,7,8]
  checked: boolean = false;
  playerAShowCount: number;
  playerBShowCount: number;
  playerCShowCount: number;
  playerDShowCount: number;
  playerEShowCount: number;
  playerFShowCount: number;
  playerGShowCount: number;
  playerHShowCount: number;
  ultimateChars= []
  state = {
    playerAChars: [],
    playerBChars: [],
    playerCChars: [],
    playerDChars: [],
    playerEChars: [],
    playerFChars: [],
    playerGChars: [],
    playerHChars: [],
    playerCount: 2,
    charCount: 4,
    playerAShowCount: this.playerAShowCount,
    playerBShowCount: this.playerBShowCount,
    playerCShowCount: this.playerCShowCount,
    playerDShowCount: this.playerDShowCount,
    playerEShowCount: this.playerEShowCount,
    playerFShowCount: this.playerFShowCount,
    playerGShowCount: this.playerGShowCount,
    playerHShowCount: this.playerHShowCount,
    disabledChars: [],
    checked: this.checked,
    overCharCount: false,
    dlcDisabled: false
  }
  constructor(private randomService: RandomService) {
    this.ultimateChars = this.randomService.getUltimateChars();
   }

  ngOnInit() {
    this.addUnique(this.state.disabledChars, 26);
    
  }
  onOptionsSelected(event) {
    this.state.charCount = event;
  }
  random() {
    var min = 0;
    var max = 79;
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  
  exclusiveRandom(exclusions) { // exclusions is an array of numbers which we don't want
    // we would have an infinite loop if exclusions contained all the numbers between 0 - 26
    // because we'd never find a satisfying random number.
    if (exclusions.length >= 27) throw Error('WARNING: avoiding infinite loop')
    let result
    do {
      result = this.random()
    } while (!exclusions.includes(result))
    return result
  }

  addUnique(array, number) { // adds the number to array if not already there
    if (!array.includes(number)) array.push(number)
  }
  
  randomFill() {

    this.firstRoll = true;
    this.state.charCount = ((document.getElementById("charCount")) as HTMLSelectElement).selectedIndex + 1; //set char count
    this.state.playerCount = ((document.getElementById("playerCount")) as HTMLSelectElement).selectedIndex + 1; //set the player count
    this.state.playerAChars = [];
    this.state.playerBChars = []; //clear they shits
    this.state.playerCChars = [];
    this.state.playerDChars = [];
    this.state.playerEChars = [];
    this.state.playerFChars = [];
    this.state.playerGChars = [];
    this.state.playerHChars = [];
    this.state.overCharCount = false;

    if (this.ultimateChars.length - this.state.disabledChars.length + 1 > this.state.charCount) { // if the whitelisted char count is under the allowed count. Rewording: if disabled chars is over char count
      while (this.state.playerAChars.length < this.state.charCount) { // while the set is not filled
        var n = this.random();
        this.shuffle(this.ultimateChars);
        for (let l of this.ultimateChars) {
          if (l.id == n && !this.state.disabledChars.includes(l.id)) {
            this.addUnique(this.state.playerAChars, l);
          
          }
        }
      }

      if (this.state.playerCount >= 2) {
        while (this.state.playerBChars.length < this.state.charCount) {
          var n = this.random();
          this.shuffle(this.meleeChars);
          for (let l of this.meleeChars) {
            if (l.id == n && !this.state.disabledChars.includes(l.id)) {
              this.addUnique(this.state.playerBChars, l);
            }
          }
        }
      }

      if (this.state.playerCount >= 3) {
        while (this.state.playerCChars.length < this.state.charCount) {
          var n = this.random();
          this.shuffle(this.meleeChars);
          for (let l of this.meleeChars) {
            if (l.id == n && !this.state.disabledChars.includes(l.id)) {
              this.addUnique(this.state.playerCChars, l);
            }
          }
        }
      }
      if (this.state.playerCount == 4) {
        while (this.state.playerDChars.length < this.state.charCount) {
          var n = this.random();
          this.shuffle(this.meleeChars);
          for (let l of this.meleeChars) {
            if (l.id == n && !this.state.disabledChars.includes(l.id)) {
              this.addUnique(this.state.playerDChars, l);
            }
          }
        }
      }
      if (!this.state.checked) {
        this.state.playerAShowCount = 80;
        this.state.playerBShowCount = 80;
        this.state.playerCShowCount = 80;
        this.state.playerDShowCount = 80;
        this.state.playerEShowCount = 80;
        this.state.playerFShowCount = 80;
        this.state.playerGShowCount = 80;
        this.state.playerHShowCount = 80;
      }
      else {
        this.state.playerAShowCount = 0;
        this.state.playerBShowCount = 0;
        this.state.playerCShowCount = 0;
        this.state.playerDShowCount = 0;
        this.state.playerEShowCount = 0;
        this.state.playerFShowCount = 0;
        this.state.playerGShowCount = 0;
        this.state.playerHShowCount = 0;
      }
    }
    else {      
      //set the char count to the maximum and roll again
      this.state.charCount = 27 - this.state.disabledChars.length
      $('#charCount').val(this.state.charCount)
      this.randomFill()
 }
  }
}
