/*
Se debe pedir al usuario, mientras quiera:
	- Nombre de artículo
	- Categoría
	- Precio.
Al finalizar, se debe informar:
	- Nombre de artículo con mayor precio
	- Nombre de artículo con mayor precio, de la categoría lácteos.
	- Cantidad de artículos ingresados de categoría bebidas
Considerar que las categorías pueden ser: almacen, lácteos, limpieza o bebidas y que el precio no puede ser menor a 0 ni mayor a 1000.
*/

function mostrar() {
	let nombreArticulo;
	let categoria;
	let pIngresado;
	let pArticulo = 0;
	let masCaro;
	let pLacteos;
	let cBebidas=0;
	let respuesta;

	respuesta = prompt("desea ingresar un articulo? s/n");

	while (respuesta == 's') {
		alert("las categorias validas son almacen, lácteos, limpieza o bebidas y el precio no puede ser menor a 0 ni mayor a 1000");
		
		nombreArticulo = prompt("ingrese nombre de articulo:");

		pIngresado = parseInt(prompt("ingrese precio de articulo:"));
		if (pIngresado < 0 && pIngresado > 1000) {
			alert("precio fuera de rango");
		} else if (pIngresado > pArticulo) {
			masCaro = nombreArticulo;
		}
		
		categoria = prompt("ingrese categoria de articulo:");
		switch (categoria) {
			case "almacen":
			case "limpieza":
				break;
			case "lacteos":
				if (pIngresado > pArticulo){
					pLacteos = nombreArticulo;
				}
				break;
			case "bebidas":
				cBebidas++;
				break;
			default:
				alert("categoria no valida");
				break;
		}

		pArticulo = pIngresado;

		respuesta = prompt("desea ingresar un articulo? s/n");
	}
		alert("el aticulo mas caro es: " + masCaro+" "+pArticulo);
		alert("el aticulo mas caro de lacteos es: " + pLacteos);
		alert("la cantidad de bebidas ingresadas es de " + cBebidas);

}