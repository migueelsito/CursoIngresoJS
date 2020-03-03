function mostrar()
{
	var positivo=0;
	var negativo=1;
	var numeroIngresado;
	
	var respuesta='si';
	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un numero: ");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado>0)
		{
			positivo=positivo+numeroIngresado;
		}else
		{
			negativo=negativo*numeroIngresado;
		}
		respuesta=prompt("ingrese 'si' para continuar ingresando numeros ");
	}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN