const productos = [
  { producto: "dove aerosol", tipo: "aerosol", precio: 200 },
  { producto: "dove barra", tipo: "barra", precio: 250 },
  { producto: "aktiol", tipo: "alcohol", precio: 120 },
  { producto: "duracell", tipo: "d", precio: 185 },
  { producto: "gillette match 3", tipo: "match 3", precio: 235 },
  { producto: "gilette venus", tipo: "venus", precio: 100},
];

const carrito = [];


let miPedido;
let finalizacion;

do{

  miPedido = prompt("ingrese un pedido o ingrese finalizar pedido");

  const seleccionProducto = productos.find(productos => productos.producto === miPedido);

  carrito.push(seleccionProducto);

  finalizacion = prompt('1. Termina pedido \n2.Sigue haciendo pedidos')

} while ( finalizacion !== "1"){

  console.log(carrito);
}


const total = (array) => {
  return array.reduce((acc, el) => acc + el.precio,0)
};

const lista = (array) => {
    return array.map((data) => `${data.producto} : $${data.precio}.\n`)
        
}

alert (`su cuenta es un total de $${total(carrito)} \n\n Carrito:\n\n${lista(carrito)}`);