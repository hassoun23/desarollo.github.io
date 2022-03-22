const productos = [
  { id: '0',producto: "dove aerosol", tipo: "Desodorante Dove 150 ml Aerosol.", precio: 200, img:"assets/productos/dove.png"},
  { id: '1',producto: "dove barra", tipo: "barra", precio: 250,img:"assets/productos/dovebarra.png" },
  { id: '2',producto: "aktiol", tipo: "Alcohol Aktiol 143ml Aerosol", precio: 120, img:"assets/productos/aktiol.png" },
  { id: '3',producto: "duracell", tipo: "Duracell C Mediana x 96 unidades", precio: 185, img:"assets/productos/duracell c.png" },
  { id: '4',producto: "gillette match 3", tipo: "Repuesto Mach 3 (2 u.) x 12 u.", precio: 235, img:"assets/productos/gilletemach3respuesto.png" },
  { id: '5',producto: "gilette venus", tipo: "Máquina Gillette Venus Simply3 (x 8u.)", precio: 100, img:"assets/productos/gillettevenus.png"},
];


const carrito = [];


const contenedorTienda = document.getElementById('contenedorTienda');
const contenedorCarrito = document.getElementById('contenedorCarrito');

const botonCarrito = document.getElementById('btnCarrito');





for (const producto of productos) {
const divcolumn = document.createElement('div'); // div para hacer columnas de bootstrap
const divProducto = document.createElement('div'); //card
const imgProducto = document.createElement('img'); // card imagen
const bodyProducto = document.createElement('div');// card body
const tituloProducto = document.createElement('h5'); // card titulo
const descripProducto = document.createElement('p'); // card descripcion
const precioProducto = document.createElement('h4');// precio
const botonComprar = document.createElement('button');//boton

divcolumn.className = 'col-md-3 mt-lg-0 mt-3'    // clases de bootstrap para columnas
divProducto.className = 'card';                // clase card de bootstrap
imgProducto.className = 'card-img-top';        // clase img bootstrap
bodyProducto.className = 'card-body';          // clase cuerpo bootstrap
tituloProducto.className = 'card-title';       // clase para titulo producto bootstrap
descripProducto.className = 'card-text';       // clase para descripcion producto
precioProducto.className = 'preciProducto';    // clase precio producto
botonComprar.className = 'btn btn-primary';    //clase boton carrito bootstrap


imgProducto.src = producto.img;
tituloProducto.innerHTML = `${producto.producto}`;
descripProducto.innerHTML = `${producto.tipo}`;
precioProducto.innerHTML = `${producto.precio}`;
botonComprar.innerHTML = `Agregar Carrito`;
botonComprar.id = producto.id;


contenedorTienda.append(divcolumn);
divcolumn.append(divProducto);
divProducto.append(imgProducto,bodyProducto);
bodyProducto.append(tituloProducto,descripProducto,precioProducto,botonComprar);



botonComprar.onclick = () => {
  const productoComprado = productos.find(producto => producto.id === botonComprar.id);
  carrito.push({ nombre: productoComprado.tipo, precio: productoComprado.precio })
  localStorage.setItem("carrito",JSON.stringify(carrito))

  console.log(carrito);
}



}



const mostrarCarrito = () => {
  const carrito = JSON.parse(localStorage.getItem("carrito"))

  for (const producto of carrito) {
    const nombreProducto = `<h4>Producto : ${producto.tipo}</h4>`;
    const precioProducto = `<h4>Precio : ${producto.precio}</h4>`;
    contenedorCarrito.innerHTML += nombreProducto;
    contenedorCarrito.innerHTML += precioProducto;
  }

  const total = carrito.reduce((accumulador, producto) => accumulador + producto.precio, 0);
  contenedorCarrito.append(`Total Compra :  ${total}`); };


  botonCarrito.onclick = mostrarCarrito;