import {
  Component,
  OnInit,
  ViewChild,
  ChangeDetectorRef,
  ApplicationRef
} from "@angular/core";
import { RandomService } from "../random.service";
import { HttpClient } from "@angular/common/http";
import { MatCheckbox } from "@angular/material/checkbox";
declare var $: any;
declare var ON_STATE_CHANGED: any;
declare var PUSH_STATE: any;

@Component({
  selector: "app-melee",
  templateUrl: "./melee.component.html",
  styleUrls: ["./melee.component.css"]
})
export class MeleeComponent implements OnInit {
  
  meleeChars = []; //loaded later from randomservice
  firstRoll = false; 
  playerCount;
  charCount;
  hideUpcoming: boolean = false;
  playerAShowCount: number;
  playerBShowCount: number;
  playerCShowCount: number;
  playerDShowCount: number;
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

  playernums = [1, 2, 3, 4]; //number of total possible players
  state = { //state object start
    version: "m", //for saying what game the state is from, m = melee
    playerAChars: [],
    playerBChars: [],
    playerCChars: [],
    playerDChars: [],
    playerCount: 2, //default player count
    charCount: 26, //defualt char count
    playerAShowCount: this.playerAShowCount,
    playerBShowCount: this.playerBShowCount,
    playerCShowCount: this.playerCShowCount,
    playerDShowCount: this.playerDShowCount,
    disabledChars: [], 
    hideUpcoming: this.hideUpcoming, 
    overCharCount: false
  };

  constructor(private randomService: RandomService, private changeRef: ApplicationRef) {
    this.meleeChars = this.randomService.getMeleeChars(); 
    ON_STATE_CHANGED = state => this.updateState(state);
  }
  ngOnInit() {
  }
/**
 * Tries to run the PUSH_STATE function, console logs if it fails
 */
  pushState() {
    try {
      PUSH_STATE(this.state);
    } catch {
      console.log("Failed to push state");
    }
  }

  /**
   * Sets the state objects character count
   * @param event The number to set the states charCount to
   */
  onOptionsSelected(event) {
    this.state.charCount = event;
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Gets a random number between 0 and 26, with exclusions
   * @param exclusions An array of numbers you don't want
   */
  exclusiveRandom(exclusions) {
    // we would have an infinite loop if exclusions contained all the numbers between 0 - 26
    if (exclusions.length >= 26) throw Error("WARNING: avoiding infinite loop");
    let result;
    do {
      result = this.random(); 
    } while (!exclusions.includes(result));
    return result;
  }

  /**
   * Adds a number to an array if the number isn't already in the array
   * @param array the array to add the number to
   * @param number number you want to add
   */
  addUnique(array, number) {
    // adds the number to array if not already there
    if (!array.includes(number)) array.push(number);
  }

  /**
   * Fills players arrays with characters
   * Only fills as many players as selected
   */
  randomFill() {
    this.pushState(); //update the state real quick
    this.firstRoll = true; 
    this.state.charCount = (document.getElementById("charCount") as HTMLSelectElement).selectedIndex + 1; //set char count
    this.state.playerCount = (document.getElementById("playerCount") as HTMLSelectElement).selectedIndex + 1; //set the player count
    this.state.playerAChars = [];
    this.state.playerBChars = []; //clear they shits
    this.state.playerCChars = [];
    this.state.playerDChars = [];
    this.state.overCharCount = false;

    if (this.meleeChars.length - this.state.disabledChars.length + 1 > this.state.charCount ) {
      // if the whitelisted char count is under the allowed count. Rewording: if disabled chars is over char count
      while (this.state.playerAChars.length < this.state.charCount) {
        // while the set is not filled
        var n = this.random();
        console.log(n)
        this.shuffle(this.meleeChars); //randomize the organized char list for this player
        for (let l of this.meleeChars) { 
          console.log(l.id)
          if (l.id == n && !this.state.disabledChars.includes(l.id)) { // if the character id matches the random character, and it's not disable
            this.addUnique(this.state.playerAChars, l); //add the random char to the players characters, assuming its not already in there
          }
        }
      }
      //the same process for above is done over all the other players as well
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
      
      if (!this.state.hideUpcoming) {
        this.state.playerAShowCount = 30;
        this.state.playerBShowCount = 30;
        this.state.playerCShowCount = 30;
        this.state.playerDShowCount = 30;
      } else {
        this.state.playerAShowCount = 0;
        this.state.playerBShowCount = 0;
        this.state.playerCShowCount = 0;
        this.state.playerDShowCount = 0;
      }
      // console.log(this.state.playerAChars);
      // console.log(this.state.playerBChars);
    } else {
      //set the char count to the maximum and roll again
      this.state.charCount = 26 - this.state.disabledChars.length;
      $("#charCount").val(this.state.charCount);
      this.randomFill();

      //this.state.overCharCount = true;
    }
    this.pushState();
     
  }
  /**
   * Refreshes the available character count 
   */
  updateAvailableChars() {
    $("#charcount");
    if (26 - this.state.disabledChars.length < this.state.charCount) {
      console.log($("#charcount").val());
    }
    this.pushState();
     
  }
  /**
   * Adds 1 to a players show count
   * @param player A,B,C, or D
   */
  advancePlayer(player: string) {
    switch (player) {
      case "A":
        if (this.state.playerAShowCount < this.state.playerAChars.length) {
          this.state.playerAShowCount += 1;
        }
        break;
      case "B":
        if (this.state.playerBShowCount < this.state.playerBChars.length) {
          this.state.playerBShowCount += 1;
        }
        break;
      case "C":
        if (this.state.playerCShowCount < this.state.playerCChars.length) {
          this.state.playerCShowCount += 1;
        }
        break;
      case "D":
        if (this.state.playerDShowCount < this.state.playerDChars.length) {
          this.state.playerDShowCount += 1;
        }
        break;
    }
    this.pushState();
     
  }
  /**
   * Gives you a random number between 0 and 25
   */
  random() {
    var min = 0;
    var max = 26;
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  /**
   * Puts a character in the disabled chars array
   * If they're already in there, it removes it
   * After, it makes the opacity on the DOM lower to show its disabled
   * @param charName Name of the character to disable, must match the name in randomService
   */
  toggleChar(charName: string) {
    for (let x of this.meleeChars) {
      if (charName == x.name) { //find the character in meleeChars
        if (!this.state.disabledChars.includes(x.id)) { //if its not in the disabled chars array
          this.state.disabledChars.push(x.id); //put it in 
          document.getElementById(x.name).style.opacity = "0.3";
        } else {
          document.getElementById(x.name).style.opacity = "1";
          this.state.disabledChars = this.removeFromArray(
            this.state.disabledChars,
            x.id
          );
        }
      }
    }
    this.pushState();
     
  }
  /**
   * Removes a number from an array and returns it
   * @param arr array to remove from
   * @param num the number to remove
   */
  removeFromArray(arr: Array<number>, num: number) {
    var newArr = arr.filter(element => element != num);
    return newArr;
  }
  /**
   * Shuffles an array
   * @param array array to shuffle
   */
  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  /**
   * Takes a new state and updates the state object to match the given one
   * @param newState New state to set to the "current" state
   */
  updateState(newState) {
    console.log("got new state: ", newState);
    this.firstRoll = true;
    this.state.playerAChars = newState.playerAChars;
    this.state.playerBChars = newState.playerBChars;
    this.state.playerCChars = newState.playerCChars;
    this.state.playerDChars = newState.playerDChars;
    this.state.hideUpcoming = newState.hideUpcoming;
    this.state.disabledChars = newState.disabledChars;
    this.state.playerAShowCount = newState.playerAShowCount;
    this.state.playerBShowCount = newState.playerBShowCount;
    this.state.playerCShowCount = newState.playerCShowCount;
    this.state.playerDShowCount = newState.playerDShowCount;
    this.state.overCharCount = newState.overCharCount;
    this.state.charCount = newState.charCount;
    this.state.playerCount = newState.playerCount;
    this.updateOpacity();
    this.changeRef.tick();
    console.log(this.changeRef.tick());
    //repaint broswer
  }
  /**
   * Brute forces updates on what the opacity of a character should be.
   */
  updateOpacity() {
    for (let i of this.state.disabledChars) {
      for (let v of this.meleeChars) {
        if (
          v.id == i &&
          document.getElementById(v.name).style.opacity != ".3"
        ) {
          document.getElementById(v.name).style.opacity = ".3";
        }
      }
    }
    for (let p of this.meleeChars) {
      if (!this.state.disabledChars.includes(p.id)) {
        document.getElementById(p.name).style.opacity = "1";
      }
    }
  }
  /**
   * Maxes out the number of players to show
   */
  showToggle() {
    if (!this.state.hideUpcoming) {
      this.state.playerAShowCount = 30; //could be 26 but i couldnt remember what number it was supposed to be so we just sent it 
      this.state.playerBShowCount = 30;
      this.state.playerCShowCount = 30;
      this.state.playerDShowCount = 30;
    }
    this.pushState();
  }
}
