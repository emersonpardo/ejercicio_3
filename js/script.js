window.onload = function()
{
	//console.log(nom_div("personaje"));
	var estaCaminando = false;
	var pies = 1;
	var pies2 = 5;
	nom_div("personaje").setAttribute("class", "go " + "paso_" + pies);
	function caminaPersonaje()
	{
		if(estaCaminando)
		{
			pies++;
			nom_div("personaje").setAttribute("class", "go " + "paso_" + pies);
			if(pies > 12)
			{
				pies = 1;
			}
			
		}
	}
	var tiempo = setInterval(caminaPersonaje, 100);
	
	
	nom_div("boton").addEventListener('click', function(event)
	{
		
		if(!estaCaminando)
		{
			estaCaminando = true;
			this.value = "stop";
		}
		else
		{
			nom_div("personaje").setAttribute("class", "go " + "paso_1");
			pies = 1;
			estaCaminando = false;
			this.value = "go";
		}
	});

	nom_div("velocidad").addEventListener('change', function(event)
	{
		//console.log(this.value);
		clearInterval(tiempo);
		tiempo = setInterval(caminaPersonaje, this.value);
	});

	function nom_div(div)
	{
		return document.getElementById(div);
	}
}