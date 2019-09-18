import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  featureList = [
    "Disable a character by clicking their icon in the character menu",
    "Send someone your URL or code to let them see your page", 
    "Free Space slot for any character you (or your opponent) want",
    "Play with up to 4 people",
    "Toggle hiding upcoming characters",
    "Play with any number of characters",
  ]

}
