import { Component, OnInit, ApplicationRef } from '@angular/core';
import { RandomService } from '../random.service';
import { SideComponent } from '../side/side.component';
import { StateService } from '../state.service';
declare var $: any;
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
  constructor(private randomService: RandomService, private changeRef: ApplicationRef, private side: SideComponent, public stateService: StateService) {
    this.pmChars = this.randomService.getPMChars();
    this.stateService.addListener(_ => this.onNewStateReceived())

  }

  onNewStateReceived() {
    this.updateOpacity();
    this.changeRef.tick();
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
/**
   * Brute forces updates on what the opacity of a character should be.
   * Goes thru every character img, for each img, goes thru the disabled chars array, and if the image id is in the disabled chars array, set opacity to 0.3 and then go to next char
   */
  updateOpacity() {
    $('.charImg').each(ind =>{  //go through all the character images
    for (let id of this.stateService.state.projectm.disabledChars) { //for every character disabled
        if($('.charImg').eq(ind).attr('src').includes("pmIcons/" + id + ".png")){ //if the char image has "..../id.png" as its path
          $('.charImg').eq(ind).css('opacity', "0.3")  //set the opacity 
          break
        }
        else{
          $('.charImg').eq(ind).css('opacity', "1")  //set the opacity 
        }
      }
      if(this.stateService.state.projectm.disabledChars.length ==0){ 
        $('.charImg').eq(ind).css('opacity','1')
      }
    })
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

    /**
   * Checks this.stateService.state.melee.disabledChars to see if the ID exists, if not, adds it, if so, removes it
   * calls side.setMeleeCharCount if needed
   * then goes thru each charImg, finds the one of the ID passed,and changes opacity accordingly
   * @param id character ID to disable
   */
  toggle(id) {
    if (this.stateService.state.projectm.disabledChars.includes(id)) {
      this.stateService.state.projectm.disabledChars = this.removeFromArray(this.stateService.state.projectm.disabledChars, id)
    }
    else {
      this.stateService.state.projectm.playerAChars = this.stateService.state.projectm.playerAChars.filter( x=> {return x.id != id })
      this.stateService.state.projectm.playerBChars = this.stateService.state.projectm.playerBChars.filter( x=> {return x.id != id })
      this.stateService.state.projectm.playerCChars = this.stateService.state.projectm.playerCChars.filter( x=> {return x.id != id })
      this.stateService.state.projectm.playerDChars = this.stateService.state.projectm.playerDChars.filter( x=> {return x.id != id })
      this.stateService.state.projectm.disabledChars.push(id)
    }
    console.log(this.stateService.state.projectm.disabledChars)
    if (this.pmChars.length - this.stateService.state.projectm.disabledChars.length < this.stateService.state.all.pmCharCount) {
       this.side.setPMCharacterCount(this.stateService.state.all.pmCharCount - 1)
    }
    this.updateOpacity()
    this.stateService.pushState()
  }

  removeFromArray(arr: Array<number>, num:number) {
    var newArr = arr.filter(element => element != num)
    return newArr

  }
  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  randomFill() {
    this.stateService.state.projectm.playerAChars = this.randomService.randomizePM(this.stateService.state.projectm.disabledChars)
    this.stateService.state.projectm.playerBChars = this.randomService.randomizePM(this.stateService.state.projectm.disabledChars)
    this.stateService.state.projectm.playerCChars = this.randomService.randomizePM(this.stateService.state.projectm.disabledChars)
    this.stateService.state.projectm.playerDChars = this.randomService.randomizePM(this.stateService.state.projectm.disabledChars)
    this.stateService.pushState()
  }

}
