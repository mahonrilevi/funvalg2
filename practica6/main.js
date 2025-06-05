 const productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Silla Gamer", precio: 450 },
    { nombre: "Audífonos", precio: 80 },
    { nombre: "Webcam", precio: 60 },
    { nombre: "USB 128GB", precio: 30 },
    { nombre: "Impresora", precio: 200 },
    { nombre: "Tablet", precio: 500 }
 ]; 

 console.log("la lista de productos:");
 productos.forEach(function(producto){
console.log("nombre:" + producto.nombre + ",precio:Q" + producto.precio);
 });
 console.log("\n hay producto");
 let nombresProductos = productos.map(function(producto) {
 return producto.nombre;
 });let productoBuscado = "tabla";
 let estaDisponible = nombresProductos.includes(productoBuscado);
if (estaDisponible) {;
    console.log("si, el producto'"+ productoBuscado + "'estadisponible");
}else{
    console.log("no, producto'" + productoBuscado + "'no se encuentra en nuestra lista");
} console.log("\n promosion 10% de descuento:");
let productoConDescuento = productos.map(function(producto) {
    let precionuevo = producto.precio * 0.9;
    return {
        nombre:producto.nombre,
        precio:precionuevo};
});console.log(productoConDescuento);
console.log("\n precio menoer a Q100:");
let Producros100 = productos.filter(function(producto){
    return producto.precio < 100;
}); console.log (Producros100);
console.log("\n los dos primero productos:");
let losdos = productos.slice(0,2);
console.log(losdos);
console.log ("\n precio menor a mayor:");
let orden = productos.slice();
orden.sort(function(a,b){
    return a.precio - b.precio;
}); console.log(orden);
console.log("\n orden inverso:");
let inverso = productos.slice(); inverso.reverse();
console.log(inverso);

