/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumero;
	var segundoNumero;
	var suma;

	primerNumero=document.getElementById('numeroUno').value;
	primerNumero=parseInt(primerNumero);

	segundoNumero=document.getElementById('numeroDos').value;
	segundoNumero=parseInt(segundoNumero);

	suma=primerNumero+segundoNumero;

	alert("la Suma es "+suma);
}

function restar()
{
	var primerNumero;
	var segundoNumero;
	var resta;

	primerNumero=document.getElementById('numeroUno').value;
	primerNumero=parseInt(primerNumero);

	segundoNumero=document.getElementById('numeroDos').value;
	segundoNumero=parseInt(segundoNumero);

	resta=primerNumero-segundoNumero;

	alert("la Resta es "+resta);
}

function multiplicar()
{ 
	var primerNumero;
	var segundoNumero;
	var multiplicación;

	primerNumero=document.getElementById('numeroUno').value;
	primerNumero=parseInt(primerNumero);

	segundoNumero=document.getElementById('numeroDos').value;
	segundoNumero=parseInt(segundoNumero);

	multiplicación=primerNumero*segundoNumero;

	alert("la Multiplicación es "+multiplicación);
}

function dividir()
{
	var primerNumero;
	var segundoNumero;
	var división;

	primerNumero=document.getElementById('numeroUno').value;
	primerNumero=parseInt(primerNumero);

	segundoNumero=document.getElementById('numeroDos').value;
	segundoNumero=parseInt(segundoNumero);

	división=primerNumero/segundoNumero;

	alert("la División es "+división);
}

