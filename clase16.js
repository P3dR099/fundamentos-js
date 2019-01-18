const signo = prompt('Cual es tu signo');

console.log(signo);

switch (signo) {

  case 'tauro':
    console.log('Un Tauro suele ser práctico, decidido y tener una gran fuerza de voluntad.' +
      ' Los Tauro son personas estables y conservadores, seguirán de forma leal un líder en el que tienen confianza. ' +
      'Les encanta la paz y tranquilidad y son muy respetuosos con las leyes y las reglas. ' +
      'Respetan los valores materiales y evitan las deudas. Son un poco reacios al cambio. Son más prácticos que intelectuales y, como les gusta la continuidad y la rutina, suelen ser de ideas fijas. ' +
      'Los Tauro son prudentes, estables y tienen un gran sentido de la justicia. No suelen hundirse ante las dificultades sino que siguen adelante hasta salir.' +
      ' A veces los Tauro pueden ser demasiado rígidos, argumentativos, egocéntricos y tercos. A los Tauro les gustan las cosas bellas y suelen ser aficionados al arte y la música.');
    break;

  case 'piscis':
    console.log('Un Piscis tiene una personalidad tranquila, paciente y amable. Son sensibles a los sentimientos de los demás y responden con simpatía y tacto al sufrimiento de los demás.' +
      ' Son muy queridos por los demás porque tienen un carácter afable, cariñoso y amable, y no suponen una amenaza para los que quieren tener puestos de autoridad o mayor popularidad.' +
      ' Suelen asumir su entorno y sus circunstancias y no suelen tomar la iniciativa para resolver problemas. ' +
      'Les preocupan más los problemas de otros que sus propios problemas. ' +
      'Los Piscis tienden a existir de forma emocional más que de forma racional, de forma instintiva más que de forma intelectual.');
    break;
  case 'cancer':
  case 'cáncer':
    console.log('El carácter de un Cáncer es el menos claro de todos los signos del zodiaco.' +
      ' Un Cáncer puede ser desde tímido y aburrido hasta brillante y famoso. Los Cáncer son conservadores y les encanta la seguridad y el calor de su hogar.' +
      ' De hecho, para los hombres Cáncer, su hogar es como un nido, un refugio donde ir cuando el estrés de su trabajo es demasiado.' +
      ' La casa de un Cáncer tiende a ser su refugio personal más que un escaparate para deslumbrar a los demás. ' +
      'Un Cáncer entiende que hay momentos para ser sociable y otros momentos para ser solitario. ' +
      'Esto es una de las contradicciones en su carácter. Desde fuera parecen decididos, resistentes, tercos, tenaces, energéticos, sabios e intuitivos. ');
    break;
  default:
    console.log('No se encuentra el signo introducido');
    break;

}
