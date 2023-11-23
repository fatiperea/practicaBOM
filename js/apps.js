function saludar(){
    document.write("Hola mundo");
}
window.setTimeout(saludar, 5000)

setTimeout(() =>{
    document.write("dia nublaado");
}, 2000);

const idIntervalo= setInterval(saludar, 2000);

setInterval(() =>{
    clearInterval(idIntervalo,10000);
});

//clearInterval(idIntervalo);