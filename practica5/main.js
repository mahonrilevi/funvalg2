let tusaldo = 0 
let opcion;

do{
    opcion = prompt("Bienbenido al banco de la empresa Baes.\n\nElige una opcion:\n1. Ingresa quetzales\n2. Retira Quetzales\n3. Consulta de dinero.\n4. salir");
 if (opcion === "1"){
    let ingreso = parseFloat(prompt("¡cuanto deseas insertar?"));
    if (ingreso > 0 ){
        tusaldo += ingreso;
        alert("haz ingresado $" + ingreso.toFixed(2) + ".\nNuevo saldo: $" + tusaldo.toFixed(2));
    }else {
        alert("no valida");
    }
}else if (opcion === "2"){
    let retirar = parseFloat(prompt("cuanto requieres sacar"));
    if (retirar > 0 && retirar <= tusaldo){
        tusaldo -= retirar;
     alert("Has retirado $" + retirar.toFixed(2) );
    } else if( retirar > tusaldo){
        alert("Fondos insuficientes" );
    }else {
        alert("la cantidad no fue valida")
    }
} else if (opcion === "3"){
    alert("tu saldo es de: Q" + tusaldo.toFixed(2));
} else if (opcion !== "4"){
    alert("la opcion que a ingresado do es correcta intentelo otra vez");
    }

} while (opcion !== "4");
alert("agradecemos su preferecia poe el banco Baes tenga un lindo dia!")