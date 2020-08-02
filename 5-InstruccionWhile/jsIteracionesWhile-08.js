/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var respuesta;

	var sumaPositivos;
	sumaPositivos=0;
	sumaPositivos= parseInt(sumaPositivos);

	var multiplicacionNegativos;
	multiplicacionNegativos=1;

	var numero;
	     

	

	respuesta=prompt("ingresar un numero? (si/no)");

	while(!(respuesta == "si" || respuesta =="no")){
		respuesta=prompt("(Palabras)seguir almacenando numeros?(si/no)");
	}
    while(respuesta != "no"){
		while(respuesta == "si"){
			numero=prompt("ingrese un numero : ");
			numero=parseInt(numero);
			while(isNaN(numero)){
				numero=prompt("(isNaN)ingrese un numero : ");
			}

			if(numero >= 0){

				sumaPositivos = numero + sumaPositivos;
				sumaPositivos = parseInt(sumaPositivos);

				respuesta=prompt("ingresar un numero? (si/no)");
			}else if(numero < 0){
				multiplicacionNegativos= numero * multiplicacionNegativos;

				respuesta=prompt("ingresar un numero? (si/no)");
			}	
    }
    }

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN