function mostrar()
{
	var edad;
	var estadocivil;
//tomo la edad  
	edad=document.getElementById('edad').value;
	estadocivil=document.getElementById('estadoCivil').value;

	if(edad<18&&estadocivil!="Soltero")
	{

	}
	else
	{
		if(estadocivil=="Soltero"&&edad>17)
		{
			alert("Es soltero y no es menor.");
		}
	}
}//FIN DE LA FUNCIÓN