function mostrar()
{
	var contador=0;
	var numeroIngresado;
	var numeroPositivo=0;
	var numeroNegativo=0;
	var respuesta="si";
	var contadorPositivos=0;
	var contadorNegativos=0;
	var contadorCeros=0;
	var contadorPares=0;

	numeroPositivo=parseInt(numeroPositivo);
	numeroNegativo=parseInt(numeroNegativo);

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		if(numeroIngresado<0)
		{
			numeroNegativo=numeroNegativo+numeroIngresado;
			contadorNegativos++;
		}
		if(numeroIngresado>0)
		{
			numeroPositivo=numeroPositivo+numeroIngresado;
			contadorPositivos++;
		}else
		{
			contadorCeros++;
		}
		if(numeroIngresado%2==0)
		{
			contadorPares++;
		}
		respuesta=prompt("¿Quiere ingresar otro numero?");
	}

	document.write("La suma de los negativos es: "+numeroNegativo);
	document.write(" La suma de los positivos es: "+numeroPositivo);
	document.write(" La cantidad de positivos es: "+contadorPositivos);
	document.write(" La cantidad de negativos es: "+contadorNegativos);
	document.write(" La cantidad de ceros es:"+contadorCeros);
	document.write(" La cantidad de numeros pares es: "+contadorPares);
	document.write(" El promedio de los positivos es: "+numeroPositivo/contadorPositivos);
	document.write(" El promedio de los negativos es: "+numeroNegativo/contadorNegativos);
	document.write(" La diferencia entre positivos y negativos es: "+numeroPositivo-numeroNegativo);

}//FIN DE LA FUNCIÓN