function mostrar()
{
	var respuesta="si";
	var numeroIngresado;
	var numeroMaximo=0;
	var numeroMinimo=0;
	// declarar variables

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		if(numeroIngresado<numeroMinimo||numeroMinimo==0)
		{
			numeroMinimo=numeroIngresado;
		}
		if (numeroIngresado>numeroMaximo||numeroMaximo==0) 
		{
			numeroMaximo=numeroIngresado;
		}
		respuesta=prompt("¿Quiere ingresar otro numero?");
	}

	document.getElementById('maximo').value=numeroMaximo;
	document.getElementById('maximo').value=numeroMinimo;



}//FIN DE LA FUNCIÓN