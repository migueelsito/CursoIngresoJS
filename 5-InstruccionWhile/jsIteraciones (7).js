function mostrar()
{
	var numeroIngresado;
	var respuesta;
	var acumulador;
	var contador;

	contador=0;
	acumulador=0;
	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un numero: ");
		numeroIngresado=parseInt(numeroIngresado);
		contador++;
		respuesta=prompt("¿Quiere ingresar otro numero?");
		acumulador=acumulador+numeroIngresado;
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
}//FIN DE LA FUNCIÓN