import {
  Component,
  OnInit,
  ApplicationRef
} from "@angular/core";
import { RandomService } from "../random.service";
import { HttpClient } from "@angular/common/http";
import { MatCheckbox } from "@angular/material/checkbox";
import { SideComponent } from '../side/side.component';
import { StateService } from '../state.service';
declare var $: any;

@Component({
  selector: "app-melee",
  templateUrl: "./melee.component.html",
  styleUrls: ["./melee.component.css"]
})
export class MeleeComponent implements OnInit {

  meleeChars = []; //loaded later from randomservice
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

  constructor(private randomService: RandomService, private changeRef: ApplicationRef, private side: SideComponent, public stateService: StateService) {
    this.meleeChars = this.randomService.getMeleeChars();
    this.stateService.addListener(_ => this.onNewStateReceived())
  }

  onNewStateReceived() {
    this.updateOpacity();
    this.changeRef.tick();
  }

  ngOnInit() {
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

    this.stateService.state.melee.playerAChars = this.randomService.randomizeMelee(this.stateService.state.melee.disabledChars)
    this.stateService.state.melee.playerBChars = this.randomService.randomizeMelee(this.stateService.state.melee.disabledChars)
    this.stateService.state.melee.playerCChars = this.randomService.randomizeMelee(this.stateService.state.melee.disabledChars)
    this.stateService.state.melee.playerDChars = this.randomService.randomizeMelee(this.stateService.state.melee.disabledChars)
    //this.stateService.updateState(this.state)
    console.log(this.stateService.state.melee.playerAChars)
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
        if (!this.stateService.state.melee.disabledChars.includes(x.id)) { //if its not in the disabled chars array
          this.stateService.state.melee.disabledChars.push(x.id); //put it in
          //character count shouldnt be more than the available characters
          if (this.meleeChars.length - this.stateService.state.melee.disabledChars.length  < this.stateService.state.all.meleeCharCount ){
           this.side.setMeleeCharacterCount(this.stateService.state.all.meleeCharCount - 1)
          }
          document.getElementById(x.name).style.opacity = "0.3";

        } else {
         document.getElementById(x.name).style.opacity = "1";
          this.stateService.state.melee.disabledChars = this.removeFromArray(
            this.stateService.state.melee.disabledChars,
            x.id
          );
        }
      }
    }

    this.stateService.pushState();
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
/*  updateState(newState) {
    console.log("got new state: ", newState);
    this.state.melee.playerAChars = newState.playerAChars;
    this.state.melee.playerBChars = newState.playerBChars;
    this.state.melee.playerCChars = newState.playerCChars;
    this.state.melee.playerDChars = newState.playerDChars;
    this.state.melee.disabledChars = newState.disabledChars;
    this.state.all.charCount = newState.charCount;
    this.state.all.playerCount = newState.playerCount;
    this.updateOpacity();
    this.changeRef.tick();
    //repaint broswer
  }
  */
  /**
   * Brute forces updates on what the opacity of a character should be.
   */
  updateOpacity() {
    for (let i of this.stateService.state.melee.disabledChars) {
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
      if (!this.stateService.state.melee.disabledChars.includes(p.id)) {
        document.getElementById(p.name).style.opacity = "1";
      }
    }
  }

}
