function saludar(){
    document.write("Hola mundo<br>");
}
window.setTimeout(saludar, 5000);

setTimeout(() =>{
    document.write("dia nublado<br>");
}, 2000);

//setInterval(saludar,2000);

const idIntervalo= setInterval(saludar, 2000);

setTimeout(() =>{clearInterval(idIntervalo)}, 6000);

/*setInterval(() =>{
    clearInterval(idIntervalo,10000);
});
*/
//clearInterval(idIntervalo);