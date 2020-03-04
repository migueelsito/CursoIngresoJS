/*
Ingresar NOMBRE, EDAD(debe ser mayor de edad, y menor de 125)
*/
function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var tipoTransaccion;
	var importe;
	var respuesta;
	var contador;

	var contadorDeHombres;
	var contadorDeMujeres;
	var contadorExtraccion;
	var contadorDeposito;

	var SumaDeEdad;
	var promedioDeEdad;
	var EdadMinima;
	var EdadMaxima;
	var NombreDeLaEdadMinima;
	var importeMaximo;
	var SexoDelImporteMaximo;
	var OperacionMasUtilizada;
	var ImporteDeLaEdadMaxima;

	respuesta="si";
	contador=0;
	SumaDeEdad=0;
	contadorDeHombres=0;
	contadorDeMujeres=0;
	contadorExtraccion=0;
	contadorDeposito=0;

	while(respuesta=="si")
	{
		do
		{
			nombre=prompt("Ingrese su nombre");
		}while(!isNaN(nombre));

		do
		{
			edad=prompt("Ingrese su edad");
			edad=parseInt(edad);
		}while(isNaN(edad)||edad<18||edad>125);

		do
		{
			sexo=prompt("Ingrese su sexo");
		}while(!isNaN(sexo)||sexo!="f"&&sexo!="m");

		do
		{
			tipoTransaccion=prompt("Ingrese el tipo de transaccion");
		}while(!isNaN(tipoTransaccion)||tipoTransaccion!="deposito"&&tipoTransaccion!="extraccion")

		do
		{
			importe=prompt("Ingrese la cantidad del importe");
			importe=parseInt(importe);
		}while(isNaN(importe)||importe<1||importe>5000);

		//Fin de la validacion

		if(contador==0||edad<EdadMinima)
		{
			EdadMinima=edad;
			NombreDeLaEdadMinima=nombre;
		}

		if(sexo=="m")
		{
			contadorDeHombres++;
		}else
		{
			contadorDeMujeres++;
		}
		
		if(contador==0||importe>importeMaximo)
		{
			importeMaximo=importe;
			SexoDelImporteMaximo=sexo;
		}

		switch(tipoTransaccion)
		{
			case "extraccion":
			contadorExtraccion++;
			break;
			default:
			contadorDeposito++;
			break;
		}

		if(contador==0||edad>EdadMaxima)
		{
			EdadMaxima=edad;
			ImporteDeLaEdadMaxima=importe;
		}

		contador++;
		
		SumaDeEdad=SumaDeEdad+edad;
		promedioDeEdad=SumaDeEdad/contador;

		respuesta=prompt("¿Quiere seguir ingresando clientes?");
	}

	//Fin del While

	if(contadorExtraccion>contadorDeposito)
	{
		OperacionMasUtilizada=tipoTransaccion;
	}else
	{
		OperacionMasUtilizada=tipoTransaccion;
	}


	document.write("El promedio de edad es: "+promedioDeEdad);
	document.write("<br> El nombre de la persona mas joven es: "+NombreDeLaEdadMinima);
	document.write("<br> La cantidad de hombres es: "+contadorDeHombres);
	document.write("<br> La cantidad de mujeres es: "+contadorDeMujeres);
	document.write("<br> El sexo del importe mas alto es: "+SexoDelImporteMaximo);
	document.write("<br> La operacion mas utilizada es: "+OperacionMasUtilizada);
	document.write("<br> El importe de la persona mas vieja es: "+ImporteDeLaEdadMaxima)
}
