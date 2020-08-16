import { Component, OnInit, ApplicationRef } from '@angular/core';
import { StateService } from '../state.service';
import { RandomService } from '../random.service';
import { SideComponent } from '../side/side.component';

@Component({
  selector: 'app-rivals',
  templateUrl: './rivals.component.html',
  styleUrls: ['./rivals.component.css']
})
export class RivalsComponent implements OnInit {

  rivalsChars = []
  constructor(private side : SideComponent ,private stateService: StateService, private randomService: RandomService, private changeRef: ApplicationRef) {
    this.rivalsChars = this.randomService.getRivalsChars()
    this.stateService.addListener(_ => this.onNewStateReceived())

   }
  ngOnInit(): void {
  }
  onNewStateReceived() {
    this.updateOpacity();
    this.changeRef.tick();
  }
  /**
   * Fills players arrays with characters
   */
  randomFill() {
    this.stateService.state.rivals.playerAChars = this.randomService.randomizeRivals(this.stateService.state.rivals.disabledChars)
    this.stateService.state.rivals.playerBChars = this.randomService.randomizeRivals(this.stateService.state.rivals.disabledChars)
    this.stateService.pushState()
  }
    /**
   * Shuffles an array
   * @param array array to shuffle
   */
  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  /**
   * Checks this.stateService.state.rivals.disabledChars to see if the ID exists, if not, adds it, if so, removes it
   * calls side.setRivalsCharCount if needed
   * then goes thru each charImg, finds the one of the ID passed,and changes opacity accordingly
   * @param id character ID to disable
   */
  toggle(id) {
    if (this.stateService.state.rivals.disabledChars.includes(id)) {
      this.stateService.state.rivals.disabledChars = this.removeFromArray(this.stateService.state.rivals.disabledChars, id)
      
      this.updateOpacity()
    }
    else { //reomve from array
      
      this.stateService.state.rivals.playerAChars = this.stateService.state.rivals.playerAChars.filter( x=> {return x.id != id })
      this.stateService.state.rivals.playerBChars = this.stateService.state.rivals.playerBChars.filter( x=> {return x.id != id })
      this.stateService.state.rivals.disabledChars.push(id)
      this.updateOpacity()
    }
    if (this.rivalsChars.length - this.stateService.state.rivals.disabledChars.length < this.stateService.state.all.rivalsCharCount) {
       this.side.setRivalsCharacterCount(this.stateService.state.all.rivalsCharCount - 1)
    }
    
    this.stateService.pushState()
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
     * Brute forces updates on what the opacity of a character should be.
     * Goes thru every character img, for each img, goes thru the disabled chars array, and if the image id is in the disabled chars array, set opacity to 0.3 and then go to next char
     */
    updateOpacity() {
      $('.charImg').each(ind => {  //go through all the character images
        for (let id of this.stateService.state.rivals.disabledChars) { //for every character disabled
          if ($('.charImg').eq(ind).attr('src').includes("rivalsIcons/" + id + ".png")) { //if the char image has "..../id.png" as its path
            $('.charImg').eq(ind).css('opacity', "0.3")  //set the opacity 
            break//and move on to the next disabled character in the disabled chars array
          }
          else { //its not hitting this to reset the opacity when its just one character, dont know why
            $('.charImg').eq(ind).css('opacity', "1")  //set the opacity 
          }
        }
        if(this.stateService.state.rivals.disabledChars.length ==0){ 
          $('.charImg').eq(ind).css('opacity','1')
        }
      })
    }
}
