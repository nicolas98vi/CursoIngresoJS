/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var uno ;
	var dos ;
	var numero;
		uno = txtIdNumeroUno . value;
		dos = txtIdNumeroDos . value;
		uno = parseInt(uno);
		dos = parseInt(dos);
		numero = uno + dos;

		alert ("la suma es: " + numero);

}

