function mostrar()
{
		var mesDelAño;
			mesDelAño =txtIdMes.value;
			
			switch(mesDelAño){
				case("Enero"):
				case("Marzo"):
				case("Mayo"):
				case("Julio"):
				case("Agosto"):
				case("Octubre"):
				case("Diciembre"):{
				    alert("tiene 31 días.");
				    break
				}
				case("Abril"):
				case("Junio"):
				case("Septiembre"):
				case("Noviembre"):{
					alert("tiene 30 días.");
					break
				}
				case("Febrero"):{
					alert("tiene 30 días.");
					break
				}
			}
}