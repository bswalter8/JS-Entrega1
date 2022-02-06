



const login = () => {
    alert("Bienvenido a la libreria de Babel");
  };

const libros = () => {
    let n_Libro;

    do {
      n_Libro = parseInt(prompt("Libros disponibles: \n1)La Iliada \n2)Crimen y Castigo\n3)El Proceso\n4)Divina Comedia"));
      if (n_Libro < 1 || n_Libro > 4 || isNaN(n_Libro)){
        alert("Debe elegir entre 1 y 4");
      }
    } while (n_Libro < 1 || n_Libro > 4 || isNaN(n_Libro));
  
    let libro;
    
    switch (n_Libro) {
      case 1:
        libro = "La Iliada";
        break;
      case 2:
        libro = "Crimen y Castigo";
        break;
      case 3:
        libro = "El Proceso";
        break;
      case 4:
        libro = "Divina Comedia";
        break;
    }
  
    return libro;

}

    


const precio = (libro) => {
    let valor;
    switch (libro) {
        case "La Iliada":
          valor = 250;  
          alert('Usted a seleccionado:\n' + libro + ' con un valor de ' + valor);         
          break;
        case "Crimen y Castigo":
            valor = 200;  
            alert('Usted a seleccionado:\n' + libro + ' con un valor de ' + valor);   
          break;
        case "El Proceso":
            valor = 150;  
            alert('Usted a seleccionado:\n' + libro + ' con un valor de ' + valor);   
          break;
        case "Divina Comedia":
            valor = 220;  
            alert('Usted a seleccionado:\n' + libro + ' con un valor de ' + valor);   
          break;
      }
      return valor;
};

const seleccion = () => {
    let libro_Elegido; 
    let precio_Libro = 0;
    do{
        libro_Elegido = libros();
        precio_Libro += precio(libro_Elegido);
        var seguir = confirm("Desea comprar otro libro? "); 
    }while(seguir === true);
    return precio_Libro;
}

const pagar = (gasto_Total) => {
    let dinero;
    let vuelto;
    do {
      dinero = parseFloat(prompt("Inserte la suma a pagar"));
      if (dinero < gasto_Total){
        alert("Debe elegir una suma superior o igual a " + gasto_Total );
      } else if (isNaN(dinero)){
        alert("Debe elegir un numero");
      }
    } while ((dinero < gasto_Total) || isNaN(dinero) );

    vuelto = dinero - gasto_Total; 
    return vuelto;

}

const main = () => {
    let gasto_Total = seleccion();
    let iva = Iva(gasto_Total);
    let total_Iva = gasto_Total + iva;

    alert("El valor a pagar es " + gasto_Total + " mas IVA:\n " + total_Iva);
    vuelto = pagar(gasto_Total + iva);
    if (vuelto == 0){
        alert("Gracias por su compra!");
    } else {
        alert("Gracias por su compra!\nSu vuelto es: " + vuelto );
    }
    
}    

const total_Iva = (total) => total + (total * 21) / 100;
const Iva = (total) => (total * 21) / 100;

let gasto_Total; 
let vuelto;


login();
main();