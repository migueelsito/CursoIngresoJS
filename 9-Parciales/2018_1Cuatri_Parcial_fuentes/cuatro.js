function mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=prompt("Introducir el primer número: ");
	
	numeroDos=prompt("Introducir el segundo número: ");

	resultado=parseInt(resultado);

	if(numeroUno==numeroDos)
	{
		alert (numeroUno+numeroDos);
	}else
	{
		if(numeroUno>numeroDos)
		{
			numeroUno=parseInt(numeroUno);
			numeroDos=parseInt(numeroDos);
			resultado=numeroUno-numeroDos;
			alert("La resta es: ");
		}else
		{
			resultado=numeroUno+numeroDos;
			alert ("La suma es: ");
		}if(resultado>10)
		{
			alert ("La suma es: "+resultado+" y superó el 10.");
		}
	}
}
