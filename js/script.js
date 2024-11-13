const botones = document.querySelectorAll('.boton-jugada');
const resultadoDiv = document.getElementById('resultados');
const contadorUsuario = document.getElementById('contador-usuario');
const contadorOrdenador = document.getElementById('contador-ordenador');

// Inicializamos los contadores de puntos
let puntosUsuario = 0;
let puntosOrdenador = 0;

// Función para obtener la jugada aleatoria del ordenador
function obtenerJugadaOrdenador() {
  const jugadas = ['piedra', 'papel', 'tijera'];
  const indiceAleatorio = Math.floor(Math.random() * jugadas.length);
  return jugadas[indiceAleatorio];
}

// Función para determinar el ganador
function determinarGanador(jugadaUsuario, jugadaOrdenador) {
  if (jugadaUsuario === jugadaOrdenador) {
    return 'Empate';
  } 
  if (
    (jugadaUsuario === 'piedra' && jugadaOrdenador === 'tijera') ||
    (jugadaUsuario === 'papel' && jugadaOrdenador === 'piedra') ||
    (jugadaUsuario === 'tijera' && jugadaOrdenador === 'papel')
  ) {
    puntosUsuario++;
    return 'Ganaste';
  } else {
    puntosOrdenador++;
    return 'Perdiste';
  }
}

// Función para actualizar el resultado y los contadores en el HTML
function actualizarResultado(mensaje) {
  resultadoDiv.textContent = mensaje;
  contadorUsuario.textContent = `Tus puntos: ${puntosUsuario}`;
  contadorOrdenador.textContent = `Puntos de la máquina: ${puntosOrdenador}`;
}

// Agregamos eventos de clic a cada botón
botones.forEach(boton => {
  boton.addEventListener('click', () => {
    const jugadaUsuario = boton.getAttribute('data-jugada');
    const jugadaOrdenador = obtenerJugadaOrdenador();
    const resultado = determinarGanador(jugadaUsuario, jugadaOrdenador);
    actualizarResultado(
      `Elegiste ${jugadaUsuario}, la máquina eligió ${jugadaOrdenador}. Resultado: ${resultado}`
    );
  });
});