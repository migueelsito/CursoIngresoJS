
function mostrar()
{
	var ancho;
	var largo;
	var perímetro;

	ancho=prompt("Escriba el ancho del rectángulo: ");
	ancho=parseInt(ancho);

	largo=prompt("Escriba el largo del rectángulo: ");
	largo=parseInt(largo);

	perímetro=(ancho+largo)*2;

	alert("El perímetro del rectángulo es: "+perímetro);
}
