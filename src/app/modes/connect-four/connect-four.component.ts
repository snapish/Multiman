import { Component, OnInit } from '@angular/core';
import { RandomService } from 'src/app/random.service';
import * as $ from 'jquery';
//declare var $: any;

@Component({
  selector: 'app-connect-four',
  templateUrl: './connect-four.component.html',
  styleUrls: ['./connect-four.component.css']
})
export class ConnectFourComponent implements OnInit {

  constructor(private randomService: RandomService) { 
  }
  ngOnInit() {
    this.randomFill()
  }
   meleeChars = this.randomService.getMeleeChars();
   ultimateChars = this.randomService.getUltimateChars();
   pmChars = this.randomService.getPMChars();
  
  /*
 ribbon to select game
 each player gets random list for that game
 show pic of current char

  */
state={
  playerAChars: [],
  playerBChars: [],
  winner: "",
}

checkForWin(){

}

dropPreview(event):any{
  //console.log((event.target.classList[0]))
  //var columns = $($(event.target))
  //var columnClass = event.target.classList[0]
  //console.log( $("."+columnClass)[0] )
  console.log("asdf")
}
removePreview(event):any{

}
selectWinner(event){
  var column1 = ($('.col1'))
  var winner = "#"+ event.target.id
  $(winner).css('opacity','0.3')

  $("td").mouseover((element) =>{
 //get column
 //get all the tds with that column into an array
 //for each
 //check their img elements
 //if they're like empty or something go to next in column
 //if it's not empty, go to next one back in array
 //set its img to character img
 //set opacity to low af boi

    var column = $(element.currentTarget).attr('class') //get the column class the mouse is in
    var colArr = $("."+column).toArray() 
    var imgSrc = [];  //for storing the elements inside that column
    var images = [];
    var indexToFill;

    colArr.forEach(a =>{
      images.push($(a).children())
      imgSrc.push( $(a).children().attr('src') )
      console.log(imgSrc)
      console.log(images)
      imgSrc.forEach((value, index) =>{
        if(value != undefined && value.includes('assets')){ //if the slot is not empty, and the one above it is
          indexToFill = index-1
         //$(images[index-1]).attr('src','./assets/meleeIcons/1.png')
         
        }
        else{ //if all the slots were empty
          console.log("all slots empty")

          $(images[images.length - 1]).css('src','./assets/meleeIcons/2.png') 
          $(images[images.length - 1]).css('opacity','0.3') //set the last ones opacity to low
        }
      })
      console.log(indexToFill)
    })
    $(element.currentTarget).css('background-color','blue')
  }) //add mouse over functino to each of the columns
}

addUnique(array, number) {
  // adds the number to array if not already there
  if (!array.includes(number)) array.push(number);
}
shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

  randomFill() {
    this.state.playerAChars = [];
    this.state.playerBChars = []; //clear they shits

      // if the whitelisted char count is under the allowed count. Rewording: if disabled chars is over char count
      while (this.state.playerAChars.length < this.meleeChars.length) {
        // while the set is not filled
        var n = this.meleeRandom();
        this.shuffle(this.meleeChars);
        for (let l of this.meleeChars) {
            this.addUnique(this.state.playerAChars, l);
        }
      }

        while (this.state.playerBChars.length < this.meleeChars.length) {
          var n = this.meleeRandom();
          this.shuffle(this.meleeChars);
          for (let l of this.meleeChars) {
              this.addUnique(this.state.playerBChars, l);
          }
        }
      
  }

 

  ultRandom(){
    var min = 27;
    var max = 106;
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  meleeRandom(){
    var min = 0;
    var max = 27;
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  pmRandom(){

    var min = 1;
    var max = 43;
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  
  }
}
