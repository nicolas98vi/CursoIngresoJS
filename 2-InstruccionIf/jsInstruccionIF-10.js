function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	var max= 11;
	var min =1;
		nota = parseInt(nota);
		
		nota= Math.floor(Math.random()*(max-min))+min;
		console.log(nota);
		if(nota >= 9)
		{
			alert("EXCELENTE");
		}else
		{
		    if(nota >= 4)
		    {
			    alert("APROBÓ");
		    }else
		    {
			    alert("Vamos, la proxima se puede");
		    }
		}

		

		
		
            
		
		


}//FIN DE LA FUNCIÓN