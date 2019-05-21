import { Injectable } from '@angular/core';
import { Character } from './character';
import { DomElementSchemaRegistry } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class RandomService {
  DoctorMario;
  uDoctorMario;
  Mario;
  uMario;
  Luigi;
  uLuigi;
  Bowser;
  uBowser;
  Peach;
  uPeach;
  Yoshi;
  uYoshi;
  DonkeyKong;
  uDonkeyKong;
  CaptainFalcon;
  uCaptainFalcon;
  Ganondorf;
  uGanondorf;
  Falco;
  uFalco;
  Fox;
  uFox;
  Ness;
  uNess;
  IceClimbers;
  uIceClimbers;
  Kirby;
  uKirby;
  Samus;
  uSamus;
  Zelda;
  uZelda;
  YoungLink;
  uYoungLink;
  Pichu;
  uPichu;
  Link;
  uLink;
  Pikachu;
  uPikachu;
  Jigglypuff;
  uJigglypuff;
  Mewtwo;
  uMewtwo;
  MrGNW;
  uGNW;
  Marth;
  uMarth;
  Roy;
  uRoy;
  Sheik;
  uSheik;

  DarkSamus;
  Daisy;
  Lucina;
  Chrom;
  MetaKnight;
  Pit;
  DarkPit;
  ZeroSuitSamus;
  Wario;
  Snake;
  Ike;
  PokemonTrainer;
  DiddyKong;
  Lucas;
  Sonic;
  KingDedede;
  Olimar;
  Lucario;
  ROB;
  ToonLink;
  Wolf;
  Villager;
  MegaMan;
  WiiFitTrainer;
  RosalinaLuma;
  LittleMac;
  Greninja;
  Paultena;
  PacMan;
  Robin;
  Shulk;
  BowserJr;
  DuckHunt;
  Ryu;
  Ken;
  Cloud;
  Corrin;
  Bayonetta;
  Inkling;
  Ridley;
  Simon;
  Richter;
  KingKRool;
  Isabelle;
  Incineroar;
  MiiBrawler;
  MiiSwordfighter;
  MiiGunner;
  Palutena;
  FreeSpace;
  constructor() { //start of melee characters
    this.FreeSpace = new Character("Free Space", 26, "./assets/meleeIcons/freespace.png");
    this.DoctorMario = new Character("Dr. Mario", 0, "./assets/meleeIcons/1.png");
    this.Mario = new Character("Mario", 1, "./assets/meleeIcons/2.png");
    this.Luigi = new Character("Luigi", 2, "./assets/meleeIcons/3.png");
    this.Bowser = new Character("Bowser", 3, "./assets/meleeIcons/4.png");
    this.Peach = new Character("Peach", 4, "./assets/meleeIcons/5.png");
    this.Yoshi = new Character("Yoshi", 5, "./assets/meleeIcons/6.png");
    this.DonkeyKong = new Character("Donkey Kong", 6, "./assets/meleeIcons/7.png");
    this.CaptainFalcon = new Character("Captain Falcon", 7, "./assets/meleeIcons/8.png");
    this.Ganondorf = new Character("Ganondorf", 8, "./assets/meleeIcons/9.png");
    this.Falco= new Character("Falco", 9, "./assets/meleeIcons/10.png");
    this.Fox = new Character("Fox", 10, "./assets/meleeIcons/11.png");
    this.Ness = new Character("Ness", 11, "./assets/meleeIcons/12.png");
    this.IceClimbers = new Character("Ice Climbers", 12, "./assets/meleeIcons/13.png");
    this.Kirby = new Character("Kirby", 13, "./assets/meleeIcons/14.png");
    this.Samus = new Character("Samus", 14, "./assets/meleeIcons/15.png");
    this.Zelda = new Character("Zelda", 15, "./assets/meleeIcons/16.png");
    this.Link = new Character("Link", 16, "./assets/meleeIcons/17.png");
    this.YoungLink = new Character("Young Link", 17, "./assets/meleeIcons/18.png");
    this.Pichu = new Character("Pichu", 18, "./assets/meleeIcons/19.png");
    this.Pikachu = new Character("Pikachu", 19, "./assets/meleeIcons/20.png");
    this.Jigglypuff = new Character("Jigglypuff", 20, "./assets/meleeIcons/21.png");
    this.Mewtwo = new Character("Mewtwo", 21, "./assets/meleeIcons/22.png");
    this.MrGNW = new Character("Mr. GNW", 22, "./assets/meleeIcons/23.png");
    this.Marth = new Character("Marth", 23, "./assets/meleeIcons/24.png");
    this.Roy = new Character("Roy", 24, "./assets/meleeIcons/25.png");
    this.Sheik = new Character("Sheik", 25, "./assets/meleeIcons/26.png");
   
    //end of melee characters
    //start of ultimate 2:22 am

    this.uMario = new Character("Mario", 99, "./assets/ultimateIcons/"); //not 25 because i fucked up earlier
    this.uDonkeyKong = new Character("Donkey Kong", 100, "./assets/ultimateIcons/");
    this.uLink = new Character("Link", 27, "./assets/ultimateIcons/");
    this.uSamus = new Character("Samus",28, "./assets/ultimateIcons/");
    this.DarkSamus = new Character("Dark Samus", 29, "./assets/ultimateIcons/");
    this.uYoshi= new Character("Yoshi",30 , "./assets/ultimateIcons/");
    this.uKirby = new Character("Kirby",31 , "./assets/ultimateIcons/");
    this.uFox= new Character("Fox",32 , "./assets/ultimateIcons/");
    this.uPikachu = new Character("Pikachu", 33, "./assets/ultimateIcons/");
    this.uLuigi = new Character("Luigi", 34, "./assets/ultimateIcons/");
    this.uNess = new Character("Ness",35 , "./assets/ultimateIcons/");
    this.uCaptainFalcon = new Character("Captain Falcon",36 , "./assets/ultimateIcons/");
    this.uJigglypuff = new Character("Jigglypuff", 37 , "./assets/ultimateIcons/");
    this.uPeach = new Character("Peach", 38, "./assets/ultimateIcons/");
    this.Daisy = new Character("Daisy", 39, "./assets/ultimateIcons/");
    this.uBowser = new Character("Bowser", 40, "./assets/ultimateIcons/");
    this.uIceClimbers = new Character("Ice Climbers", 41, "./assets/ultimateIcons/");
    this.uSheik = new Character("Sheik", 42, "./assets/ultimateIcons/");
    this.uZelda = new Character("Zelda", 43, "./assets/ultimateIcons/");
    this.uDoctorMario = new Character("Dr. Mario",44 , "./assets/ultimateIcons/");
    this.uPichu = new Character("Pichu", 45, "./assets/ultimateIcons/");
    this.uFalco = new Character("Falco", 46, "./assets/ultimateIcons/");
    this.uMarth = new Character("Marth",47 , "./assets/ultimateIcons/");
    this.Lucina = new Character("Lucina", 48, "./assets/ultimateIcons/");
    this.uYoungLink = new Character("Young Link", 49 , "./assets/ultimateIcons/");
    this.uGanondorf = new Character("Ganondorf", 50, "./assets/ultimateIcons/");
    this.uMewtwo = new Character("Mewtwo", 51, "./assets/ultimateIcons/");
    this.uRoy = new Character("Roy", 52, "./assets/ultimateIcons/");
    this.Chrom = new Character("Chrom", 53, "./assets/ultimateIcons/");
    this.uGNW = new Character("Mr. Game & Watch", 54, "./assets/ultimateIcons/");
    this.MetaKnight = new Character("Meta Knight",55 , "./assets/ultimateIcons/");
    this.Pit = new Character("Pit", 56, "./assets/ultimateIcons/");
    this.DarkPit = new Character("Dark Pit",57, "./assets/ultimateIcons/");
    this.ZeroSuitSamus = new Character("Zero Suit Samus",58, "./assets/ultimateIcons/");
    this.Wario = new Character("Wario", 59, "./assets/ultimateIcons/");
    this.Snake = new Character("Snake", 60, "./assets/ultimateIcons/");

  
    this.Ike = new Character("Ike", 61, "./assets/ultimateIcons/");
    this.PokemonTrainer = new Character("Pokemon Trainer", 62, "./assets/ultimateIcons/");
    this.DiddyKong = new Character("Diddy Kong", 63, "./assets/ultimateIcons/");
    this.Lucas = new Character("Lucas",64, "./assets/ultimateIcons/");
    this.Sonic = new Character("Sonic",65, "./assets/ultimateIcons/");
    this.KingDedede = new Character("King Dedede", 66, "./assets/ultimateIcons/");
    this.Olimar = new Character("Olimar", 67, "./assets/ultimateIcons/");
    this.Lucario = new Character("Lucario", 68, "./assets/ultimateIcons/");
    this.ROB = new Character("R.O.B", 69, "./assets/ultimateIcons/");
    this.ToonLink = new Character("Toon Link", 70, "./assets/ultimateIcons/");
    this.Wolf = new Character("Wolf", 71, "./assets/ultimateIcons/");
    this.Villager = new Character("Villager", 72, "./assets/ultimateIcons/");
    this.MegaMan = new Character("Mega Man", 73, "./assets/ultimateIcons/");
    this.WiiFitTrainer = new Character("Wii Fit Trainer", 74, "./assets/ultimateIcons/");
    this.RosalinaLuma = new Character("Rosalina & Luma", 75, "./assets/ultimateIcons/");
    this.LittleMac = new Character("Little Mac", 76, "./assets/ultimateIcons/");
    this.Greninja = new Character("Greninja", 77, "./assets/ultimateIcons/");
    this.Palutena = new Character("Palutena", 78, "./assets/ultimateIcons/");
    this.PacMan = new Character("PacMan", 79, "./assets/ultimateIcons/");
    this.Robin = new Character("Robin", 80, "./assets/ultimateIcons/");
    this.Shulk = new Character("Shulk", 81, "./assets/ultimateIcons/");
    this.BowserJr = new Character("Bowser Jr.", 82, "./assets/ultimateIcons/");
    this.DuckHunt = new Character("Duck Hunt", 83, "./assets/ultimateIcons/");
    this.Ryu  = new Character("Ryu", 84, "./assets/ultimateIcons/");
    this.Ken = new Character("Ken", 85, "./assets/ultimateIcons/");
    this.Cloud = new Character("Cloud", 86, "./assets/ultimateIcons/");
    this.Corrin = new Character("Corrin", 87, "./assets/ultimateIcons/");
    this.Bayonetta = new Character("Bayonetta", 88, "./assets/ultimateIcons/");
    this.Inkling = new Character("Inkling", 89, "./assets/ultimateIcons/");
    this.Ridley = new Character("Ridley", 90, "./assets/ultimateIcons/");
    this.Simon = new Character("Simon", 91, "./assets/ultimateIcons/");
    this.Richter = new Character("Richter", 92, "./assets/ultimateIcons/");
    this.KingKRool = new Character("King K. Rool", 93, "./assets/ultimateIcons/");
    this.Isabelle = new Character("Isabelle", 94, "./assets/ultimateIcons/");
    this.Incineroar = new Character("Incineroar", 95, "./assets/ultimateIcons/");
    this.MiiBrawler = new Character("Mii Brawler", 96, "./assets/ultimateIcons/");
    this.MiiSwordfighter= new Character("Mii Swordfighter", 97, "./assets/ultimateIcons/");
    this.MiiGunner = new Character("Mii Gunner", 98, "./assets/ultimateIcons/");
    //end of ultimate 2:47am

    
  }
  
getMeleeChars(){
  var x = [this.DoctorMario,this.Mario,this.Luigi,this.Bowser,this.Peach,this.Yoshi,this.DonkeyKong,this.CaptainFalcon,this.Ganondorf,this.Falco,this.Fox,this.Ness,this.IceClimbers,this.Kirby,
  this.Samus, this.Zelda,this.Link, this.YoungLink,this.Pichu,this.Pikachu,this.Jigglypuff,this.Mewtwo,this.MrGNW, this.Marth,this.Roy,this.Sheik, this.FreeSpace];
  return x;
}
getUltimateChars(){
  var y =[this.uMario, this.uDonkeyKong,this.uLink,this.uSamus,this.DarkSamus,this.uYoshi,this.uKirby,this.uFox,this.uPikachu,this.uLuigi,this.uNess,this.uCaptainFalcon,this.uJigglypuff,
  this.uPeach,this.Daisy,this.uBowser,this.uIceClimbers,this.uSheik,this.uZelda,this.uDoctorMario,this.uPichu, this.uFalco,this.uMarth, this.Lucina,this.uYoungLink,this.uGanondorf,
  this.uMewtwo, this.uRoy, this.Chrom, this.uGNW, this.MetaKnight, this.Pit, this.DarkPit, this.ZeroSuitSamus, this.Wario, this.Snake, this.Ike, this.PokemonTrainer, this.DiddyKong,
  this.Lucas, this.Sonic, this.KingDedede, this.Olimar, this.Lucario, this.ROB, this.ToonLink, this.Wolf, this.Villager, this.MegaMan, this.WiiFitTrainer, this.RosalinaLuma, this.LittleMac,
  this.Greninja, this.Palutena, this.PacMan, this.Robin, this.Shulk, this.BowserJr, this.DuckHunt, this.Ryu, this.Ken, this.Cloud, this.Corrin, this.Bayonetta, this.Inkling, 
  this.Ridley, this.Simon, this.Richter, this.KingKRool, this.Isabelle, this.Incineroar, this.MiiBrawler, this.MiiSwordfighter, this.MiiGunner]
  return y;
}

}
