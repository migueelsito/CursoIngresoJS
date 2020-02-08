function mostrar()
{
	var Precio;
	var PorcentajeDescuento;
	var Resultado;

	Precio=prompt("Escriba el precio: ","0");
	PorcentajeDescuento=prompt("Escriba el porcentaje de descuento: ","0");

	Precio=parseInt(Precio);
	PorcentajeDescuento=parseInt(PorcentajeDescuento);
	Resultado=parseInt(Resultado);

	Resultado=Precio-Precio*PorcentajeDescuento/100;

	document.getElementById('elPrecioFinal').value=Resultado;
}
