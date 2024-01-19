//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods


function StreetFighter(colorMake, weidthMake, sizemake, locationFrom) {
    // Propiedades del personaje
    this.color = colorMake;
    this.weidth = weidthMake;
    this.size = sizemake;
    this.location = locationFrom;
  
    // Métodos del personaje
    this.fight = function() {
      alert('hello');
    };
  
    this.time = function() {
      alert('hello world');
    };
  
    this.team = function() {
      alert('hello there');
    };
  }
  
  // Crear una instancia de StreetFighter
  var personaje1 = new StreetFighter('Red', 'Medium', 'Large', 'Japan');
  
  // Llamando a métodos del personaje
  personaje1.fight();
  personaje1.time();
  personaje1.team();
  