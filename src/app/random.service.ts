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
  PiranhaPlant;
  Joker;
  Banjo;
  Hero;
  Terry;
  Byleth;
  Palutena;

  pmWario
  pmMario
  pmLuigi
  pmPeach
  pmBowser
  pmYoshi
  pmDonkeyKong
  pmDiddyKong
  pmCaptainFalcon
  pmWolf
  pmFox
  pmFalco
  pmIceClimbers
  pmZelda
  pmSheik
  pmLink
  pmToonLink
  pmGanondorf
  pmMewtwo
  pmLucario
  pmPikachu
  pmJigglypuff
  pmSquirtle
  pmIvysaur
  pmCharizard
  pmSamus
  pmZeroSuitSamus
  pmLucas
  pmNess
  pmPit
  pmKirby
  pmMetaKnight
  pmDedede
  pmIke
  pmMarth
  pmRoy
  pmOlimar
  pmROB
  pmGNW
  pmSnake
  pmSonic
  pmKnuckles
  constructor() { //start of melee characters


    this.pmWario = new Character("Wario", 26, "./assets/pmIcons/26.png")
    this.pmMario = new Character("Mario", 27, "./assets/pmIcons/27.png")
    this.pmLuigi = new Character("Luigi", 28, "./assets/pmIcons/28.png")
    this.pmPeach = new Character("Peach", 29, "./assets/pmIcons/29.png")
    this.pmBowser = new Character("Bowser", 30, "./assets/pmIcons/30.png")
    this.pmYoshi = new Character("Yoshi", 31, "./assets/pmIcons/31.png")
    this.pmDonkeyKong = new Character("Donkey Kong", 32, "./assets/pmIcons/32.png")
    this.pmDiddyKong = new Character("Diddy Kong", 33, "./assets/pmIcons/33.png")
    this.pmCaptainFalcon = new Character("Captain Falcon", 34, "./assets/pmIcons/34.png")
    this.pmWolf = new Character("Wolf", 35, "./assets/pmIcons/35.png")
    this.pmFox = new Character("Fox", 36, "./assets/pmIcons/36.png")
    this.pmFalco = new Character("Falco", 37, "./assets/pmIcons/37.png")
    this.pmIceClimbers = new Character("Ice Climbers", 38, "./assets/pmIcons/38.png")
    this.pmZelda = new Character("Zelda", 39, "./assets/pmIcons/39.png")
    this.pmSheik = new Character("Sheik", 40, "./assets/pmIcons/40.png")
    this.pmLink = new Character("Link", 41, "./assets/pmIcons/41.png")
    this.pmToonLink = new Character("Toon Link", 42, "./assets/pmIcons/42.png")
    this.pmGanondorf = new Character("Ganondorf", 43, "./assets/pmIcons/43.png")
    this.pmMewtwo = new Character("Mewtwo", 44, "./assets/pmIcons/44.png")
    this.pmLucario = new Character("Lucario", 45, "./assets/pmIcons/45.png")
    this.pmPikachu = new Character("Pikachu", 46, "./assets/pmIcons/46.png")
    this.pmJigglypuff = new Character("Jigglypuff", 47, "./assets/pmIcons/47.png")
    this.pmSquirtle = new Character("Squirtle", 48, "./assets/pmIcons/48.png")
    this.pmIvysaur = new Character("Ivysaur", 49, "./assets/pmIcons/49.png")
    this.pmCharizard = new Character("Charizard", 50, "./assets/pmIcons/50.png")
    this.pmSamus = new Character("Samus", 51, "./assets/pmIcons/51.png")
    this.pmZeroSuitSamus = new Character("Zero Suit Samus", 52, "./assets/pmIcons/52.png")
    this.pmLucas = new Character("Lucas", 53, "./assets/pmIcons/53.png")
    this.pmNess = new Character("Ness", 54, "./assets/pmIcons/54.png")
    this.pmPit = new Character("Pit", 55, "./assets/pmIcons/55.png")
    this.pmKirby = new Character("Kirby", 56, "./assets/pmIcons/56.png")
    this.pmMetaKnight = new Character("Meta Knight", 57, "./assets/pmIcons/57.png")
    this.pmDedede = new Character("Dedede", 58, "./assets/pmIcons/58.png")
    this.pmIke = new Character("Ike", 59, "./assets/pmIcons/59.png")
    this.pmMarth = new Character("Marth", 60, "./assets/pmIcons/60.png")
    this.pmRoy = new Character("Roy", 61, "./assets/pmIcons/61.png")
    this.pmOlimar = new Character("Olimar", 62, "./assets/pmIcons/62.png")
    this.pmROB = new Character("ROB", 63, "./assets/pmIcons/63.png")
    this.pmGNW = new Character("GNW", 64, "./assets/pmIcons/64.png")
    this.pmSnake = new Character("Snake", 65, "./assets/pmIcons/65.png")
    this.pmSonic = new Character("Sonic", 66, "./assets/pmIcons/66.png")
    this.pmKnuckles = new Character("Knuckles", 147, "./assets/pmIcons/147.png")




    this.DoctorMario = new Character("Dr. Mario", 0, "./assets/meleeIcons/0.png");
    this.Mario = new Character("Mario", 1, "./assets/meleeIcons/1.png");
    this.Luigi = new Character("Luigi", 2, "./assets/meleeIcons/2.png");
    this.Bowser = new Character("Bowser", 3, "./assets/meleeIcons/3.png");
    this.Peach = new Character("Peach", 4, "./assets/meleeIcons/4.png");
    this.Yoshi = new Character("Yoshi", 5, "./assets/meleeIcons/5.png");
    this.DonkeyKong = new Character("Donkey Kong", 6, "./assets/meleeIcons/6.png");
    this.CaptainFalcon = new Character("Captain Falcon", 7, "./assets/meleeIcons/7.png");
    this.Ganondorf = new Character("Ganondorf", 8, "./assets/meleeIcons/8.png");
    this.Falco = new Character("Falco", 9, "./assets/meleeIcons/9.png");
    this.Fox = new Character("Fox", 10, "./assets/meleeIcons/10.png");
    this.Ness = new Character("Ness", 11, "./assets/meleeIcons/11.png");
    this.IceClimbers = new Character("Ice Climbers", 12, "./assets/meleeIcons/12.png");
    this.Kirby = new Character("Kirby", 13, "./assets/meleeIcons/13.png");
    this.Samus = new Character("Samus", 14, "./assets/meleeIcons/14.png");
    this.Zelda = new Character("Zelda", 15, "./assets/meleeIcons/15.png");
    this.Link = new Character("Link", 16, "./assets/meleeIcons/16.png");
    this.YoungLink = new Character("Young Link", 17, "./assets/meleeIcons/17.png");
    this.Pichu = new Character("Pichu", 18, "./assets/meleeIcons/18.png");
    this.Pikachu = new Character("Pikachu", 19, "./assets/meleeIcons/19.png");
    this.Jigglypuff = new Character("Jigglypuff", 20, "./assets/meleeIcons/20.png");
    this.Mewtwo = new Character("Mewtwo", 21, "./assets/meleeIcons/21.png");
    this.MrGNW = new Character("Mr. GNW", 22, "./assets/meleeIcons/22.png");
    this.Marth = new Character("Marth", 23, "./assets/meleeIcons/23.png");
    this.Roy = new Character("Roy", 24, "./assets/meleeIcons/24.png");
    this.Sheik = new Character("Sheik", 25, "./assets/meleeIcons/25.png");

    //end of melee characters
    //start of ultimate 2:22 am

    this.uMario = new Character("Mario", 67, "./assets/ultimateIcons/67.jpeg"); //not 25 because i fucked up earlier
    this.uDonkeyKong = new Character("Donkey Kong", 68, "./assets/ultimateIcons/68.jpeg");
    this.uLink = new Character("Link", 69, "./assets/ultimateIcons/69.jpeg");
    this.uSamus = new Character("Samus", 70, "./assets/ultimateIcons/70.jpeg");
    this.DarkSamus = new Character("Dark Samus", 71, "./assets/ultimateIcons/71.jpeg");
    this.uYoshi = new Character("Yoshi", 72, "./assets/ultimateIcons/72.jpeg");
    this.uKirby = new Character("Kirby", 73, "./assets/ultimateIcons/73.jpeg");
    this.uFox = new Character("Fox", 74, "./assets/ultimateIcons/74.jpeg");
    this.uPikachu = new Character("Pikachu", 75, "./assets/ultimateIcons/75.jpeg");
    this.uLuigi = new Character("Luigi", 76, "./assets/ultimateIcons/76.jpeg");
    this.uNess = new Character("Ness", 77, "./assets/ultimateIcons/77.jpeg");
    this.uCaptainFalcon = new Character("Captain Falcon", 78, "./assets/ultimateIcons/78.jpeg");
    this.uJigglypuff = new Character("Jigglypuff", 79, "./assets/ultimateIcons/79.jpeg");
    this.uPeach = new Character("Peach", 80, "./assets/ultimateIcons/80.jpeg");
    this.Daisy = new Character("Daisy", 81, "./assets/ultimateIcons/81.jpeg");
    this.uBowser = new Character("Bowser", 82, "./assets/ultimateIcons/82.jpeg");
    this.uIceClimbers = new Character("Ice Climbers", 83, "./assets/ultimateIcons/83.jpeg");
    this.uSheik = new Character("Sheik", 84, "./assets/ultimateIcons/84.jpeg");
    this.uZelda = new Character("Zelda", 85, "./assets/ultimateIcons/85.jpeg");
    this.uDoctorMario = new Character("Dr. Mario", 86, "./assets/ultimateIcons/86.jpeg");
    this.uPichu = new Character("Pichu", 87, "./assets/ultimateIcons/87.jpeg");
    this.uFalco = new Character("Falco", 88, "./assets/ultimateIcons/88.jpeg");
    this.uMarth = new Character("Marth", 89, "./assets/ultimateIcons/89.jpeg");
    this.Lucina = new Character("Lucina", 90, "./assets/ultimateIcons/90.jpeg");
    this.uYoungLink = new Character("Young Link", 91, "./assets/ultimateIcons/91.jpeg");
    this.uGanondorf = new Character("Ganondorf", 92, "./assets/ultimateIcons/92.jpeg");
    this.uMewtwo = new Character("Mewtwo", 93, "./assets/ultimateIcons/93.jpeg");
    this.uRoy = new Character("Roy", 94, "./assets/ultimateIcons/94.jpeg");
    this.Chrom = new Character("Chrom", 95, "./assets/ultimateIcons/95.jpeg");
    this.uGNW = new Character("GNW", 96, "./assets/ultimateIcons/96.jpeg");
    this.MetaKnight = new Character("Meta Knight", 97, "./assets/ultimateIcons/97.jpeg");
    this.Pit = new Character("Pit", 98, "./assets/ultimateIcons/98.jpeg");
    this.DarkPit = new Character("Dark Pit", 99, "./assets/ultimateIcons/99.jpeg");
    this.ZeroSuitSamus = new Character("Zero Suit Samus", 100, "./assets/ultimateIcons/100.jpeg");
    this.Wario = new Character("Wario", 101, "./assets/ultimateIcons/101.jpeg");
    this.Snake = new Character("Snake", 102, "./assets/ultimateIcons/102.jpeg");


    this.Ike = new Character("Ike", 103, "./assets/ultimateIcons/103.jpeg");
    this.PokemonTrainer = new Character("Pokemon Trainer", 104, "./assets/ultimateIcons/104.jpeg");
    this.DiddyKong = new Character("Diddy Kong", 105, "./assets/ultimateIcons/105.jpeg");
    this.Lucas = new Character("Lucas", 106, "./assets/ultimateIcons/106.jpeg");
    this.Sonic = new Character("Sonic", 107, "./assets/ultimateIcons/107.jpeg");
    this.KingDedede = new Character("King Dedede", 108, "./assets/ultimateIcons/108.jpeg");
    this.Olimar = new Character("Olimar", 109, "./assets/ultimateIcons/109.jpeg");
    this.Lucario = new Character("Lucario", 110, "./assets/ultimateIcons/110.jpeg");
    this.ROB = new Character("R.O.B", 111, "./assets/ultimateIcons/111.jpeg");
    this.ToonLink = new Character("Toon Link", 112, "./assets/ultimateIcons/112.jpeg");
    this.Wolf = new Character("Wolf", 113, "./assets/ultimateIcons/113.jpeg");
    this.Villager = new Character("Villager", 114, "./assets/ultimateIcons/114.jpeg");
    this.MegaMan = new Character("Mega Man", 115, "./assets/ultimateIcons/115.jpeg");
    this.WiiFitTrainer = new Character("Wii Fit Trainer", 116, "./assets/ultimateIcons/116.jpeg");
    this.RosalinaLuma = new Character("Rosalina", 117, "./assets/ultimateIcons/117.jpeg");
    this.LittleMac = new Character("Little Mac", 118, "./assets/ultimateIcons/118.jpeg");
    this.Greninja = new Character("Greninja", 119, "./assets/ultimateIcons/119.jpeg");
    this.Palutena = new Character("Palutena", 120, "./assets/ultimateIcons/120.jpeg");
    this.PacMan = new Character("Pac-Man", 121, "./assets/ultimateIcons/121.jpeg");
    this.Robin = new Character("Robin", 122, "./assets/ultimateIcons/122.jpeg");
    this.Shulk = new Character("Shulk", 123, "./assets/ultimateIcons/123.jpeg");
    this.BowserJr = new Character("Bowser Jr.", 124, "./assets/ultimateIcons/124.jpeg");
    this.DuckHunt = new Character("Duck Hunt", 125, "./assets/ultimateIcons/125.jpeg");
    this.Ryu = new Character("Ryu", 126, "./assets/ultimateIcons/126.jpeg");
    this.Ken = new Character("Ken", 127, "./assets/ultimateIcons/127.jpeg");
    this.Cloud = new Character("Cloud", 128, "./assets/ultimateIcons/128.jpeg");
    this.Corrin = new Character("Corrin", 129, "./assets/ultimateIcons/129.jpeg");
    this.Bayonetta = new Character("Bayonetta", 130, "./assets/ultimateIcons/130.jpeg");
    this.Inkling = new Character("Inkling", 131, "./assets/ultimateIcons/131.jpeg");
    this.Ridley = new Character("Ridley", 132, "./assets/ultimateIcons/132.jpeg");
    this.Simon = new Character("Simon", 133, "./assets/ultimateIcons/133.jpeg");
    this.Richter = new Character("Richter", 134, "./assets/ultimateIcons/134.jpeg");
    this.KingKRool = new Character("King K. Rool", 135, "./assets/ultimateIcons/135.jpeg");
    this.Isabelle = new Character("Isabelle", 136, "./assets/ultimateIcons/136.jpeg");
    this.Incineroar = new Character("Incineroar", 137, "./assets/ultimateIcons/137.jpeg");
    this.MiiBrawler = new Character("Mii Brawler", 138, "./assets/ultimateIcons/138.jpeg");
    this.MiiSwordfighter = new Character("Mii Swordfighter", 139, "./assets/ultimateIcons/139.jpeg");
    this.MiiGunner = new Character("Mii Gunner", 140, "./assets/ultimateIcons/140.jpeg");
    this.PiranhaPlant = new Character("Piranha Plant", 141, "./assets/ultimateIcons/141.jpeg")
    this.Joker = new Character("Joker", 142, "./assets/ultimateIcons/142.jpeg")
    this.Banjo = new Character("Banjo", 143, "./assets/ultimateIcons/143.jpeg")
    this.Hero = new Character("Hero", 144, "./assets/ultimateIcons/144.jpeg")
    this.Terry = new Character("Terry", 145, "./assets/ultimateIcons/145.jpeg")
    this.Byleth = new Character("Byleth", 146, "./assets/ultimateIcons/146.jpeg")

    //end of ultimate 2:47am

    //its 2:56am a different night, no regrets tho that monster was taste

  }
  getPMChars() {
    var z = [this.pmBowser, this.pmWario, this.pmMario, this.pmLuigi, this.pmPeach, this.pmYoshi, this.pmDonkeyKong, this.pmDiddyKong, this.pmCaptainFalcon, this.pmWolf, this.pmFox, this.pmFalco, this.pmIceClimbers, this.pmZelda,
    this.pmSheik, this.pmLink, this.pmToonLink,this.pmGanondorf, this.pmMewtwo, this.pmLucario, this.pmPikachu, this.pmJigglypuff, this.pmSquirtle, this.pmIvysaur, this.pmCharizard, this.pmSamus, this.pmZeroSuitSamus, this.pmLucas
    , this.pmNess, this.pmPit, this.pmKirby, this.pmMetaKnight, this.pmDedede, this.pmIke, this.pmMarth, this.pmRoy, this.pmOlimar, this.pmROB, this.pmGNW, this.pmSnake, this.pmSonic, this.pmKnuckles]
    return z;
  }
  getMeleeChars() {
    var x = [this.DoctorMario, this.Mario, this.Luigi, this.Bowser, this.Peach, this.Yoshi, this.DonkeyKong, this.CaptainFalcon, this.Ganondorf, this.Falco, this.Fox, this.Ness, this.IceClimbers, this.Kirby,
    this.Samus, this.Zelda, this.Link, this.YoungLink, this.Pichu, this.Pikachu, this.Jigglypuff, this.Mewtwo, this.MrGNW, this.Marth, this.Roy, this.Sheik];
    return x;
  }
  getUltimateChars() {
    var y = [this.uMario, this.uDonkeyKong, this.uLink, this.uSamus, this.DarkSamus, this.uYoshi, this.uKirby, this.uFox, this.uPikachu, this.uLuigi, this.uNess, this.uCaptainFalcon, this.uJigglypuff,
    this.uPeach, this.Daisy, this.uBowser, this.uIceClimbers, this.uSheik, this.uZelda, this.uDoctorMario, this.uPichu, this.uFalco, this.uMarth, this.Lucina, this.uYoungLink, this.uGanondorf,
    this.uMewtwo, this.uRoy, this.Chrom, this.uGNW, this.MetaKnight, this.Pit, this.DarkPit, this.ZeroSuitSamus, this.Wario, this.Snake, this.Ike, this.PokemonTrainer, this.DiddyKong,
    this.Lucas, this.Sonic, this.KingDedede, this.Olimar, this.Lucario, this.ROB, this.ToonLink, this.Wolf, this.Villager, this.MegaMan, this.WiiFitTrainer, this.RosalinaLuma, this.LittleMac,
    this.Greninja, this.Palutena, this.PacMan, this.Robin, this.Shulk, this.BowserJr, this.DuckHunt, this.Ryu, this.Ken, this.Cloud, this.Corrin, this.Bayonetta, this.Inkling,
    this.Ridley, this.Simon, this.Richter, this.KingKRool, this.Isabelle, this.Incineroar, this.MiiBrawler, this.MiiSwordfighter, this.MiiGunner
      , this.PiranhaPlant, this.Joker, this.Hero, this.Banjo, this.Terry, this.Byleth
    ]
    return y;
  }
  /**
   * returns the melee character count (26 including sheik and no additional chars)
   */
  getMeleeCharCount() {
    var n = Array.from(Array(27).keys()) //has to be +1 cuz keys starts at 0
    n.shift()
    return n
  }
  /**
   * returns ultimate character count (80 as of byleth)
   */
  getUltimateCharCount() {
    var n = Array.from(Array(81).keys()) //has to be +1 cuz keys starts at 0
    n.shift()
    return n
  }
  /**
   * returns PM char count (41 as of now, p+ just came out and dont konw if it changed)
   */
  getPMcharCount() {
    var n = Array.from(Array(42).keys()) //has to be +1 cuz keys starts at 0
    n.shift()
    return n
  }
  /**
   * Give it ultimate melee or pm and itll return players
   * @returns array of "1,2,3..." for
  */
  getPlayerCount(game:string){
    if(game.toLocaleLowerCase() == "melee" || game.toLocaleLowerCase() == "pm")
      return [1,2,3,4]
    else if(game.toLocaleLowerCase() == "ultimate") return [1,2,3,4,5,6,7,8]
  }
  /**
   * Shuffles an array
   * @param array array to shuffle
   */
  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  /**
   * Return random list from melee
   * @param disabled an array of numbers that are the IDs of chars you dont want
   */
  randomizeMelee(disabled: number[]) { 
    
    var characters = this.getMeleeChars().filter(element => !disabled.includes(element.id.toString() )) //takes out disabled chars
    this.shuffle(characters) //makes it random
    return characters
  }
  
  /**
   * Return random list from pm
   * @param disabled an array of numbers that are the IDs of chars you dont want
   */
  randomizePM(disabled: number[]){
    var characters = this.getPMChars().filter(element =>!disabled.includes(element.id.toString()) ) //takes out disabled chars
    this.shuffle(characters) //makes it random
    return characters
  }
  /**
   * Return random list from ultimate
   * @param disabled an array of numbers that are the IDs of chars you dont want
   */
  randomizeUltimate(disabled: number[]){
    var characters = this.getUltimateChars().filter(element => !disabled.includes(element.id.toString())) //takes out disabled chars. It's defaulting to a string or something im not sure i'm on work break doing this
    this.shuffle(characters) //makes it random
    return characters
  }

}
