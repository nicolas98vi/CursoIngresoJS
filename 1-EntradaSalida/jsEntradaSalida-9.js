/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
var iva;
iva=21;
importe= document.getElementById("sueldo");

importe=parseInt(importe);
valorDelImpuesto=importe*iva/100;
console.log("despues del calculo: "+ valorDelImpuesto);
importeMasIva=importe+ valorDelImpuesto;
console.log("importe Final: "+ omporteMasIva);
	
}
