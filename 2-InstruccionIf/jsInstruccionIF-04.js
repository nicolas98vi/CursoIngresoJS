function mostrar()
{
	//tomo la edad
	// tomar 3 numeros y mostrar el mayor  
	var numeroUno = 11;
	var numeroDos =  12;
	var numeroTres = 13;
		numeroUno = prompt("numero uno");
		numeroDos = prompt("numero dos");
		numeroTres = prompt("nuemro tres");


		if(numeroDos < numeroUno && numeroTres < numeroUno)
			{
				alert("numero uno es mayor");
			}
		if(numeroUno < numeroDos && numeroTres < numeroDos)
		{
			alert("numero dos es mayor");
		}
		if(numeroUno < numeroTres && numeroDos < numeroTres)
		{
			alert("numero tres es mayor");
		}
			
		


}//FIN DE LA FUNCIÓN