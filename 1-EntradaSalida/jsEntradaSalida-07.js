/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 


function sumar()
{	
	var uno;
	var dos;
	var suma;

	uno = txtIdNumeroUno.value;
	dos = txtIdNumeroDos.value;
	uno = parseInt(uno);
	dos = parseInt(dos); 
	suma =  uno + dos;
    alert(suma);
}

function restar()
{
	var uno;
	var dos;
	var resta;
		uno = txtIdNumeroUno.value;
		dos = txtIdNumeroDos.value;
		resta = uno - dos;
		alert (resta);
}

function multiplicar()
{ 
	var uno;
	var dos;
	var multiplicacion;
		uno = txtIdNumeroUno.value;
		dos = txtIdNumeroDos.value;
		multiplicacion = uno * dos;
		alert (multiplicacion);
}

function dividir()
{
	var uno;
	var dos;
	var divicion;
		uno = txtIdNumeroUno.value;
		dos = txtIdNumeroDos.value;
		divicion = uno / dos;
		alert (divicion);
}

