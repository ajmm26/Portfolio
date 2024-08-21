
const boton = document.getElementById('morpher');
const imagen = document.getElementById('img-ranger');
const superponer=document.getElementById('div-superponer');
const contenedorMorpher=document.getElementById('div-morpher');

boton.addEventListener('click', function() {
    // Llamar a blur() para quitar el foco del botón
    boton.blur();

    // Llamar a la función mopher para reproducir el primer sonido
    mopher();
});

function mopher() {
    createButtonoFF();
    addClass();
    changeImg();
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
    audio.volume=1;
    audio.play();

    // Quitar el elemento del DOM después de reproducirlo
    audio.addEventListener('ended', () => {
        document.body.removeChild(audio);
    });
}

function addClass(){

    superponer.classList.add('superponer');
    setTimeout(() => {
        superponer.classList.remove('superponer');
    }, 7000); // Ajusta el tiempo según tus necesidades
}

function changeImg(){

    setTimeout(()=>{

        imagen.src='img/Morphin.webp';

    }, 7000)


}




/*Creacion de boton que desactiva los poderes*/

function createButtonoFF(){

    const buttonOff=document.createElement('button');
    
    
    setTimeout(()=>{
        buttonOff.id= 'morpher';
        buttonOff.innerText='Power OFF';
        contenedorMorpher.style.marginLeft= '19%'
        boton.remove();
        contenedorMorpher.appendChild(buttonOff);
    }, 7000)


    buttonOff.addEventListener('click',()=>{
     buttonOff.remove();
     imagen.src='img/Myself.png'
     contenedorMorpher.appendChild(boton)
     contenedorMorpher.style.marginLeft= '0px';


    })



}
