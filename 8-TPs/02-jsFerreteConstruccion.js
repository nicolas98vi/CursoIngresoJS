/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y 
el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.

B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y 
se debe alambra con tres hilos de alambre.

C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 
3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;

    var ancho;

    var rectangulo;

        largo = txtIdLargo.value;

        ancho = txtIdAncho.value;

        largo = parseInt(largo);

        ancho = parseInt(ancho);

        alambres = ancho * largo ; 

        alert("se nesecitan 3 alambres de  " + alambres + "  metros  ");
               
}
function Circulo () 
{
    var radio;
    
    var perimetro;

        radio = txtIdRadio.value;

        radio = parseInt(radio);

        perimetro = 2 * radio * Math.PI;
               
        perimetro = Math.ceil(perimetro);


        alert("se nesecitan 3 alambres de  "+  perimetro +" metros ");
        
 
    
}
function Materiales () 
{

    var cemento;

    var cal;

    var ancho;

    var largo;

    var area;
 
        
        largo = txtIdLargo.value;

        ancho = txtIdAncho.value;

        largo = parseInt(largo);

        ancho = parseInt(ancho);
        //     1 m2--------> 2
        //     10 m2 ------> x = 10 m2 * 2
        
        area = largo * ancho;

        cemento = area * 2;

        cal = area * 3;

        alert("hay  " + cemento +" de cemento y " + cal + " de cal" )





    
}