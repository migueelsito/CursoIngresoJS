function mostrar()
{
	var nota;
	var nota;
	//Genero el número RANDOM entre 1 y 10 
	nota=Math.floor((Math.random() * 10) + 1);
	console.log(nota);
	if(nota>8)
	{
		alert("EXCELENTE");
	}
	else
	{
		if(nota<5)
		{
			alert("Vamos, la proxima se puede");
		}
		else
		{
			alert("APROBÓ");
		}
	}
//probando git
}//FIN DE LA FUNCIÓN