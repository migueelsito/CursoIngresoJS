function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numeroIngresado;
	
	var respuesta='si';
	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un numero: ");
		numeroIngresado=parseInt(numeroIngresado);
		contador=contador+1;
		
		if(numeroIngresado>0)
		{
			positivo=positivo+numeroIngresado;
		}
		if(numeroIngresado<0)
		{
			negativo=negativo*numeroIngresado;
		}


		respuesta=prompt("ingrese 'si' para continuar ingresamdo numeros ");
	}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN