import { Component, OnInit } from '@angular/core';
import { RandomService } from '../random.service';
import { SideComponent } from '../side/side.component';
declare var $: any;
declare var PUSH_STATE: any;
@Component({
  selector: 'app-ultimate',
  templateUrl: './ultimate.component.html',
  styleUrls: ['./ultimate.component.css']
})
export class UltimateComponent implements OnInit {
  charnums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78];
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
  constructor(private randomService: RandomService, private side: SideComponent) {
    this.ultimateChars = this.randomService.getUltimateChars();
    // console.log(this.ultimateChars)
   }

  ngOnInit() {
    //update state here
  }
  pushState(){
    try{PUSH_STATE(this.state)}
    catch{console.log("uh oh stinky")}
  }
  onOptionsSelected(event) {
    this.state.charCount = event;
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
    
    if(this.state.dlcDisabled){
     
          if(!this.state.disabledChars.includes(101)){
            this.toggleChar("Piranha Plant")
          }
          if(!this.state.disabledChars.includes(102)){
            this.toggleChar("Joker")
          }
          if(!this.state.disabledChars.includes(103)){
            this.toggleChar("Banjo")
          }
          if(!this.state.disabledChars.includes(104)){
            this.toggleChar("Hero")
          }
          if(!this.state.disabledChars.includes(105)){
            this.toggleChar("Terry")
          }
          if(!this.state.disabledChars.includes(106)){
            this.toggleChar("Byleth")
          }
          //update state here
        }
    else{
      if(this.state.disabledChars.includes(101)){
        this.toggleChar("Piranha Plant")
      }
      if(this.state.disabledChars.includes(102)){
        this.toggleChar("Joker")
      }
      if(this.state.disabledChars.includes(103)){
        this.toggleChar("Banjo")
      }
      if(this.state.disabledChars.includes(104)){
        this.toggleChar("Hero")
      }
      if(this.state.disabledChars.includes(105)){
        this.toggleChar("Terry")
      }
      if(this.state.disabledChars.includes(106)){
        this.toggleChar("Byleth")
      }
      
    }
  }
  toggleChar(charName: string) {
    console.log(this.state.disabledChars.length)
    for (let x of this.ultimateChars) {
      if (charName == x.name) { // run thru ult chars until it hits the one passed
        if (!this.state.disabledChars.includes(x.id)) { //if the character passed is not disabled yet
          this.state.disabledChars.push(x.id);
          // console.log('added ' + x.name + " " + x.id)
          // console.log(this.state.disabledChars)
          this.side.setCharacterCount(this.side.currentCharCount - 1)

          document.getElementById(x.name).style.opacity = "0.3";
        }
        else {
          this.side.setCharacterCount(this.side.currentCharCount + 1)
          
          document.getElementById(x.name).style.opacity = "1";
          this.state.disabledChars = this.removeFromArray(this.state.disabledChars, x.id);
        }
      }
    }
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

    randomFill() {
      this.state.charCount = this.side.currentCharCount
      this.state.playerCount = this.side.currentPlayerCount
      this.state.playerAChars = this.randomService.randomizeUltimate(this.state.disabledChars)
      this.state.playerBChars = this.randomService.randomizeUltimate(this.state.disabledChars)
      this.state.playerCChars = this.randomService.randomizeUltimate(this.state.disabledChars)
      this.state.playerDChars = this.randomService.randomizeUltimate(this.state.disabledChars)  
      this.state.playerEChars = this.randomService.randomizeUltimate(this.state.disabledChars)  
      this.state.playerFChars = this.randomService.randomizeUltimate(this.state.disabledChars)  
      this.state.playerGChars = this.randomService.randomizeUltimate(this.state.disabledChars)  
      this.state.playerHChars = this.randomService.randomizeUltimate(this.state.disabledChars)  
  
    }

}
