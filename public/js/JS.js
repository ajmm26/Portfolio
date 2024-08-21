
const boton = document.getElementById('morpher');

boton.addEventListener('click', function() {
    // Llamar a blur() para quitar el foco del botón
    boton.blur();

    // Llamar a la función mopher para reproducir el primer sonido
    mopher();
});

function mopher() {
    // Crear y reproducir el primer sonido
    const sound = document.createElement('audio');
    sound.src = 'Sound/sound_morphin.mp3';
    sound.volume= 0.5;
    document.body.appendChild(sound);
    sound.play();

    // Quitar el elemento del DOM después de reproducirlo
    sound.addEventListener('ended', () => {
        document.body.removeChild(sound);
    });

    // Reproducir el segundo sonido después de 4 segundos
    setTimeout(segundoSonido, 3000);
}

function segundoSonido() {
    // Crear y reproducir el segundo sonido
    const audio = document.createElement('audio');
    audio.src = 'Sound/morphin-time.mp3';
    document.body.appendChild(audio);
    audio.play();

    // Quitar el elemento del DOM después de reproducirlo
    audio.addEventListener('ended', () => {
        document.body.removeChild(audio);
    });
}
