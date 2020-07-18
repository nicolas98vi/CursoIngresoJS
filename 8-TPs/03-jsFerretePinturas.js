/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperatura;
    var centigrados;
        temperatura = txtIdTemperatura.value;
        centigrados = (temperatura - 32) * 5/9;
        centigrados = Math.ceil(centigrados);
        alert(temperatura + " fahrenheid son " + centigrados + "grados celsius");
}

function CentigradosFahrenheit () 
{
    var temperatura;
    var fahrenheid;
        temperatura = txtIdTemperatura.value;
         fahrenheid = (temperatura * 9/5) + 32;
         fahrenheid = math.ceil(fahrenheid);
        alert(temperatura + " celsius son " + fahrenheid + "grados fahrenheid");
}
