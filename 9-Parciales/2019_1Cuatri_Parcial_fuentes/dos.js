function mostrar()
{
 	var nombre1;
 	var nombre2;
 	var peso1;
 	var peso2;
 	var pesosSumados;
 	var promedio;

 	nombre1=prompt("Primera persona, escriba su nombre","");
 	peso1=prompt("Ahora escriba su peso","0");
 	nombre2=prompt("Segunda persona, escriba su nombre");
 	peso2=prompt("Segunda persona, escriba su peso","0");

 	peso1=parseInt(peso1);
 	peso2=parseInt(peso2);

 	pesosSumados=peso1+peso2;

 	promedio=pesosSumados/2;

 	alert("ustedes se llaman "+nombre1+" y "+nombre2+" pesan "+peso1+" y "+peso2+" kilos, que sumados son "+pesosSumados+" kilos y el promedio de peso "+promedio);

}
