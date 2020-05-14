export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(n: string, descr: string, image: string) {
     this.name = n;
     this.description = descr;
     this.imagePath = image;
  }
}
