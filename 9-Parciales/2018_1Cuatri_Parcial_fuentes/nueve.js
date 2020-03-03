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
	var SumaDeEdad;
	var contador;
	var promedioDeEdad;
	var EdadMinima;
	var NombreDeLaEdadMinima;
	var contadorHombres;

	respuesta="si";
	SumaDeEdad=0;
	contador=0;
	EdadMinima=0;
	contadorHombres=0;

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

		//fin de la validacion

		if(contador==0||edad<EdadMinima);
		{
			EdadMinima=edad;
			NombreDeLaEdadMinima=nombre;
		}

		if(sexo=="m")
		{
			contadorHombres++;
		}
		
		contadorHombres++;
		contador++;
		
		SumaDeEdad=SumaDeEdad+edad;
		promedioDeEdad=SumaDeEdad/contador;

		respuesta=prompt("Ingrese si para seguir ingresando clienes");
	}

	document.write("El promedio de edad es: "+promedioDeEdad);
	document.write("El nombre del mas joven es: ")+NombreDeLaEdadMinima;
}
