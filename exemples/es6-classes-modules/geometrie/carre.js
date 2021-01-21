import {Rectangle} from './rectangle'

export class Carre extends Rectangle {
  static CARRE = "CARRE"

  constructor(cote) {
    super(cote, cote)
    this.type = Carre.CARRE
  }

  quiSuisJe() {
    super.quiSuisJe()
    console.log("Je suis aussi un " + Carre.CARRE)
  }

  set cote(cote) {
    this.hauteur = cote
    this.largeur = cote
  }

  get cote() {
    return this.hauteur
  }
}