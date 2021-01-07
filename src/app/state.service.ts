import { CdkDragDrop, CdkDragEnter, moveItemInArray } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
import { ApplicationRef } from '@angular/core'
@Injectable({
  providedIn: 'root'
})
export class StateService {
  //    $.getJSON('https://api.ipify.org?format=jsonp&callback=?', function(data) {console.log(data["ip"])});

  constructor(private appref: ApplicationRef) {
    // keep the session alive
    var PING_INTERVAL = 1000 * 60 // 1m
    setInterval(function () {
      console.log('ping...')
      fetch('/ping' + window.location.search, { method: 'POST' })
        .then(response => {
          if (response.ok) console.log('pong')
          else console.error('ping failed')
        })
        .catch(err => console.error('Ping failed', err))
    }, PING_INTERVAL)

    var protocol = 'wss'
    if (window.location.href.includes('localhost')) protocol = 'ws'
    this.ws = new WebSocket(protocol + '://' + window.location.host + window.location.search)
    this.ws.onmessage = (event) => {
      this.state = JSON.parse(event.data)
      this.listeners.forEach(callback => callback())
    }
  }

  ws = null
  listeners = []

  state = {
    melee: {
      playerAChars: [],
      playerBChars: [],
      playerCChars: [],
      playerDChars: [],
      disabledChars: [],
    },
    ultimate: {
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
    projectm: {
      playerAChars: [],
      playerBChars: [],
      playerCChars: [],
      playerDChars: [],
      disabledChars: [],
    },
    rivals: {
      playerAChars: [],
      playerBChars: [],
      disabledChars: [],
    },
    all: { //universal things
      activeRoomCodes: [],
      meleeCharCount: 26,
      ultimateCharCount: 83,
      pmCharCount: 42,
      rivalsCharCount: 14,
      ultimatePlayerCount: 2,
      meleePlayerCount: 2,
      pmPlayerCount: 2,
      rivalsPlayerCount: 2
    },
  }

  entered(event: CdkDragEnter, arrayToEntered) {
    moveItemInArray(arrayToEntered, event.item.data, event.container.data);
    this.pushState()
  }
  drop(event: CdkDragDrop<string[]>, arrayToDrop) {
    moveItemInArray(arrayToDrop, event.previousIndex, event.currentIndex);
    this.pushState()
  }
  // call this to send a state change to the server
  pushState() {
    this.ws.send(JSON.stringify(this.state))
  }

  // Each component's contructor should call this function to register themselves as listeners for state changes from server.
  // callback should be a function that takes a state parameter
  addListener(callback) {
    this.listeners.push(callback)
  }


  /**
   * Takes an index and returns an array for player a,b,c, or d based on the index
   * @param index the number/index to map to player a,b,c, or d
   * @param game which game it should return
   */
  numberToPlayersChars(index: number, game: string) {

    if (game == 'melee') {
      var playerChars = Object.keys(this.state.melee);
      return this.state.melee[playerChars[index]]
    }
    else if(game =="ultimate"){
      var playerChars = Object.keys(this.state.ultimate);
      console.log(this.state.ultimate[playerChars[index]])
      return this.state.ultimate[playerChars[index]]
    }
    else if(game =="rivals"){
      var playerChars = Object.keys(this.state.rivals);
      return this.state.rivals[playerChars[index]]
    }
    else if(game =="pm"){
      var playerChars = Object.keys(this.state.projectm);
      return this.state.projectm[playerChars[index]]
    }

    return []
  }

  /**
 * returns an empty array for interating purposes
 * @param num how big array should be
 */
  createEmptyArray(num) {
    var temp = []
    for (let index = 0; index < num; index++) {
      temp.push(index);
    }
    return temp
  }
  /**
   * Given a state object to update, matches the values from the state service
   * @returns a state object mirroring whats on the service
   * @param state the object to update the values of
   */
  componentStateUpdate(updatingState) {
    for (const val in Object.keys(this.state).filter(element => Object.keys(updatingState).includes(element))) {
      updatingState[val] = this.state[val]
    }
    return updatingState
  }


  updateState(obj) {
    if (obj.game == "melee")
      this.state.melee = obj.melee//update the state
    else if (obj.game == "ultimate")
      this.state.ultimate = obj
    else if (obj.game == "projectm")
      this.state.projectm = obj
    this.state.all = obj.all
    //send to server here

    this.componentStateUpdate(obj)

    //dont need to app.tick() when sending? only when recieveing
  }

}
