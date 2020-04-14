import { Injectable } from '@angular/core';
import {ApplicationRef} from '@angular/core'
@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(private appref: ApplicationRef) {}
  state = {
    melee: {

    },
    ultimate:{

    },
    projectm:{

    },
    all:{ //universal things

    } 
  }

  updateState(obj){
    if(obj.game == "melee")
    this.state.melee = obj//update the state
    else if(obj.game == "ultimate")
    this.state.ultimate = obj
    else if(obj.game == "projectm")
    this.state.projectm = obj
    this.state.all = obj.all
    //send to server

    //dont need to app.tick() when sending? only when recieveing
  }

}
