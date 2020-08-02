/**
 * Aqui dentro probar el codigo que quieran
 * Se necesita informar dependiendo las opciones llenadas en el formulario quien puede movilizarse o resguardarse.<br> 
 * Si es la residencia es de buenos aires consultar por confirm si pertenece a la zona de amba. <br>
 * Si la persona es mayor de 60, no importa la profesión que tenga, el mensaje a mostrar es : No puede transitar, es persona de riesgo quédese en su casa. <br>
 * Si la persona es Médico y menor de 25 : Usted es muy joven para ser médico<br>
 * Si la persona es enfermero o almacenero entre 27 y 60 años: Usted puede transitar<br>
 * Si la persona es entrenador, profesor, abogado o programador y reside en la zona de amba y tiene entre 20 y 60 años, el mensaje es : Solo salí para compras esenciales.<br>
 * Si la persona es menor de 15 años, no importa donde resida, y tiene una profesión distinta a ser alumno: Es muy chico para tener una profesión<br>
 * Si la persona es menor de 15 años, no importa donde resida, y es alumno: Respeta y colabora en tu casa, ya pronto volveremos a la escuela<br>
 * Si la persona es mayor de 15 años y reside en otro lugar q no sea el amba: Usa el barbijo para transitar!<br></p>
 */
function probarEjercicio() {
	var edad;
	var profecion;
	var residencia;

	edad = edadTxtId.value;
	profecion = profesionSelectId.value;
	residencia = residenciaSelectId.value;

	if(residencia == "Buenos Aires"){
		residencia = prompt("Eres de caba?(si/no)");
		if(residencia == "si"){
			alert("perfecto");
		}else if( residencia == "no"){
			alert("okey");
		}
    if(edad == 60){
		alert("No puede transitar, es persona de riesgo quédese en su casa.");
	}else if(edad == 25 && profecion == "Medico"){
        alert("Usted es muy joven para ser médico");
	}
	if((edad >= 27 || edad <= 60 ) && profecion =="Enfermero"){
		alert("Usted puede transitar");
	}
	if(residencia == "si" && (profecion == "Entrenador" || profecion == "Profesor" || profecion == "Abogado" || profecion =="Programador") && (edad >=20 || edad <=60)){
        alert("Solo salí para compras esenciales.");
	}
	if(edad <= 15 && profecion != "Alumno"){
		alert("Es muy chico para tener una profesión");
	}else if(edad <= 15 && profecion == "Alumno"){
		alert("Respeta y colabora en tu casa, ya pronto volveremos a la escuela");
	}
	 if(edad >= 15 && residencia =="si"){
		alert("Usa el barbijo para transitar!");
	}
	}

}

	
