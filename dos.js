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

function mostrar()
{
	let nombreArticulo;
	let categoria;
	let precio;
	let respuesta = 'n';
	let cantArticulos;
	let articulos;
	
	prompt("desea ingresar un articulo? s/n");

	while(respuesta == 's'){
		alert("las categorias validas son almacen, lácteos, limpieza o bebidas y el precio no puede ser menor a 0 ni mayor a 1000");   
		
		nombreArticulo = prompt("ingrese nombre de articulo:");
		
		if(precio>0 && precio<1000){
		precio = parseInt(prompt("ingrese precio de articulo:"));
		}else{
			alert("precio fuera de rango");
		}
		
		switch(categoria){
			case almacen:
			case lácteos:
			case limpieza:
			case bebidas:
				categoria = prompt("ingrese categoria de articulo:");
				break;
			default:
				alert("categoria no valida");
		}
		cantArticulos++;
		articulos += nombreArticulo;

		
	}

	alert("la cantidad de articulos ingresados es de "+cantArticulos);
	
}