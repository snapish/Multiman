import { Component, OnInit, ViewChild } from '@angular/core';
import { RandomService } from '../random.service';
import { HttpClient } from '@angular/common/http';
import { MatCheckbox } from '@angular/material/checkbox';
@Component({
  selector: 'app-melee',
  templateUrl: './melee.component.html',
  styleUrls: ['./melee.component.css']
})
export class MeleeComponent implements OnInit {
  image: string = "../assets/melee_menu.png"
  meleeChars = this.randomService.getMeleeChars();
  Opacity = "0.5";
  firstRoll = false;
  playerCount;
  charCount;
  toomanychars = [];
  disabledArray = [];
  public isCollapsed = true;
   checked: boolean = false;
  playerAShowCount: number;
  playerBShowCount: number;
  playerCShowCount: number;
  playerDShowCount: number;
  state = {
    playerAChars: new Set(),
    playerBChars: new Set(),
    playerCChars: new Set(),
    playerDChars: new Set(),
    playerCount: 0,
    charCount: 0,
    playerAShowCount: this.playerAShowCount,
    playerBShowCount: this.playerBShowCount,
    playerCShowCount: this.playerCShowCount,
    playerDShowCount: this.playerDShowCount,
    disabledChars: new Set(),
    checked: this.checked,
    overCharCount: false
  }

  constructor(private randomService: RandomService) {
    this.meleeChars = this.randomService.getMeleeChars();
  }

  ngOnInit() {
this.state.disabledChars.add(26);
 this.delay(400).then( f => {document.getElementById("Free Space").style.opacity = "0.3";})

  }

   delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

  randomFill() {

    console.log(this.checked)
    //if(== true )  
    this.firstRoll = true;
    this.state.charCount = ((document.getElementById("charCount")) as HTMLSelectElement).selectedIndex + 1; //set char count
    this.state.playerCount = ((document.getElementById("playerCount")) as HTMLSelectElement).selectedIndex + 1; //set the player count
    this.state.playerAChars.clear();
    this.state.playerBChars.clear(); //clear they shits
    this.state.playerCChars.clear();
    this.state.playerDChars.clear();
    this.state.overCharCount = false;


    if (this.meleeChars.length - this.state.disabledChars.size + 1 > this.state.charCount) { // if the whitelisted char count is under the allowed count
      while (this.state.playerAChars.size < this.state.charCount) { // while the set is not filled
        var n = this.random();
        this.shuffle(this.meleeChars);
        for (let l of this.meleeChars) {
          if (l.id == n && !this.state.disabledChars.has(l.id)) {
            this.state.playerAChars.add(l);
          }
        }
      }

      if (this.state.playerCount >= 2) {
        while (this.state.playerBChars.size < this.state.charCount) {
          var n = this.random();
          this.shuffle(this.meleeChars);
          for (let l of this.meleeChars) {
            if (l.id == n && !this.state.disabledChars.has(l.id)) {
              this.state.playerBChars.add(l);
            }
          }
        }
      }

      if (this.state.playerCount >= 3) {
        while (this.state.playerCChars.size < this.state.charCount) {
          var n = this.random();
          this.shuffle(this.meleeChars);
          for (let l of this.meleeChars) {
            if (l.id == n && !this.state.disabledChars.has(l.id)) {
              this.state.playerCChars.add(l);
            }
          }
        }
      }
      if (this.state.playerCount == 4) {
        while (this.state.playerDChars.size < this.state.charCount) {
          var n = this.random();
          this.shuffle(this.meleeChars);
          for (let l of this.meleeChars) {
            if (l.id == n && !this.state.disabledChars.has(l.id)) {
              this.state.playerDChars.add(l);
            }
          }
        }
      }
      if (!this.state.checked) {
        this.state.playerAShowCount = 30;
        this.state.playerBShowCount = 30;
        this.state.playerCShowCount = 30;
        this.state.playerDShowCount = 30;
      }
      else {
        this.state.playerAShowCount = 0;
        this.state.playerBShowCount = 0;
        this.state.playerCShowCount = 0;
        this.state.playerDShowCount = 0;
      }
      console.log(this.state.playerAChars)
      console.log(this.state.playerBChars)
    }
    else {

      this.state.overCharCount = true;
    }
  }

  advancePlayerA() {
    if (this.state.playerAShowCount < this.state.playerAChars.size) {
      this.state.playerAShowCount += 1;
    }
  }

  advancePlayerB() {
    if (this.state.playerBShowCount < this.state.playerBChars.size) {
      this.state.playerBShowCount += 1;
    }
  }

  advancePlayerC() {
    if (this.state.playerCShowCount < this.state.playerCChars.size) {
      this.state.playerCShowCount += 1;
    }
  }

  advancePlayerD() {
    if (this.state.playerDShowCount < this.state.playerDChars.size) {
      this.state.playerDShowCount += 1;
    }
  }
  random() {
    var min = 0;
    var max = 27;
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  toggleChar(s: string) {
    for (let x of this.meleeChars) {
      if (s == x.name) {
        if (!this.state.disabledChars.has(x.id)) { //x.name previously 
          this.state.disabledChars.add(x.id);
          console.log('added ' + x.name + " " + x.id)
          document.getElementById(x.name).style.opacity = "0.3";
          // console.log(this.disabledChars);
          // console.log(this.disabledArray)
        }
        else {

          document.getElementById(x.name).style.opacity = "1";
          this.state.disabledChars.delete(x.id);
          console.log('removed ' + x.name)
          console.log(this.state.disabledChars);
        }
      }
    }


  }

  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

}