//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function MakeSFCharacter (punch, kick, catchPhrase, specialMove){
    this.punch = punch
    this.kick = kick
    this.catchPhrase = catchPhrase
    this.specialMove = specialMove
    this.taunt = function () {
    console.log (`You cant handle my ${this.specialMove}`)
    }
    this.winning = function () {
    console.log (`Haha! ${this.catchPhrases}`)
    }
    this.dash = function (){
        console.log('missed me')
    }
}

let fighter1 = new MakeSFCharacter ('stron', 'skinny', 'rubeus' '1.20')

let fighter2 = new MakeSFCharacter ('super', 'skinny', 'adults' '1.70')