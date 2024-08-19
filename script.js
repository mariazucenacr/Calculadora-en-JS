//Esta funcion agrega a la pantalla el boton de la calculadora que se haga click
function agregar(valor){
    document.getElementById('pantalla').value +=valor;
}

//Esta funcion es para limpiar el contenido en el input "pantalla"
function borrar(){
    document.getElementById('pantalla').value = '';
}

//Esta funcion toma los valores del input y ejecuta los calculos
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value;
    //la funcion eval toma un string y ejecuta como si fuera una accion javascript
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado;
}