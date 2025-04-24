const capitals = {
    Spain: 'Madrid',
    France: 'Paris',
    Italy: 'Rome',
    Germany: 'Berlin',
    Portugal: 'Lisbon',
    Poland: 'Warsaw',
    Greece: 'Athens',
    Austria: 'Vienna',
    Hungary: 'Budapest',
    Ireland: 'Dublin'
  };
  
  function getCapital(country) {
    if (capitals[country]) {
     return `La capital de ${country} es ${capitals[country]}`;        
    } else {
        return `❌ Lo siento, no tengo información sobre la capital de ${country}.`
    }
  }
  
  console.log(getCapital("France"));
  console.log(getCapital("Spain"));
  console.log(getCapital("Portugal"));
  console.log(getCapital("Noruega"));
