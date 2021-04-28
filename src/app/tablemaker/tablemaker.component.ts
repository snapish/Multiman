import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../character';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-tablemaker',
  templateUrl: './tablemaker.component.html',
  styleUrls: ['./tablemaker.component.css']
})
export class TablemakerComponent implements OnInit {
  @Input() game: string; //enter as "melee", "ultimate", "projectm","rivals"

  length : number = 0;
  gamesChars : Character[]; //the games character lists from random service
  stringPaths : string[] = []; //making strings for <img> paths

  constructor(public random: RandomService) {



  }

  ngOnInit(): void {
        //for w\e game the tables made for, get that games chars into an array, and get the paths for the images into an array
        if(this.game == "melee"){
          this.gamesChars = this.random.getMeleeChars()
        }
        else if(this.game == "ultimate"){
          this.gamesChars = this.random.getUltimateChars()
        }
        else if(this.game == "projectm"){
          this.gamesChars = this.random.getPMChars()
        }
        else if(this.game == "rivals"){
          this.gamesChars = this.random.getRivalsChars()
        }

        this.fillStringPaths()
  }


  toggle(charID : number){

  }

  /**
   * fills array of strings for char image paths for table elements
   * uses the name of the game passed on @Input to determine what chars to work with
   */
  fillStringPaths() : void{
    if(this.game == "melee"){
      this.gamesChars.forEach((character, ind) =>{
        this.stringPaths.push("/assets/meleeIcons/" + character.id + ".png")
      })
    }
    else if(this.game == "ultimate"){
      this.gamesChars.forEach((character, ind) =>{
        this.stringPaths.push("/assets/meleeIcons/" + character.id + ".png")
      })
    }
    else if(this.game == "projectm"){
      this.gamesChars.forEach((character, ind) =>{
        this.stringPaths.push("/assets/pmIcons/" + character.id + ".png")
      })
    }
    else if(this.game == "rivals"){
      this.gamesChars.forEach((character, ind) =>{
        this.stringPaths.push("/assets/meleeIcons/" + character.id + ".png")
      })
    }

  }

}
