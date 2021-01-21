interface PersonneInterface {
    nom: string
    prenom: string
  }
  
  const unePersonne: PersonneInterface = {
    nom: 'Martin',
    prenom: 'Michel'
  }
  
  function presenter(personne: PersonneInterface) {
    console.log(`Je vous présente ${personne.prenom} ${personne.nom}`)
  }
  
  presenter(unePersonne)
  
  interface PersonneQuiParleInterface extends PersonneInterface {
    parler(message: string)
  }
  
  class Personne implements PersonneQuiParleInterface {
    constructor(public prenom: string, public nom: string) { }
  
    parler(message: string) {
      console.log(`${this.prenom} ${this.nom} : ${message}`)
    }
  }
  
  const uneAutrePersonne = new Personne('Bernard', 'Bavard')
  uneAutrePersonne.parler('Bonjour')