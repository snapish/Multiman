import { Injectable } from '@angular/core';
import {ApplicationRef} from '@angular/core'
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
