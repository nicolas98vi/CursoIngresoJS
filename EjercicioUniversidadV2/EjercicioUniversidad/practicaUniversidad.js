function probarEjercicio()
{
	{
		var nombre;
		var masViejo = 0;
		var nombreViejo;
		var sexoViejo;
		var cantidad = 0;
		var carrera;
		var estadoCarrera;
		var carreFini = 0;
		var sexo;
		var muje = 0;
		var noBi = 0;
		var noBiMasViejo = 0;
		var nombreNoBi;
		var notaNoBi;
		var estadoNoBi;
		var edad;
		var nota;
		var pregunta;
//G)
		var Programación=0;
		var Psicología=0;
		var DisenoGráfico=0;
		var mayorMateria;


	
		
	do{	nombre = prompt("ingrese su nombre:");
		while(!(isNaN(nombre))){
			nombre = prompt("(NaN)ingrese su nombre:");
		}
		carrera=prompt("ingrese su carrera (Programación, Psicología o Diseño gráfico):");
		while(carrera != "Programación" && carrera != "Psicología" && carrera != "Diseño gráfico"){
			carrera=prompt("ingrese su carrera (ingresar : Programación, Psicología o Diseño gráfico):");
		}
		estadoCarrera=prompt("ingrese el estado de la carrera: (en curso, abandono o finalizado) :");
		while(estadoCarrera != "en curso" && estadoCarrera != "abandono" && estadoCarrera != "finalizado"){
			estadoCarrera=prompt("ingrese el estado de la carrera: (ingresar : en curso, abandono o finalizado) :");
		}
		sexo=prompt("Ingrese el sexo : (femenino, masculino o nobinario)");
		while(sexo != "femenino" && sexo != "masculino" && sexo != "nobinario"){
			sexo=prompt("Ingrese el sexo : (ingresar : femenino, masculino o nobinario)");
		}
		edad = prompt ("ingrese su edad");
		while(isNaN(edad) && edad >= 18){
			edad = prompt ("(edad mayor a 18)ingrese su edad");
		}
		nota = prompt("Ingresar nota:(0 al 10)");
		while(isNaN(nota) && (nota <= 0 || nota >= 10)){
			nota = prompt("Ingresar nota:(0 al 10)(no)");
		}

		++cantidad;	

		if(sexo == "femenino"){
		    ++muje;
		}else if(sexo == "nobinario"){
			++noBi;
		}
		
		if(estadoCarrera =="finalizado"){
			++carreFini;
		}

		if(masViejo < edad && carrera == "Psicología"){
			nombreViejo = nombre;
			sexoViejo = sexo;
			masViejo = edad;
		}

		if(noBiMasViejo < nota && sexo =="nobinario" && carrera == "Psicología"){
			nombreNoBi = nombre;
			notaNoBi = nota;
			estadoNoBi = estadoCarrera;
		}
        switch(carrera){
			case "Programación":
				++Programación;
				break
			case "Psicología":
				++Psicología;
				break
			case "Diseño gráfico":
				++ DisenoGráfico;
				break
		}
		if(Programación > Psicología && programacion > DisenoGráfico){
			mayorMateria="programacion";
		}else if(Psicología > Programación && Psicología > DisenoGráfico){
			mayorMateria="pasicologia";
		}else if(DisenoGráfico > Psicología && DisenoGráfico > programacion){
			mayorMateria="Diseño grafico";
		}

		pregunta = prompt ("desea ingresar otro alumno? (si/no)");
		}while(pregunta == "si");
	
	document.write("la cantidad de alumnos total es de  "+cantidad+", la cantidad de alumnas es de "+muje+", la cantidad de alumnes es de "+noBi+"<br>");
	document.write("la cantidad de carreras finalisadas es de "+carreFini+"<br>");
	document.write("el alumno mas viejo de psicologia se llama "+nombreViejo+", su sexo es "+sexoViejo+" y su edad es de "+masViejo+"<br>");
	document.write("El mejor alumno no binario de Psicología se llama "+nombreNoBi+" su nota es de "+notaNoBi+" y el estado de su carrera es "+estadoNoBi+"<br>");
	document.write("la materia con mas alumnos es la de "+mayorMateria);
	}
}
		