//funcion suma
function suma (a,b){
    return a+b;
}
//función de resta
function resta (a,b){
    return a-b;
}
function multi (a,b){
    return a*b;
}
//función de división
function divi (a,b){
    if (b===0){
        return "Error en la división por cero"
    }return a/b;
}
 
//función calculadora
 
function calculadora(num1, num2, operacion){
    switch(operacion){
        case 'suma':
            return suma(num1, num2);
        case 'resta':
                return resta(num1, num2);
        case 'multi':
        return multi(num1, num2);
        case 'divi':
            if(num2!==0){
                return divi(num1, num2);
            }else
            return 'error: División por cero'
         }
}
let numero1=parseFloat(prompt("Ingrese el numero 1"));
let numero2=parseFloat(prompt("Ingrese el numero 2"));
let operacion=prompt("Ingrese la operación (suma, resta, multi, divi)");
 
let resultado=calculadora(numero1,numero2, operacion);
document.write("El resultado es:  " + resultado);