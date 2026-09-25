const funciones = require('./funciones.js');

 ///////////////Calculadora de descuento/////////////////
 
 
test('Descuento de 20% a 1000 es igual a 800', () => {
    expect(funciones.calcularDescuento(1000,20)).toBe(800);
});

test('Descuento de 10% a 500 es igual a 500', () => {
    expect(funciones.calcularDescuento(500, 10)).toBe(450);
});

test('Descuento de 20% a 400 es igual a 80', () => {
    expect(funciones.calcularDescuento(400, 20)).toBe(320);
});


///////////////// Validación de contraseña /////////////////
 
test('La Contraseña abc12345 es válida.',() => {
    expect(funciones.validarPassword("abc12345")).toBeTruthy();
 });

 test('La Contraseña abcdef no contiene números.',() => {
    expect(funciones.validarPassword("abcdef")).toBeFalsy();
 });

 test('La Contraseña c1234567 es válida.',() => {
    expect(funciones.validarPassword("c1234567")).toBeTruthy();
 }); 


 ///////////////// Conversor de temperatura /////////////////
 
test('La Conversión de 0 celsius a Fahrenheit es 32', () => {
    expect(funciones.celsiusAFahrenheit(0)).toBe(32);
});

test('La Conversión de 25 celsius a Fahrenheit es 77', () => {
    expect(funciones.celsiusAFahrenheit(25)).toBe(77);
});

test('La Conversión de -10 celsius a Fahrenheit es 14', () => {
    expect(funciones.celsiusAFahrenheit(-10)).toBe(14);
});


/////////////////////Mayoria de edad ////////////////////////

test('Quien tenga 18 años es mayor de edad',() => {
    expect(funciones.esMayorDeEdad(18)).toBeTruthy();
});

test('Quien tenga 25 años es mayor de edad',() => {
    expect(funciones.esMayorDeEdad(25)).toBeTruthy();
});

test('Quien tenga 16 años no es mayor de edad',() => {
    expect(funciones.esMayorDeEdad(16)).toBeFalsy();
});

 
///////////////////Nombre Completo ///////////////////////

test('El nombre agregado es Ana Martínez', () => {
    expect(funciones.generarNombreCompleto("Ana", "Martínez")).toContain('El nombre completo es Ana Martínez')
});

test('El nombre agregado es Luis Ramírez', () => {
    expect(funciones.generarNombreCompleto("Luis", "Ramírez")).toContain('El nombre completo es Luis Ramírez')
}); 

test('El nombre agregado es José José', () => {
    expect(funciones.generarNombreCompleto("José", "José")).toContain('El nombre completo es José José')
}); 
