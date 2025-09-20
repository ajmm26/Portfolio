const boton = document.getElementById('morpher');
const imagen = document.getElementById('img-ranger');
const contenedorDeImagen=document.getElementById('contenedor-de-imagen')
const pantallaMorpher=document.getElementById('morpher-oculto');
const superponer=document.getElementById('div-superponer');
const div_img= document.getElementById('div-img');
const contenedorMorpher=document.getElementById('div-morpher');
const botonOculto=document.getElementById('button-oculto');
const pantalla=window;
const ancho = pantalla.innerWidth;



boton.addEventListener('click', function() {
    // Llamar a blur() para quitar el foco del botón
    boton.blur();

    // Llamar a la función mopher para reproducir el primer sonido
    modoDeMorphosis();

});

function mopher() {
    createButtonoFF();
    addClass();
    changeImgRanger();
    // Crear y reproducir el primer sonido
    const sound = document.createElement('audio');
    sound.src = './Sound/sound_morphin.mp3';
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
    audio.src = './Sound/morphin-time.mp3';
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

function changeImgRanger(){

    setTimeout(()=>{

        imagen.src='./img/Morphin.png';

    }, 7000)


}




/*Creacion de boton que desactiva los poderes*/

const buttonOff=document.createElement('button');
buttonOff.className= 'morpher-button';
buttonOff.innerText='Power OFF';


function sonidoPowerOff(){

       const soundPowerOFF = document.createElement('audio');
       soundPowerOFF.src = './Sound/sound_power-off.mp3';
       document.body.appendChild(soundPowerOFF);
       soundPowerOFF.volume=1;
       soundPowerOFF.play();
   
       // Quitar el elemento del DOM después de reproducirlo
       soundPowerOFF.addEventListener('ended', () => {
           document.body.removeChild(soundPowerOFF);
       });

};




function buttonResponsive(){
    sonidoPowerOff();
    setTimeout(()=>{

        buttonOff.remove();
        pantallaMorpher.removeChild(contenedorDeImagen);
        
        pantallaMorpher.style.display='none';
        div_img.appendChild(contenedorMorpher);
        contenedorMorpher.appendChild(boton);
    },1000)
    
}

function buttoNormalWidth(){

    sonidoPowerOff();
    setTimeout(()=>{

        buttonOff.remove();
        imagen.src='./img/Myself.png'
        contenedorMorpher.appendChild(boton)
        contenedorMorpher.style.marginLeft= '0px';


    },1000);

    
};



buttonOff.addEventListener('click',()=>{
    
        buttoNormalWidth();

});




botonOculto.addEventListener('click', ()=>{

    buttonResponsive();

});


function createButtonoFF(ancho){
    if(ancho<=666){
    pantallaMorpher.appendChild(contenedorMorpher);
      contenedorMorpher.appendChild(buttonOff);
      buttonOff.style.position='absolute';
   


    }    
 else{
     setTimeout(()=>{
        boton.remove();
        contenedorMorpher.appendChild(buttonOff);
    }, 7000)
}

}




function modoDeMorphosis(){

if(ancho<=666){
  responsiveMorphosis();  



}

else{
mopher();

}

}






function pantallaOcultaParaMorpher(){
    
    pantallaMorpher.style.display='flex';
    pantallaMorpher.appendChild(contenedorDeImagen);
    contenedorDeImagen.appendChild(superponer);
    
}

function imagenConAnimacionHijo(){
    contenedorDeImagen.style.display='block';
    superponer.style.display='block'
    setTimeout(()=>{
        botonOculto.style.display='block'
    },7000)
    
    

    
    
}


function responsiveMorphosis(){

    pantallaOcultaParaMorpher();
    imagenConAnimacionHijo();
   mopher();
    

    
    
}











