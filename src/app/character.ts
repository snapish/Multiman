export class Character{
name: string; // character name
id: number; //id to make logic easier, not an actual thing
img: string; //path to icon
finished: boolean; //if the character was clicked on the rosters
constructor(n: string, idPassed: number, imgPassed: string){
    this.id = idPassed;
    this.name = n;
    this.img = imgPassed;
}
}