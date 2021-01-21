class Rectangle {
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
  
  class Carre extends Rectangle {
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
  
  let rectangle = new Rectangle(10, 20)
  rectangle.quiSuisJe()
  console.log(rectangle.aire())
  
  let carre = new Carre(10)
  carre.quiSuisJe()
  carre.cote = 5
  console.log(carre.cote)
  console.log(carre.aire())