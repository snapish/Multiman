import {
  Component,
  OnInit,
  ApplicationRef
} from "@angular/core";
import { RandomService } from "../random.service";
import { HttpClient } from "@angular/common/http";
import { MatCheckbox } from "@angular/material/checkbox";
import { SideComponent } from '../side/side.component';
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
    playerAChars: [],
    playerBChars: [],
    playerCChars: [],
    playerDChars: [],
    playerCount: 2, //default player count
    charCount: this.charnums[this.charnums.length -1], //defualt char count, the last index of charnums, in case adding or removing a character
    playerAShowCount: this.playerAShowCount,
    playerBShowCount: this.playerBShowCount,
    playerCShowCount: this.playerCShowCount,
    playerDShowCount: this.playerDShowCount,
    disabledChars: [], 
    hideUpcoming: this.hideUpcoming, 
    overCharCount: false
  };

  constructor(private randomService: RandomService, private changeRef: ApplicationRef, private side: SideComponent) {
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
   */
  randomFill() {
    this.state.charCount = this.side.currentCharCount
    this.state.playerCount = this.side.currentPlayerCount
    this.state.playerAChars = this.randomService.randomizeMelee(this.state.disabledChars)
    this.state.playerBChars = this.randomService.randomizeMelee(this.state.disabledChars)
    this.state.playerCChars = this.randomService.randomizeMelee(this.state.disabledChars)
    this.state.playerDChars = this.randomService.randomizeMelee(this.state.disabledChars)  

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
          
          this.side.setCharacterCount(this.side.currentCharCount - 1)
          document.getElementById(x.name).style.opacity = "0.3";
        } else {
          this.side.setCharacterCount(this.side.currentCharCount + 1)

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
