export class Character{
name: string; // character name
id: number; //id to make logic easier, not an actual thing
img: string; //path to icon
constructor(n: string, idPassed: number, imgPassed: string){
    this.id = idPassed;
    this.name = n;
    this.img = imgPassed;
}
}