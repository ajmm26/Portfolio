const botonMenuTemaClaro = document.getElementById('boton-tema-claro');
const menuDesplegable= document.getElementById('menu-desplegable');
const equis=document.getElementById('div-equis-interno');
const divModoDeCambio=document.getElementById('modoDeTema');
const hijos=divModoDeCambio.children;
const parrafo=document.createElement('p');
const luna=document.createElement('img');


botonMenuTemaClaro.addEventListener('click', ()=>{

ImagenTemaClaroCambio();
textoModoClaroCambio();
menuDesplegable.style.display='flex';

})



equis.addEventListener('click',()=>{
    menuDesplegable.style.display='none';
    hijos[1].removeChild(parrafo);
    hijos[0].removeChild(luna)

})



function textoModoClaroCambio(){
 
    parrafo.id="texto-modo-oscuro"
    parrafo.innerText='Modo Oscuro';
    hijos[1].appendChild(parrafo);



}


function ImagenTemaClaroCambio(){

hijos[0].appendChild(luna);
luna.id='imagen-modo';
luna.src='img/luna.png';



}