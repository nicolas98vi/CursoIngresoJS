/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
	 var edadIngresada;
	 var sexoIngresado;
	 var estadoCivilIngresado;
	 var sueldo;
	 var legajo;
	 var nacionalidad;

		edadIngresada=prompt("Ingrese su edad ");

		while(!(edadIngresada >=18 && edadIngresada <= 90)){

				edadIngresada=prompt("Ingrese su edad ");

			}
		if(edadIngresada >=18 && edadIngresada <= 90){		

			sexoIngresado=prompt("Ingrese su sexo (f/m)");

			while(!(sexoIngresado == "f" || sexoIngresado == "m")){

                sexoIngresado=prompt("Ingrese su sexo (f/m)");

			}

			if(sexoIngresado == "f" || sexoIngresado == "m"){
				
				estadoCivilIngresado=prompt("Esta soltero, casados, divorciados o viudo");

				while(!(estadoCivilIngresado == "soltero" || estadoCivilIngresado == "casado" || estadoCivilIngresado == "divorciados" || estadoCivilIngresado == "viudo")){

					estadoCivilIngresado=prompt("Esta soltero, casados, divorciados o viudo");

				}

				if(estadoCivilIngresado == "soltero" || estadoCivilIngresado == "casado" || estadoCivilIngresado == "divorciados" || estadoCivilIngresado == "viudo"){
				
					switch(estadoCivilIngresado){
					case "soltero":
						estadoCivilIngresado == "1";
						break
					case "casados":
						estadoCivilIngresado == "2";
						break
					case "divorciados":
						estadoCivilIngresado == "3";
						break
					case "viudo":
						estadoCivilIngresado == "4";
						break
					}
						
						
						sueldo=prompt("Cual es su ingreso economico?(+8000)");

						while(!(sueldo >= 8000)){

                            sueldo=prompt("Cual es su ingreso economico?(+8000)");

						}

						if(sueldo >= 8000){

							legajo = prompt ("ingrese su legajo");
							while(!(legajo >=1000 && legajo <= 9999)){

							legajo = prompt ("ingrese su legajo");

							}						

							if(legajo >=1000 && legajo <= 9999){

								nacionalidad = prompt ("Ingrese su naciopnalidad (argentinos, extranjeros, nacionalizados) :");
								while(!(nacionalidad == "argentinos" || nacionalidad == "extranjeros" || nacionalidad == "nacionalizados")){
									nacionalidad = prompt ("Ingrese su naciopnalidad (argentinos, extranjeros, nacionalizados) :");
								}
								if((nacionalidad == "argentinos" || nacionalidad == "extranjeros" || nacionalidad == "nacionalizados")){
									switch(nacionalidad){
										case "argentinos":
											nacionalidad = "A";
											break
										case "extranjeros":
											nacionalidad = "B";
											break
										case "nacionalizados":
											nacionalidad = "C";
											break
									}
								}
							}
				}
				}
			}
		}
		txtIdEdad.value = edadIngresada;
		txtIdSexo.value = sexoIngresado;
		txtIdEstadoCivil.value = estadoCivilIngresado;
		txtIdSueldo.value = sueldo;
		txtIdLegajo.value = legajo;
		txtIdNacionalidad.value = nacionalidad;
}
