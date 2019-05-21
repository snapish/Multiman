import { Component, OnInit, ViewChild } from '@angular/core';
import { RandomService } from '../random.service';
@Component({
  selector: 'app-melee',
  templateUrl: './melee.component.html',
  styleUrls: ['./melee.component.css']
})
export class MeleeComponent implements OnInit {
  image: string = "../assets/melee_menu.png"
  //characters are 110x110
  /* coordinates: ImageMapCoordinate[] = [
  //   {
  //     name: "Dr. Mario",
  //     x: 3,
  //     y: 12,
  //     width: 110,
  //     height: 110
  //   },
  //   {
  //     name: "Mario",
  //     x: 123,
  //     y: 6,
  //     width: 110,
  //     height: 110
  //   },
  //   {
  //     name: "Luigi",
  //     x: 246,
  //     y: 6,
  //     width: 110,
  //     height: 110
  //   },
  //   {
  //     name: "Bowser",
  //     x: 368,
  //     y: 6,
  //     width: 110,
  //     height: 110
  //   },
  //   {
  //     name: "Peach",
  //     x: 490,
  //     y: 6,
  //     width: 110,
  //     height: 110
  //   },
  //   {
  //     name: "Yoshi",
  //     x: 615,
  //     y: 6,
  //     width: 110,
  //     height: 110
  //   },
  //   {
  //     name: "Donkey Kong",
  //     x: 738,
  //     y: 6,
  //     width: 110,
  //     height: 110
  //   },
  //   {
  //     name: "Captain Falcon",
  //     x: 860,
  //     y: 6,
  //     width: 110,
  //     height: 110
  //   },
  //   {
  //     name: "Ganondorf",
  //     x: 980,
  //     y: 13,
  //     width: 110,
  //     height: 110
  //   },
  //   {
  //     name: 'Falco',
  //     x: 3,
  //     y: 138,
  //     width: 110,
  //     height: 110
  //   },
  //   {
  //     name: "Fox",
  //     x: 123,
  //     y: 132,
  //     width: 110,
  //     height: 110
  //   },
  //   {
  //     name: "Ness",
  //     x: 246,
  //     y: 132,
  //     width: 110,
  //     height: 110
  //   },
  //   {
  //     name: "Ice Climbers",
  //     x: 368,
  //     y: 132,
  //     width: 110,
  //     height: 110
  //   },
  //   {
  //     name: "Kirby",
  //     x: 490,
  //     y: 132,
  //     width: 110,
  //     height: 110
  //   },
  //   {
  //     name: "Samus",
  //     x: 615,
  //     y: 132,
  //     width: 110,
  //     height: 110
  //   },
  //   {
  //     name: "Zelda",
  //     x: 738,
  //     y: 132,
  //     width: 110,
  //     height: 110
  //   },
  //   {
  //     name: "Link",
  //     x: 860,
  //     y: 132,
  //     width: 110,
  //     height: 110
  //   },
  //   {
  //     name: "Young Link",
  //     x: 980,
  //     y: 137,
  //     width: 110,
  //     height: 110
  //   },
  //   {
  //     name: "Free Space",
  //     x: 5,
  //     y: 255,
  //     width: 110,
  //     height: 110
  //   },
  //   {
  //     name: "Pichu",
  //     x: 125,
  //     y: 262,
  //     width: 110,
  //     height: 110
  //   },
  //   {
  //     name: "Pikachu",
  //     x: 245,
  //     y: 258,
  //     width: 110,
  //     height: 110
  //   },
  //   {
  //     name: "Jigglypuff",
  //     x: 368,
  //     y: 257,
  //     width: 110,
  //     height: 110
  //   },
  //   {
  //     name: "Mewtwo",
  //     x: 492,
  //     y: 258,
  //     width: 110,
  //     height: 110
  //   },
  //   {
  //     name: "Mr GNW",
  //     x: 614,
  //     y: 258,
  //     width: 110,
  //     height: 110
  //   },
  //   {
  //     name: "Marth",
  //     x: 737,
  //     y: 258,
  //     width: 110,
  //     height: 110
  //   },
  //   {
  //     name: "Roy",
  //     x: 859,
  //     y: 262,
  //     width: 110,
  //     height: 110
  //   },
  //   {
  //     name: "Sheik",
  //     x: 980,
  //     y: 259,
  //     width: 110,
  //     height: 110
  //   },


  // ]*/

  meleeChars = this.randomService.getMeleeChars();
  Opacity = "0.5";
  firstRoll = false;
  playerCount;
  charCount;
  toomanychars = [];
  disabledArray = [];
  public isCollapsed = true;
  playerAImages = new Set();
  playerBImages = new Set();
  playerCImages = new Set();
  playerDImages = new Set();

  playerAChars = new Set();
  playerBChars = new Set();
  playerCChars = new Set();
  playerDChars = new Set();
  disabledChars = new Set();
  overCharCount: boolean =false;
  constructor(private randomService: RandomService) {
    this.meleeChars = this.randomService.getMeleeChars();
  }

  ngOnInit() {
    for (let x of this.meleeChars) {
      console.log(x.name);
    }
    console.log(this.meleeChars);
  }
  randomFill() {
this.firstRoll = true;
    this.charCount = ((document.getElementById("charCount")) as HTMLSelectElement).selectedIndex + 1;
    this.playerCount = ((document.getElementById("playerCount")) as HTMLSelectElement).selectedIndex + 1;
    this.playerAImages.clear();
    this.playerAChars.clear();
    this.playerBImages.clear();
    this.playerBChars.clear();
    this.playerCImages.clear();
    this.playerCChars.clear();
    this.playerDImages.clear();
    this.playerDChars.clear();
    this.overCharCount =false;
    
    if( this.meleeChars.length - this.disabledChars.size + 1 > this.charCount ){
    while (this.playerAChars.size < this.charCount) {
      var n = this.random();
      console.log(n)
    //  console.log(this.charCount)
      var s = "";
      for (let l of this.meleeChars) {
        if (l.id == n && !this.disabledChars.has(l)) {
          s = l.name;
          this.playerAChars.add(s);
        //  this.playerAImages.add(l.img);
        }
      }
    }
  

    if (this.playerCount >= 2) {
      while (this.playerBChars.size < this.charCount) {
        var n = this.random();
        var s = "";
        for (let l of this.meleeChars) {
          if (l.id == n && !this.disabledChars.has(l)) {
            s = l.name;
            this.playerBChars.add(s);
          //  this.playerBImages.add(l.img);
          }
        }
      }
    }

    if (this.playerCount >= 3) {
      while (this.playerCChars.size < this.charCount) {
        var n = this.random();
        var s = "";
        for (let l of this.meleeChars) {
          if (l.id == n && !this.disabledChars.has(l)) {
            s = l.name;
            this.playerCChars.add(s);
           // this.playerCImages.add(l.img);
          }
        }
      }
    }
    if (this.playerCount == 4) {
      while (this.playerDChars.size < this.charCount) {
        var n = this.random();
        var s = "";
        for (let l of this.meleeChars) {
          if (l.id == n && !this.disabledChars.has(l)) {
            s = l.name;
            this.playerDChars.add(s);
         //   this.playerDImages.add(l.img);
          }
        }
      }
    }

    this.shuffle(this.meleeChars);
    for(let x of this.meleeChars){
      if (this.playerAChars.has(x.name)) {
        this.playerAImages.add(x.img);
      }
    }
    this.shuffle(this.meleeChars);
    for(let x of this.meleeChars){
      if (this.playerBChars.has(x.name)) {
        this.playerBImages.add(x.img);
      }
    }
    this.shuffle(this.meleeChars);
    for(let x of this.meleeChars){
      if (this.playerCChars.has(x.name)) {
        this.playerCImages.add(x.img);
      }
    }
    this.shuffle(this.meleeChars);
    for(let x of this.meleeChars){
      if (this.playerDChars.has(x.name)) {
        this.playerDImages.add(x.img);
      }
    }
   
  }
  else{ 
    
    this.overCharCount = true;
  }
  }
  random() {
    var min = 0;
    var max = 27;
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  clearDisabled() {
    this.disabledChars.clear();
    this.disabledChars = new Set();
    this.disabledArray = [];
    
  }
  logTest(s: string) {
    console.log(s)
  }
  toggleChar(s: string) {
    for (let x of this.meleeChars) {
      if (s == x.name) {
        if (!this.disabledChars.has(x)) { //x.name previously 
          this.disabledChars.add(x);
          console.log('added ' + x.name)
          document.getElementById(x.name).style.opacity = "0.3";
          console.log(this.disabledChars);
          console.log(this.disabledArray)
        }
        else {
         
         document.getElementById(x.name).style.opacity = "1";
          this.disabledChars.delete(x);
          console.log('removed ' + x.name)
          console.log(this.disabledChars);
          console.log(this.disabledArray)
        }
      }
    }
    this.disabledArray = Array.from(this.disabledChars);
    
  }
   shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
}
