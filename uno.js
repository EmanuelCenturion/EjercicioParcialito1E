/*
	<input type="text"  placeholder="Nombre y Apellido" id="nombreyapellido">
	<input type="text"  placeholder="Temperatura Corporal" id="temperatura">		
	<select id="Sintoma">
				<option value="Ninguno">Ninguno</option>
				<option value="Tos">Tos</option>
				<option value="PerdidaOlfato">Pérdida de olfato</option>
				<option value="PerdidaGusto">Pérdida de gusto</option>
				<option value="DificultadParaRespirar">Dificultad para respirar</option>
				
	</select>
	
Para poder sacar el permiso de circulación se deben llenar los siguientes datos:
	Nombre y apellido (leer desde la página)
	Temperatura corporal (leer desde la página, validar que esté entre 35° y 40°, sino informar por alert que es incorrecta)
	Síntomas (leer desde la página)

- Si la temperatura corporal es mayor o igual a 38, se debe informar "Permiso no otorgado"
- Si el síntoma es tos y la temperatura es menor o igual a 37, se debe informar "Permiso otorgado. Por favor no se olvide de toser sobre su codo."
- Si el síntoma es pérdida de olfato o pérdida del gusto, más allá de la temperatura (siempre que sea correcta y menor a 38), informar "Permiso otorgado"
- Si el síntoma es dificultad para respirar, más allá de la temperatura (siempre que sea correcta), informar "Permiso no otorgado"
- Sino informar permiso otorgado.
			
*/


function mostrar() {
	let nombreApellido;
	let temperatura;
	let sintomas;

	nombreApellido = document.getElementById("nombreyapellido").value;
	temperatura = parseInt(document.getElementById("temperatura").value);
	sintomas = document.getElementById("Sintoma").value;

	if (temperatura >= 35 && temperatura <= 40) {
		switch (temperatura) {
			case 38:
			case 39:
			case 40:
				alert("Permiso NO otorgado");
				break;
			default:
				if (sintomas == "Tos") {
					alert("Permiso otorgado. Por favor no se olvide de toser sobre el codo");
				}else if(sintomas == "PerdidaOlfato" || sintomas == "PerdidaGusto"){
					alert("Permiso otorgado");
				}else if(sintomas == "DificultadParaRespirar"){
					alert("Permiso No otorgado");
				}else{
					alert("Permiso otorgado");
				}
		}
	} else {
		alert("Temperatura incorrecta");
	}
}