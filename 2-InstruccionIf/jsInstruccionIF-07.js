function mostrar()
{
	//tomo la edad  
	var edad;
	var estadCivil;
		edad = txtIdEdad.value;
		estadCivil = estadoCivil.value;
		if(edad <= 18 && estadCivil != "Soltero")
		{
            alert("Es muy pequeño para NO ser soltero");
		}
	


}//FIN DE LA FUNCIÓN