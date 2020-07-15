/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var resultado;
	/** 
	 100% ------> sueldo
	 10%  ------>  resultado
	 10%  = 0,1
	 100% = 1

	 total = (110% * resultado)/100 
	 total = 1,1 * resultado
	*/  
	    
		sueldo = txtIdSueldo.value;
		sueldo = parseInt(sueldo);
		resultado = 1.1 * sueldo;
		txtIdResultado.value = resultado;
		

		
		
		
	
}
