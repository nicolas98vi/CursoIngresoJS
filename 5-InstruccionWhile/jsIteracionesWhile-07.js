/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador = 0;		
	var acumulador = 0;		
	var respuesta= "si";

	var respuestaNumero;
	
	
    while(respuesta != "no"){
	    while(!(isNaN(respuesta))){
		respuesta=prompt("seguir almacenando numeros?(si/no)");
	    }
		while(respuesta == "si"){

		++contador;
		contador = parseInt(contador);
		
		respuestaNumero = prompt("Ingrese un numero :");
		respuestaNumero = parseInt(respuestaNumero);
		console.log(respuestaNumero);		

		acumulador = respuestaNumero + acumulador;
		acumulador = parseInt (acumulador);
		console.log(acumulador);
		
		respuesta=prompt("seguir almacenando numeros?(si/no)");
		
		
	}
    }
	


	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN