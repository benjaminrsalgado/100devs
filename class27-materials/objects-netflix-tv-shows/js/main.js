//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class MakeSerie{
    constructor(netflix1, netflix2, netflix3,netflix4){
        this.movie1 = netflix1
        this.movie2 = netflix2
        this.movie3 = netflix3
        this.mobie4 =netflix4
    }
    
    play(){
        alert(`Also Taylor Swift likes this Tv show ${this.movie3} you are swiftie`)
        }
    
    second(){
        alert(`this is the best ${this.movie1} ever!`)
    }
}


let person = new MakeSerie ('Gossip Girl', 'Gilmore', 'Greys Anatomy')
