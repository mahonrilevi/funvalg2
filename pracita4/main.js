

function calcularAreaCuadrada(){
    let ladito =parseFloat(prompt("ingresa el ladito del cuadrado"))
    if (isNaN(ladito) || ladito <= 0) {
        alert('valor invalido. debe dar un numero mayor a 0')
        return
    } let area = ladito * ladito;
    alert("el cuadro es:" + area);
}

function calcularAreaRectangulo(){
    let base =parseFloat(prompt("ingresa la base"))
    let alto =parseFloat(prompt("ingresa la alr tura que deses"))
    if (isNaN(base) || isNaN(alto)|| base <=0 || alto <= 0) {
        alert('debe dar un numero mayor a 0')
        return
    } let area = base * alto;
    alert("el Rectangulo es:" + area);
}

function calcularAreatriangulo(){
    let base =parseFloat(prompt("ingresa la base"))
    let alto =parseFloat(prompt("ingresa la alrtura que deses"))
    if (isNaN(base) || isNaN(alto)|| base <=0 || alto <= 0) {
        alert('debe dar un numero mayor a 0')
        return
    } let area = (base * alto) / 2;
    alert("el Rectangulo es:" + area);
}

function inicioPrograma(){
    let obcion = prompt("Calculadora de las areas:\n1. cuadrado\n2. rectangulo\n3. triangulo\n4. salida");

switch (obcion) {
    case "1":
    calcularAreaCuadrada();
   break;
   case "2":
    calcularAreaRectangulo();
   break;
   case "3":
    calcularAreatriangulo();
   break
   case "4":
    alert("fin");
   return
   default:
    alert("no valido")
    break
}
inicioPrograma();
}
inicioPrograma();

