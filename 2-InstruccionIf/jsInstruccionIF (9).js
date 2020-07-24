function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroUno;
	var numeroDos;
	var imparUno;
	var imparDos;
	var elevarAlCuboUno;
	var elevarAlCuboDos;
	var restaTotal;
	var max=51;
	var min=1;
	    

		numeroUno = Math.floor(Math.random()*(max-min))+min;
		numeroDos = Math.floor(Math.random()*(max-min))+min;
		console.log(numeroUno);
		console.log(numeroDos);
	if(numeroUno != NaN || numeroUno != 0 || numeroDos != NaN || numeroDos != 0){
		
		if(numeroUno % 2 == 0 || numeroUno % 2 == 4 || numeroUno % 2 == 6|| numeroUno % 2 == 8)
		{
			var esParUno= "es par";

			alert(numeroUno);
		}else
		    {
				var esImparElUno = "es impar";

			    imparUno=numeroUno;
            }
                            

		if(numeroDos % 2 == 0 || numeroDos % 2 == 4 || numeroDos % 2 == 6|| numeroDos % 2 == 8)
		{
			var esParElDos="es par";

		}else
		    {			
			    var esImparElDos="es impar";

			    imparDos=numeroDos;
		    }

		if(numeroUno == imparUno && numeroDos == imparDos){
			restaTotal = imparUno - imparDos;

			var restaDeImpares=("y  la resta de los dos numeros impares es "+restaTotal);
			

		}
		if(numeroUno % 5 == 0 || numeroUno % 5 == 5){

			elevarAlCuboUno = numeroUno * numeroUno * numeroUno; 

			var divisorUnoDeCinco= " ademas el numero "+ numeroUno +" del uno es divisible por 5 y al cubo es "+ elevarAlCuboUno;
		}
		if(numeroDos % 5 == 0 || numeroDos % 5 == 5){

            elevarAlCuboDos = numeroDos * numeroDos * numeroDos;

			var divisorDosDeCinco = "  el numero " + numeroDos + " es divisible por 5 y al cubo es " + elevarAlCuboDos;
		}
		alert("el numero uno dio"+ numeroUno + " y es "+ esImparElUno + esParUno + " y el numero dos dio" + numeroDos + " y "+ esParElDos + esImparElDos + restaDeImpares + divisorUnoDeCinco + divisorDosDeCinco);

	}else{
		alert("No paso nada");
	}

		

}//FIN DE LA FUNCIÓN