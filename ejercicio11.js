const movies = [
    { title: 'Inception', duration: 148 },
    { title: 'The Dark Knight', duration: 152 },
    { title: 'Interstellar', duration: 169 },
    { title: 'Dunkirk', duration: 106 },
    { title: 'The Prestige', duration: 130 },
    { title: 'Memento', duration: 113 },
    { title: 'Batman Begins', duration: 140 },
    { title: 'The Dark Knight Rises', duration: 164 },
    { title: 'Tenet', duration: 150 },
    { title: 'Insomnia', duration: 118 }
  ];
  
  function averageMovieDuration(movies) {
    let totalDuracion = 0;

    for (const pelicula of movies) {
        totalDuracion += pelicula.duration;
    }
    const promedio = totalDuracion / movies.length;
    return promedio;
  }
  
  const resultado = averageMovieDuration(movies);
  console.log("🎬 Promedio de duración:", resultado , "minutos");
  