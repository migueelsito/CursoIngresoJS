function mostrar()
{
	var Precio;
	var PorcentajeDescuento;
	var Resultado;

	Precio=prompt("Escriba el precio: ","0");
	Precio=parseInt(Precio);

	PorcentajeDescuento=prompt("Escriba el porcentaje de descuento: ","0");
	PorcentajeDescuento=parseInt(PorcentajeDescuento);

	Resultado=Precio-Precio*PorcentajeDescuento/100;

	document.getElementById('elPrecioFinal').value=Resultado;
}
