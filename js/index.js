const productos = [
    { producto: "dove aerosol", tipo: "aerosol", precio: 200 },
    { producto: "dove barra", tipo: "barra", precio: 250 },
    { producto: "aktiol", tipo: "alcohol", precio: 120 },
    { producto: "duracell", tipo: "d", precio: 185 },
    { producto: "gillette match 3", tipo: "match 3", precio: 235 },
    { producto: "gilette venus", tipo: "venus", precio: 100},

  ];

  const carrito = [];
  
  
  const total = carrito.reduce((acc,el) => acc + el.precio,0);
  
let miPedido;

while (miPedido !=""){
  
  miPedido = prompt("ingrese un producto o de lo contrario haga click en Ok");
  
  const seleccionProducto = productos.find(productos => productos.producto === miPedido);
  
  carrito.push(seleccionProducto);
  
  console.log(seleccionProducto);
  
  console.log(total);
  
  
  
  if(miPedido === ""){
    
    
    alert(`su pedido finalizo su cuenta es  ${total}`);
    
    
  }
  
  
}

  


