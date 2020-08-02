/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado=parseInt(numeroIngresado); 
	    numeroIngresado=txtIdNumero.value;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	while(!(numeroIngresado > 0 && numeroIngresado < 10) ){
		
		numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	}alert(numeroIngresado);
	
}//FIN DE LA FUNCIÓN