/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero = true;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta = "si";
	//iniciar variables
	
	while(respuesta == "si"){
		numeroIngresado = prompt ("ingresar numero");
		numeroIngresado =parseInt(numeroIngresado);

	if(banderaDelPrimero == true){
		 numeroMaximo = numeroIngresado;
		  numeroMinimo = numeroIngresado;
		banderaDelPrimero = false;
	}
	if(numeroIngresado > numeroMaximo){
			numeroMaximo=numeroIngresado;
			
	}else if(numeroIngresado < numeroMinimo){
			numeroMinimo = numeroIngresado;
		}
	
		
		respuesta=prompt("desea continuar?");
	}
	
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN