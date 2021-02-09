function randRoll()
{
	var x = document.getElementById("aname").value; 
	var y = document.getElementById("ssp").value; 
	
switch(y)
{
	case "1":
	{
			var ablities = 
			[
				'Ability A, Cost 1',
				'Ability B, Cost 1',
				'Ability C, Cost 1',
				'Ability D, Cost 1',
			]
			break;	
	}
	case "2":
	{
			var ablities = 
			[
				'Ability A, Cost 2',
				'Ability B, Cost 2',
				'Ability C, Cost 2',
				'Ability D, Cost 2',
			]
			break;	
	}
	case "3":
	{
			var ablities = 
			[
				'Ability A, Cost 3',
				'Ability B, Cost 3',
				'Ability C, Cost 3',
				'Ability D, Cost 3',
			]
			break;	
	}
}	
	
	var randomNumber = Math.floor(Math.random()*(ablities.length));
	document.getElementById('aname').innerHTML = ablities[randomNumber];
		


}
