function mostrar()
{
	var edad;
//tomo la edad  
	edad=document.getElementById('edad').value;

	if(edad>17)
	{
		alert("Usted es mayor de edad");
	}
	else
	{
		if(edad>12&&edad<18)
		{
			alert("Usted es adolescente");
		}
		else
		{
			if(edad<13)
			{
				alert("Usted es niño");
			}
		}
	}


}//FIN DE LA FUNCIÓN