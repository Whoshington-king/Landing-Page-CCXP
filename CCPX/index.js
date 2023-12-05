const dia = document.getElementById ('dia');
const hora = document.getElementById ('hora');
const minuto = document.getElementById ('min');
const segundo = document.getElementById ('segun');

const lancamento = "01 December 2023"

function countDown(){
    const dataLance = new Date(lancamento);
    const hoje = new Date()


const segTotal = (dataLance - hoje) / 1000;

const finalDias = Math.floor(segTotal / 60 / 60 / 24);
const finalHoras = Math.floor(segTotal / 60 / 60 ) % 24;
const finalMinutos = Math.floor(segTotal / 60 ) % 60;
const finalSegundos = Math.floor(segTotal) % 60;

dia.innerHTML = finalDias
hora.innerHTML = formatoTempo (finalHoras)
minuto.innerHTML = formatoTempo (finalMinutos)
segundo.innerHTML = formatoTempo (finalSegundos)

}

function formatoTempo( tempo ){
    return tempo < 10? `0${tempo}` : tempo;
}

countDown();
setInterval(countDown, 1000)

const ingresso = [];

function hightlightCard(selector) {
var element = document.querySelector(selector);   
element.classList.toggle("card-higthlight"); 
}

function checkKeyboardCode(){
document.addEventListener('keydown', (event) => {
var name = event.key;
var code = event.code;
    alert(`Tecla Pressionada ${name} \r\n Key code: ${code}`);
}, false);
}
function addKeyboardEventListeners(){ 
    document.addEventListener('keydown', (event) => {
        var ingresso1 = document.getElementById("quinta");
        var ingresso2 = document.getElementById("sexta");
        var ingresso3 = document.getElementById("esgot");
        var ingresso4 = document.getElementById("domi");

        var code = event.code;
        if(code == 'Digit1'){
            ingresso1.classList.toggle("card-higthlight");
            ingresso2.classList.remove("card-higthlight");
            ingresso3.classList.remove("card-higthlight");
            ingresso4.classList.remove("card-higthlight");
        }
        
        if(code == 'Digit2'){
            ingresso1.classList.remove("card-higthlight");
            ingresso2.classList.toggle("card-higthlight");
            ingresso3.classList.remove("card-higthlight");
            ingresso4.classList.remove("card-higthlight");
        }
        if(code == 'Digit3'){
            ingresso1.classList.remove("card-higthlight");
            ingresso2.classList.remove("card-higthlightt");
            ingresso3.classList.toggle("card-higthlight");
            ingresso4.classList.remove("card-higthlight");
        }
        
        if(code == 'Digit4'){
            ingresso1.classList.remove("card-higthlight");
            ingresso2.classList.remove("card-higthlight");
            ingresso3.classList.remove("card-higthlight");
            ingresso4.classList.toggle("card-higthlight");
        }
    }, false);
}
addKeyboardEventListeners();
