function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	var max=11;
	    max=parseInt(max);
	var min=1;
		min=parseInt(min);
		
		//numero = Math.floor(Math.random()*(max - min))+min;= 1-10 
		numero = Math.floor(Math.random()*(max - min)) + min;
		//console.log(numero);
		alert(numero);
		
		

}//FIN DE LA FUNCIÓN