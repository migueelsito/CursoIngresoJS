/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//EJERCICIO 10
	var Importe;
	var Resultado;

	Importe=document.getElementById('importe').value;
	Importe=parseInt(Importe);

	Resultado=Importe-Importe*25/100;

	document.getElementById('resultado').value=Resultado;

	//EJERCICIO 11
	//var Importe;
	//var Descuento;
	//var Resultado;

	//Importe=prompt("Escriba el importe: ","0");
	//Importe=parseInt(Importe);

	//Descuento=prompt("Escriba el descuento: ","0");
	//Descuento=parseInt(Descuento);

	//Resultado=Importe-Importe*Descuento/100;

	//alert("El resultado es "+Resultado);
}
