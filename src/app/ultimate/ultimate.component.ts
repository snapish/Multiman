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
    this.stateService.addListener(_ => this.onNewStateReceived())

    // console.log(this.ultimateChars)
   }

   onNewStateReceived() {
    this.updateOpacity();
    this.changeRef.tick();
  }
  ngOnInit() {
    //update state here
  //  this.stateService.updateState(this.state)

  }
  pushState(){
    try{PUSH_STATE(this.state)}
    catch{console.log("uh oh stinky")}
  }

  onOptionsSelected(event) {
    this.stateService.state.all.ultimateCharCount = event;
 //   this.stateService.updateState(this.state)
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

    if(this.stateService.state.ultimate.dlcDisabled){

          if(!this.stateService.state.ultimate.disabledChars.includes(141)){
            this.toggle("141")
          }
          if(!this.stateService.state.ultimate.disabledChars.includes(142)){
            this.toggle("142")
          }
          if(!this.stateService.state.ultimate.disabledChars.includes(143)){
            this.toggle("143")
          }
          if(!this.stateService.state.ultimate.disabledChars.includes(144)){
            this.toggle("144")
          }
          if(!this.stateService.state.ultimate.disabledChars.includes(145)){
            this.toggle("145")
          }
          if(!this.stateService.state.ultimate.disabledChars.includes(146)){
            this.toggle("145")
          }
          //update state here
        }
    else{
      if(this.stateService.state.ultimate.disabledChars.includes(141)){
        this.toggle("Piranha Plant")
      }
      if(this.stateService.state.ultimate.disabledChars.includes(142)){
        this.toggle("Joker")
      }
      if(this.stateService.state.ultimate.disabledChars.includes(143)){
        this.toggle("Banjo")
      }
      if(this.stateService.state.ultimate.disabledChars.includes(144)){
        this.toggle("Hero")
      }
      if(this.stateService.state.ultimate.disabledChars.includes(145)){
        this.toggle("Terry")
      }
      if(this.stateService.state.ultimate.disabledChars.includes(146)){
        this.toggle("Byleth")
      }
      this.stateService.pushState()

    }
   // this.stateService.updateState(this.state)

  }
    /**
   * Checks this.stateService.state.melee.disabledChars to see if the ID exists, if not, adds it, if so, removes it
   * calls side.setMeleeCharCount if needed
   * then goes thru each charImg, finds the one of the ID passed,and changes opacity accordingly
   * @param id character ID to disable
   */
  toggle(id) {
    if (this.stateService.state.ultimate.disabledChars.includes(id)) {
      this.stateService.state.ultimate.disabledChars = this.removeFromArray(this.stateService.state.ultimate.disabledChars, id)
    }
    else {
      this.stateService.state.ultimate.disabledChars.push(id)
    }
    console.log(this.stateService.state.ultimate.disabledChars)
    if (this.ultimateChars.length - this.stateService.state.ultimate.disabledChars.length < this.stateService.state.all.ultimateCharCount) {
       this.side.setUltimateCharacterCount(this.stateService.state.all.ultimateCharCount - 1)
    }
    this.updateOpacity()
    this.stateService.pushState()
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
   * Brute forces updates on what the opacity of a character should be.
   * Goes thru every character img, for each img, goes thru the disabled chars array, and if the image id is in the disabled chars array, set opacity to 0.3 and then go to next char
   */
  updateOpacity() {
    $('.charImg').each(ind =>{  //go through all the character images
    for (let id of this.stateService.state.ultimate.disabledChars) { //for every character disabled
        if($('.charImg').eq(ind).attr('src').includes("ultimateIcons/" + id + ".jpeg")){ //if the char image has "..../id.jpeg" as its path, ult has a different file ext for some reason
          $('.charImg').eq(ind).css('opacity', "0.3")  //set the opacity 
          break
        }
        else{
          $('.charImg').eq(ind).css('opacity', "1")  //set the opacity 
        }
      }
      if(this.stateService.state.ultimate.disabledChars.length ==0){ 
        $('.charImg').eq(ind).css('opacity','1')
      }
    })
  }
    randomFill() {
      this.stateService.state.ultimate.playerAChars = this.randomService.randomizeUltimate(this.stateService.state.ultimate.disabledChars)
      this.stateService.state.ultimate.playerBChars = this.randomService.randomizeUltimate(this.stateService.state.ultimate.disabledChars)
      this.stateService.state.ultimate.playerCChars = this.randomService.randomizeUltimate(this.stateService.state.ultimate.disabledChars)
      this.stateService.state.ultimate.playerDChars = this.randomService.randomizeUltimate(this.stateService.state.ultimate.disabledChars)
      this.stateService.state.ultimate.playerEChars = this.randomService.randomizeUltimate(this.stateService.state.ultimate.disabledChars)
      this.stateService.state.ultimate.playerFChars = this.randomService.randomizeUltimate(this.stateService.state.ultimate.disabledChars)
      this.stateService.state.ultimate.playerGChars = this.randomService.randomizeUltimate(this.stateService.state.ultimate.disabledChars)
      this.stateService.state.ultimate.playerHChars = this.randomService.randomizeUltimate(this.stateService.state.ultimate.disabledChars)
    this.stateService.pushState()
    }

}
