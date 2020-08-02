function mostrar()
{
	var contador = 0;
	contoador = parseInt(contador);
	
	var acumulador = 0;
	acumulador = parseInt (acumulador);

	var numeroIngresado;
	numeroIngresado = prompt("ingresar numero:");
	numeroIngresado = parseInt (numeroIngresado);

	while(!(contador == 4)){
		if (isNaN(numeroIngresado)){
			numeroIngresado = prompt("ingresar numero:");
			numeroIngresado = parseInt (numeroIngresado);
		} 
		++contador;
		numeroIngresado = prompt("ingresar numero:");
		numeroIngresado = parseInt (numeroIngresado);
		console.log(acumulador);
		acumulador = numeroIngresado + acumulador ;	
	}
	console.log(acumulador);
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;


}//FIN DE LA FUNCIÓN