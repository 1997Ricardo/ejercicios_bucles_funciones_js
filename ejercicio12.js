const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' }
  ];
  
  function findMutantByPower(mutants, power) {
    const encontrados = [];
  
    for (const mutant of mutants) {
      if (mutant.power.toLowerCase() === power.toLowerCase()) {
        encontrados.push(mutant.name);
      }
    }
  
    if (encontrados.length > 0) {
      return `✅ Se encontró(n) ${encontrados.length} mutante(s) con el poder "${power}": ${encontrados.join(", ")}`;
    } else {
      return `❌ No se encontró ningún mutante con el poder "${power}".`;
    }
  }
  
  console.log(findMutantByPower(mutants, "telepathy"));
  console.log(findMutantByPower(mutants, "flight"));
  
  