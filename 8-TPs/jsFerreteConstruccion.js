/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var rango;
	var alambreNecesario;

	largo=document.getElementById('Largo').value;
	largo=parseInt(largo);

	ancho=document.getElementById('Ancho').value;
	ancho=parseInt(ancho);

	rango=parseInt(rango);
	rango=((largo+ancho)*2);

	alambreNecesario=rango*3;

	document.getElementById('Radio').value=rango

	alert("Alambre a comprar: "+alambreNecesario);

}
function Circulo () 
{
	var rango;
	var alambreNecesario;

	rango=document.getElementById('Radio').value
	rango=parseInt(rango);

	alambreNecesario=rango*3;
	alert("Alambre a comprar: "+alambreNecesario);
}
function Materiales () 
{
	







	
}