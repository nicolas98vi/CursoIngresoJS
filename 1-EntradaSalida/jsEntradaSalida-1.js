//se pide dos importes, y un porcentaje de descuento (todo con prompt)y se muestra el siguiente mensaje:
//"los productos cuestan $??? y $??? , sumados son $??? ,tienen un descuento de $??? pesos, el precio total con descuento es $??? ,el iva es de $??? y el precio final con IVA es $???"
//ej: si ingresa 100 , 300 con el descuento de 30, elmensaje deberiaser el siguiente:
//"los prodcutos cuestan $100 y $300 , sumados son $400, tienen un descuento de $120 pesos, el precio total con descuento es $380 ,el iva es de $79,8 y el precio final con IVA es $459,8"
function mostrar()

    var importeUno;

    var importeDos;

    var descuento;

    var importeSumado;

    var importeConDescuento;

    var importeQuitado;

        importeUno=prompt("De cuanto es el primer importe? ");
        importeUno=parseInt(importeUno);

        importeDos=prompt("De cuano es el segundo importe? ");
        importeDos=parseInt(importeDos);

        descuento=prompt("de cuanto es el descuento? ");
        descuento=parseInt(porcentaje);

        importeSumado = importeUno + importeDos;

        importeConDescuento = (porcentaje / 100) * importeSumado ;

        

        alert("los productos cuestan  $" + importeUno + " y $" + importeDos + ", sumados son  $" + importeSumado + ", tienen un descuento de $" + descuento + "pesos, el precio total con descuento es $" + importeConDescuento + ",el iva es de $79,8 y el precio final con IVA es $459,8");






