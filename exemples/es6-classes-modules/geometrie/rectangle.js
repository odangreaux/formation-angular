export class Rectangle {
  static RECTANGLE = "RECTANGLE"

  constructor(hauteur, largeur) {
    this.hauteur = hauteur
    this.largeur = largeur
  }

  quiSuisJe() {
    console.log("Je suis un " + Rectangle.RECTANGLE)
  }

  aire() {
    return this.hauteur * this.largeur
  }
}