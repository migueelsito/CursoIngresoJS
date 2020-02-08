
function mostrar()
{
	var longitudLados;
	var perímetro;

	longitudLados=prompt("Escribe la longitud de los lados del rectángulo equilátero: ","0");
	longitudLados=parseInt(longitudLados);

	perímetro=3*longitudLados;

	alert("El perímetro es: "+perímetro);
}
