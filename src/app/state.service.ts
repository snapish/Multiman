import { Injectable } from '@angular/core';
import {ApplicationRef} from '@angular/core'
@Injectable({
  providedIn: 'root'
})
export class StateService {
//    $.getJSON('https://api.ipify.org?format=jsonp&callback=?', function(data) {console.log(data["ip"])});

  constructor(private appref: ApplicationRef) {}
  state = {
    melee: {
      playerAChars: [],
      playerBChars: [],
      playerCChars: [],
      playerDChars: [],
      disabledChars: [], 
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
    projectm:{
      playerAChars: [],
      playerBChars: [],
      playerCChars: [],
      playerDChars: [],
      disabledChars: [],
    },
    all:{ //universal things
      charCount: 0,
      playerCount: [],
      activeRoomCodes : [],
      currentCharCount:0,
      currentPlayerCount:4
    },
   
  }

  /**
   * Given a state object to update, matches the values from the state service
   * @returns a state object mirroring whats on the service
   * @param state the object to update the values of
   */
  componentStateUpdate(updatingState){
    for (const val in Object.keys(this.state).filter(element => Object.keys(updatingState).includes(element))) {
      updatingState[val] = this.state[val]
    }
    return updatingState
  }


  updateState(obj){
    if(obj.game == "melee")
    this.state.melee = obj.melee//update the state
    else if(obj.game == "ultimate")
    this.state.ultimate = obj
    else if(obj.game == "projectm")
    this.state.projectm = obj
    this.state.all = obj.all
    //send to server here
    
    this.componentStateUpdate(obj)

    //dont need to app.tick() when sending? only when recieveing
  }

}
