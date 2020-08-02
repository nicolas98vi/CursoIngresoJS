/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
   var lamparitas;
   var precioConDescuento;
   var empresa;
   var precio = 35;

   lamparitas = txtIdCantidad.value;
   empresa = Marca.value;

   if (lamparitas >= 6) {
      //0.5= 50/100
      precioConDescuento = precio * lamparitas * 0.5;
   } else if (lamparitas == 5) {
      switch(empresa){
         case "ArgentinaLuz":
         precioConDescuento = precio * lamparitas * 0.4;
         break
      }}else if (lamparitas == 5) {
         switch(empresa){
            case "FelipeLamparas":
            case "JeLuz":
            case "HazIluminacion":
            case "Osram":
            precioConDescuento = precio * lamparitas * 0.3;
            break
         }} else if (lamparitas == 4) {
            switch(empresa){
               case "ArgentinaLuz":
               case "FelipeLamparas":
               precioConDescuento = precio * lamparitas * 0.25;
               break
            }} else if (lamparitas == 4) {
               switch(empresa){
                  case "JeLuz":
                  case "HazIluminacion":
                  case "Osram":
                  precioConDescuento = precio * lamparitas * 0.20;
                  break
               }}else if (lamparitas == 3) {   
                  switch(empresa){
                     case "ArgentinaLuz":
                     precioConDescuento = precio * lamparitas * 0.15;
                     break
                  }}else if (lamparitas == 3) {
                     switch(empresa){
                        case "FelipeLamparas":
                        precioConDescuento = precio * lamparitas * 0.10;
                        break
                     }}else if (lamparitas == 3) {
                        switch(empresa){
                           case "JeLuz":
                           case "HazIluminacion":
                           case "Osram":
                           precioConDescuento = precio * lamparitas * 0.05;
                           break
                        }
   }
   if (precioConDescuento > 120) {
      precioConDescuento = precio * lamparitas * 1.10;
      alert("IIBB Usted pago  " + precioConDescuento);
   }
   txtIdprecioDescuento.value = precioConDescuento;

}
