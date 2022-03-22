


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


