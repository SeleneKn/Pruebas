
//////////////// CALCULAR DESCUENTO///////////////////////


function calcularDescuento(precio, porcentaje) {
    const resultado = (precio * porcentaje) / 100 ;

   if(porcentaje <= 0 || porcentaje > 100){
     alert("Porcentaje inválido");
   } else {
        return precio - resultado;
   }

} //Descuento 


module.exports.calcularDescuento = calcularDescuento;


/////////////////////VALIDAR PASSWORD/////////////////////

function validarPassword(password){
   const passwordRegex = /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
   
if(!passwordRegex.test(password)){
       return false;
}else {
       return true;
}   
};



module.exports.validarPassword = validarPassword;


/////////////////////CONVERSOR DE TEMPERATURA/////////////////////

function celsiusAFahrenheit(celsius){
    const Fahren = (celsius *(9/5)) + 32;
     return Fahren;
    }
  
module.exports.celsiusAFahrenheit = celsiusAFahrenheit;



/////////////////////CONVERSOR DE TEMPERATURA/////////////////////

function esMayorDeEdad(edad){

  if(edad >= 18){
    return true
  } else {
    return false
  }
 }

  module.exports.esMayorDeEdad = esMayorDeEdad; 


  ///////////////////GENERADOR DE NOMBRE//////////////////////////

  function generarNombreCompleto(nombre, apellido){
        const nombreCompleto = (`${nombre} ${apellido}`);
        return(`El nombre completo es ${nombreCompleto}`);

}  


module.exports.generarNombreCompleto = generarNombreCompleto; 