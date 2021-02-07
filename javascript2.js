function newLoot2()
{
	var x = document.getElementById("treasureSelect").value; 
	var y = document.getElementById("lairSelect").value;

	var gold = Math.floor(Math.random()*(5));
	var silver = Math.floor(Math.random()*50);
	var copper = Math.floor(Math.random()*99);

switch(x)
{
	case "Encounter Level 1":
	{
		switch(y)
		{
			case "Plains":
			//loot pool for Plains
			var loot = 
			[
				'Level 1 Plains Common (1)',
				'Level 1 Plains Common (2)',
				'Level 1 Plains Common (3)',
				'Level 1 Plains Common (4)',
				'Level 1 Plains Common (5)',
				'Level 1 Plains Common (6)',
				'Level 1 Plains Common (7)',
				'Level 1 Plains Common (8)',
				'Level 1 Plains Common (9)',
				'Level 1 Plains Common (10)',
				'Level 1 Plains Common (11)',
				'Level 1 Plains Common (12)',
				'Level 1 Plains Common (13)',
				'Level 1 Plains Common (14)',
				'Level 1 Plains Common (15)',
				'Level 1 Plains Common (16)',
				'Level 1 Plains Common (17)',
				'Level 1 Plains Common (18)',
				'Level 1 Plains Common (19)',
				'Level 1 Plains Common (20)',
			]
			var loot2 = 
			[
				'None (1)',
				'None (2)',
				'None (3)',
				'None (4)',
				'None (5)',
				'None (6)',
				'None (7)',
				'None (8)',
				'None (9)',
				'None (10)',
				'Level 1 Plains Uncommon (11)',
				'Level 1 Plains Uncommon (12)',
				'Level 1 Plains Uncommon (13)',
				'Level 1 Plains Uncommon (14)',
				'Level 1 Plains Uncommon (15)',
				'Level 1 Plains Uncommon (16)',
				'Level 1 Plains Uncommon (17)',
				'Level 1 Plains Uncommon (18)',
				'Level 1 Plains Uncommon (19)',
				'Level 1 Plains Uncommon (20)',
			]
			var loot3 = 
			[
				'None (1)',
				'None (2)',
				'None (3)',
				'None (4)',
				'None (5)',
				'None (6)',
				'None (7)',
				'None (8)',
				'None (9)',
				'None (10)',
				'None (11)',
				'None (12)',
				'None (13)',
				'None (14)',
				'None (15)',
				'Level 1 Plains Rare (16)',
				'Level 1 Plains Rare (17)',
				'Level 1 Plains Rare (18)',
				'Level 1 Plains Rare (19)',
				'Level 1 Plains Rare (20)',
			]
			break;

			//loot pool for Forest
			case "Forest":
			var loot = 
			[
				'Level 1 Forest Common (1)',
				'Level 1 Forest Common (2)',
				'Level 1 Forest Common (3)',
				'Level 1 Forest Common (4)',
				'Level 1 Forest Common (5)',
				'Level 1 Forest Common (6)',
				'Level 1 Forest Common (7)',
				'Level 1 Forest Common (8)',
				'Level 1 Forest Common (9)',
				'Level 1 Forest Common (10)',
				'Level 1 Forest Common (11)',
				'Level 1 Forest Common (12)',
				'Level 1 Forest Common (13)',
				'Level 1 Forest Common (14)',
				'Level 1 Forest Common (15)',
				'Level 1 Forest Common (16)',
				'Level 1 Forest Common (17)',
				'Level 1 Forest Common (18)',
				'Level 1 Forest Common (19)',
				'Level 1 Forest Common (20)',
			]
			var loot2 = 
			[
				'None (1)',
				'None (2)',
				'None (3)',
				'None (4)',
				'None (5)',
				'None (6)',
				'None (7)',
				'None (8)',
				'None (9)',
				'None (10)',
				'Level 1 Forest Uncommon (11)',
				'Level 1 Forest Uncommon (12)',
				'Level 1 Forest Uncommon (13)',
				'Level 1 Forest Uncommon (14)',
				'Level 1 Forest Uncommon (15)',
				'Level 1 Forest Uncommon (16)',
				'Level 1 Forest Uncommon (17)',
				'Level 1 Forest Uncommon (18)',
				'Level 1 Forest Uncommon (19)',
				'Level 1 Forest Uncommon (20)',
			]
			var loot3 = 
			[
				'None (1)',
				'None (2)',
				'None (3)',
				'None (4)',
				'None (5)',
				'None (6)',
				'None (7)',
				'None (8)',
				'None (9)',
				'None (10)',
				'None (11)',
				'None (12)',
				'None (13)',
				'None (14)',
				'None (15)',
				'Level 1 Forest Rare (16)',
				'Level 1 Forest Rare (17)',
				'Level 1 Forest Rare (18)',
				'Level 1 Forest Rare (19)',
				'Level 1 Forest Rare (20)',
			]
			break;
		
			//loot pool for Island
			case "Island":
			var loot = 
			[
				'Level 1 Island Common (1)',
				'Level 1 Island Common (2)',
				'Level 1 Island Common (3)',
				'Level 1 Island Common (4)',
				'Level 1 Island Common (5)',
				'Level 1 Island Common (6)',
				'Level 1 Island Common (7)',
				'Level 1 Island Common (8)',
				'Level 1 Island Common (9)',
				'Level 1 Island Common (10)',
				'Level 1 Island Common (11)',
				'Level 1 Island Common (12)',
				'Level 1 Island Common (13)',
				'Level 1 Island Common (14)',
				'Level 1 Island Common (15)',
				'Level 1 Island Common (16)',
				'Level 1 Island Common (17)',
				'Level 1 Island Common (18)',
				'Level 1 Island Common (19)',
				'Level 1 Island Common (20)',
			]
			var loot2 = 
			[
				'None (1)',
				'None (2)',
				'None (3)',
				'None (4)',
				'None (5)',
				'None (6)',
				'None (7)',
				'None (8)',
				'None (9)',
				'None (10)',
				'Level 1 Island Uncommon (11)',
				'Level 1 Island Uncommon (12)',
				'Level 1 Island Uncommon (13)',
				'Level 1 Island Uncommon (14)',
				'Level 1 Island Uncommon (15)',
				'Level 1 Island Uncommon (16)',
				'Level 1 Island Uncommon (17)',
				'Level 1 Island Uncommon (18)',
				'Level 1 Island Uncommon (19)',
				'Level 1 Island Uncommon (20)',
			]
			var loot3 = 
			[
				'None (1)',
				'None (2)',
				'None (3)',
				'None (4)',
				'None (5)',
				'None (6)',
				'None (7)',
				'None (8)',
				'None (9)',
				'None (10)',
				'None (11)',
				'None (12)',
				'None (13)',
				'None (14)',
				'None (15)',
				'Level 1 Island Rare (16)',
				'Level 1 Island Rare (17)',
				'Level 1 Island Rare (18)',
				'Level 1 Island Rare (19)',
				'Level 1 Island Rare (20)',
			]
			break;
		
			//loot pool for Swamp
			case "Swamp":
			var loot = 
			[
				'Level 1 Swamp Common (1)',
				'Level 1 Swamp Common (2)',
				'Level 1 Swamp Common (3)',
				'Level 1 Swamp Common (4)',
				'Level 1 Swamp Common (5)',
				'Level 1 Swamp Common (6)',
				'Level 1 Swamp Common (7)',
				'Level 1 Swamp Common (8)',
				'Level 1 Swamp Common (9)',
				'Level 1 Swamp Common (10)',
				'Level 1 Swamp Common (11)',
				'Level 1 Swamp Common (12)',
				'Level 1 Swamp Common (13)',
				'Level 1 Swamp Common (14)',
				'Level 1 Swamp Common (15)',
				'Level 1 Swamp Common (16)',
				'Level 1 Swamp Common (17)',
				'Level 1 Swamp Common (18)',
				'Level 1 Swamp Common (19)',
				'Level 1 Swamp Common (20)',
			]
			var loot2 = 
			[
				'None (1)',
				'None (2)',
				'None (3)',
				'None (4)',
				'None (5)',
				'None (6)',
				'None (7)',
				'None (8)',
				'None (9)',
				'None (10)',
				'Level 1 Swamp Uncommon (11)',
				'Level 1 Swamp Uncommon (12)',
				'Level 1 Swamp Uncommon (13)',
				'Level 1 Swamp Uncommon (14)',
				'Level 1 Swamp Uncommon (15)',
				'Level 1 Swamp Uncommon (16)',
				'Level 1 Swamp Uncommon (17)',
				'Level 1 Swamp Uncommon (18)',
				'Level 1 Swamp Uncommon (19)',
				'Level 1 Swamp Uncommon (20)',
			]
			var loot3 = 
			[
				'None (1)',
				'None (2)',
				'None (3)',
				'None (4)',
				'None (5)',
				'None (6)',
				'None (7)',
				'None (8)',
				'None (9)',
				'None (10)',
				'None (11)',
				'None (12)',
				'None (13)',
				'None (14)',
				'None (15)',
				'Level 1 Swamp Rare (16)',
				'Level 1 Swamp Rare (17)',
				'Level 1 Swamp Rare (18)',
				'Level 1 Swamp Rare (19)',
				'Level 1 Swamp Rare (20)',
			]
			break;
		}
		break;
	}	



//Loot Pool for' Encounter Level 2
case "Encounter Level 2":
{
		switch(y)
		{
			case "Plains":
			//loot pool for Plains
			var loot = 
			[
				'Level 2 Plains Common (1)',
				'Level 2 Plains Common (2)',
				'Level 2 Plains Common (3)',
				'Level 2 Plains Common (4)',
				'Level 2 Plains Common (5)',
				'Level 2 Plains Common (6)',
				'Level 2 Plains Common (7)',
				'Level 2 Plains Common (8)',
				'Level 2 Plains Common (9)',
				'Level 2 Plains Common (10)',
				'Level 2 Plains Common (11)',
				'Level 2 Plains Common (12)',
				'Level 2 Plains Common (13)',
				'Level 2 Plains Common (14)',
				'Level 2 Plains Common (15)',
				'Level 2 Plains Common (16)',
				'Level 2 Plains Common (17)',
				'Level 2 Plains Common (18)',
				'Level 2 Plains Common (19)',
				'Level 2 Plains Common (20)',
			]
			var loot2 = 
			[
				'None (1)',
				'None (2)',
				'None (3)',
				'None (4)',
				'None (5)',
				'None (6)',
				'None (7)',
				'None (8)',
				'None (9)',
				'None (10)',
				'Level 2 Plains Uncommon (11)',
				'Level 2 Plains Uncommon (12)',
				'Level 2 Plains Uncommon (13)',
				'Level 2 Plains Uncommon (14)',
				'Level 2 Plains Uncommon (15)',
				'Level 2 Plains Uncommon (16)',
				'Level 2 Plains Uncommon (17)',
				'Level 2 Plains Uncommon (18)',
				'Level 2 Plains Uncommon (19)',
				'Level 2 Plains Uncommon (20)',
			]
			var loot3 = 
			[
				'None (1)',
				'None (2)',
				'None (3)',
				'None (4)',
				'None (5)',
				'None (6)',
				'None (7)',
				'None (8)',
				'None (9)',
				'None (10)',
				'None (11)',
				'None (12)',
				'None (13)',
				'None (14)',
				'None (15)',
				'Level 2 Plains Rare (16)',
				'Level 2 Plains Rare (17)',
				'Level 2 Plains Rare (18)',
				'Level 2 Plains Rare (19)',
				'Level 2 Plains Rare (20)',
			]
			break;

			//loot pool for Forest
			case "Forest":
			var loot = 
			[
				'Level 2 Forest Common (1)',
				'Level 2 Forest Common (2)',
				'Level 2 Forest Common (3)',
				'Level 2 Forest Common (4)',
				'Level 2 Forest Common (5)',
				'Level 2 Forest Common (6)',
				'Level 2 Forest Common (7)',
				'Level 2 Forest Common (8)',
				'Level 2 Forest Common (9)',
				'Level 2 Forest Common (10)',
				'Level 2 Forest Common (11)',
				'Level 2 Forest Common (12)',
				'Level 2 Forest Common (13)',
				'Level 2 Forest Common (14)',
				'Level 2 Forest Common (15)',
				'Level 2 Forest Common (16)',
				'Level 2 Forest Common (17)',
				'Level 2 Forest Common (18)',
				'Level 2 Forest Common (19)',
				'Level 2 Forest Common (20)',
			]
			var loot2 = 
			[
				'None (1)',
				'None (2)',
				'None (3)',
				'None (4)',
				'None (5)',
				'None (6)',
				'None (7)',
				'None (8)',
				'None (9)',
				'None (10)',
				'Level 2 Forest Uncommon (11)',
				'Level 2 Forest Uncommon (12)',
				'Level 2 Forest Uncommon (13)',
				'Level 2 Forest Uncommon (14)',
				'Level 2 Forest Uncommon (15)',
				'Level 2 Forest Uncommon (16)',
				'Level 2 Forest Uncommon (17)',
				'Level 2 Forest Uncommon (18)',
				'Level 2 Forest Uncommon (19)',
				'Level 2 Forest Uncommon (20)',
			]
			var loot3 = 
			[
				'None (1)',
				'None (2)',
				'None (3)',
				'None (4)',
				'None (5)',
				'None (6)',
				'None (7)',
				'None (8)',
				'None (9)',
				'None (10)',
				'None (11)',
				'None (12)',
				'None (13)',
				'None (14)',
				'None (15)',
				'Level 2 Forest Rare (16)',
				'Level 2 Forest Rare (17)',
				'Level 2 Forest Rare (18)',
				'Level 2 Forest Rare (19)',
				'Level 2 Forest Rare (20)',
			]
			break;
		
			//loot pool for Island
			case "Island":
			var loot = 
			[
				'Level 2 Island Common (1)',
				'Level 2 Island Common (2)',
				'Level 2 Island Common (3)',
				'Level 2 Island Common (4)',
				'Level 2 Island Common (5)',
				'Level 2 Island Common (6)',
				'Level 2 Island Common (7)',
				'Level 2 Island Common (8)',
				'Level 2 Island Common (9)',
				'Level 2 Island Common (10)',
				'Level 2 Island Common (11)',
				'Level 2 Island Common (12)',
				'Level 2 Island Common (13)',
				'Level 2 Island Common (14)',
				'Level 2 Island Common (15)',
				'Level 2 Island Common (16)',
				'Level 2 Island Common (17)',
				'Level 2 Island Common (18)',
				'Level 2 Island Common (19)',
				'Level 2 Island Common (20)',
			]
			var loot2 = 
			[
				'None (1)',
				'None (2)',
				'None (3)',
				'None (4)',
				'None (5)',
				'None (6)',
				'None (7)',
				'None (8)',
				'None (9)',
				'None (10)',
				'Level 2 Island Uncommon (11)',
				'Level 2 Island Uncommon (12)',
				'Level 2 Island Uncommon (13)',
				'Level 2 Island Uncommon (14)',
				'Level 2 Island Uncommon (15)',
				'Level 2 Island Uncommon (16)',
				'Level 2 Island Uncommon (17)',
				'Level 2 Island Uncommon (18)',
				'Level 2 Island Uncommon (19)',
				'Level 2 Island Uncommon (20)',
			]
			var loot3 = 
			[
				'None (1)',
				'None (2)',
				'None (3)',
				'None (4)',
				'None (5)',
				'None (6)',
				'None (7)',
				'None (8)',
				'None (9)',
				'None (10)',
				'None (11)',
				'None (12)',
				'None (13)',
				'None (14)',
				'None (15)',
				'Level 2 Island Rare (16)',
				'Level 2 Island Rare (17)',
				'Level 2 Island Rare (18)',
				'Level 2 Island Rare (19)',
				'Level 2 Island Rare (20)',
			]
			break;
		
			//loot pool for Swamp
			case "Swamp":
			var loot = 
			[
				'Level 2 Swamp Common (1)',
				'Level 2 Swamp Common (2)',
				'Level 2 Swamp Common (3)',
				'Level 2 Swamp Common (4)',
				'Level 2 Swamp Common (5)',
				'Level 2 Swamp Common (6)',
				'Level 2 Swamp Common (7)',
				'Level 2 Swamp Common (8)',
				'Level 2 Swamp Common (9)',
				'Level 2 Swamp Common (10)',
				'Level 2 Swamp Common (11)',
				'Level 2 Swamp Common (12)',
				'Level 2 Swamp Common (13)',
				'Level 2 Swamp Common (14)',
				'Level 2 Swamp Common (15)',
				'Level 2 Swamp Common (16)',
				'Level 2 Swamp Common (17)',
				'Level 2 Swamp Common (18)',
				'Level 2 Swamp Common (19)',
				'Level 2 Swamp Common (20)',
			]
			var loot2 = 
			[
				'None (1)',
				'None (2)',
				'None (3)',
				'None (4)',
				'None (5)',
				'None (6)',
				'None (7)',
				'None (8)',
				'None (9)',
				'None (10)',
				'Level 2 Swamp Uncommon (11)',
				'Level 2 Swamp Uncommon (12)',
				'Level 2 Swamp Uncommon (13)',
				'Level 2 Swamp Uncommon (14)',
				'Level 2 Swamp Uncommon (15)',
				'Level 2 Swamp Uncommon (16)',
				'Level 2 Swamp Uncommon (17)',
				'Level 2 Swamp Uncommon (18)',
				'Level 2 Swamp Uncommon (19)',
				'Level 2 Swamp Uncommon (20)',
			]
			var loot3 = 
			[
				'None (1)',
				'None (2)',
				'None (3)',
				'None (4)',
				'None (5)',
				'None (6)',
				'None (7)',
				'None (8)',
				'None (9)',
				'None (10)',
				'None (11)',
				'None (12)',
				'None (13)',
				'None (14)',
				'None (15)',
				'Level 2 Swamp Rare (16)',
				'Level 2 Swamp Rare (17)',
				'Level 2 Swamp Rare (18)',
				'Level 2 Swamp Rare (19)',
				'Level 2 Swamp Rare (20)',
			]
			break;
		}
		break;
	}
//Loot Pool for Encounter Level 3
case "Encounter Level 3":
{
		switch(y)
		{
			case "Plains":
			//loot pool for Plains
			var loot = 
			[
				'Level 3 Plains Common (1)',
				'Level 3 Plains Common (2)',
				'Level 3 Plains Common (3)',
				'Level 3 Plains Common (4)',
				'Level 3 Plains Common (5)',
				'Level 3 Plains Common (6)',
				'Level 3 Plains Common (7)',
				'Level 3 Plains Common (8)',
				'Level 3 Plains Common (9)',
				'Level 3 Plains Common (10)',
				'Level 3 Plains Common (11)',
				'Level 3 Plains Common (12)',
				'Level 3 Plains Common (13)',
				'Level 3 Plains Common (14)',
				'Level 3 Plains Common (15)',
				'Level 3 Plains Common (16)',
				'Level 3 Plains Common (17)',
				'Level 3 Plains Common (18)',
				'Level 3 Plains Common (19)',
				'Level 3 Plains Common (20)',
			]
			var loot2 = 
			[
				'None (1)',
				'None (2)',
				'None (3)',
				'None (4)',
				'None (5)',
				'None (6)',
				'None (7)',
				'None (8)',
				'None (9)',
				'None (10)',
				'Level 3 Plains Uncommon (11)',
				'Level 3 Plains Uncommon (12)',
				'Level 3 Plains Uncommon (13)',
				'Level 3 Plains Uncommon (14)',
				'Level 3 Plains Uncommon (15)',
				'Level 3 Plains Uncommon (16)',
				'Level 3 Plains Uncommon (17)',
				'Level 3 Plains Uncommon (18)',
				'Level 3 Plains Uncommon (19)',
				'Level 3 Plains Uncommon (20)',
			]
			var loot3 = 
			[
				'None (1)',
				'None (2)',
				'None (3)',
				'None (4)',
				'None (5)',
				'None (6)',
				'None (7)',
				'None (8)',
				'None (9)',
				'None (10)',
				'None (11)',
				'None (12)',
				'None (13)',
				'None (14)',
				'None (15)',
				'Level 3 Plains Rare (16)',
				'Level 3 Plains Rare (17)',
				'Level 3 Plains Rare (18)',
				'Level 3 Plains Rare (19)',
				'Level 3 Plains Rare (20)',
			]
			break;

			//loot pool for Forest
			case "Forest":
			var loot = 
			[
				'Level 3 Forest Common (1)',
				'Level 3 Forest Common (2)',
				'Level 3 Forest Common (3)',
				'Level 3 Forest Common (4)',
				'Level 3 Forest Common (5)',
				'Level 3 Forest Common (6)',
				'Level 3 Forest Common (7)',
				'Level 3 Forest Common (8)',
				'Level 3 Forest Common (9)',
				'Level 3 Forest Common (10)',
				'Level 3 Forest Common (11)',
				'Level 3 Forest Common (12)',
				'Level 3 Forest Common (13)',
				'Level 3 Forest Common (14)',
				'Level 3 Forest Common (15)',
				'Level 3 Forest Common (16)',
				'Level 3 Forest Common (17)',
				'Level 3 Forest Common (18)',
				'Level 3 Forest Common (19)',
				'Level 3 Forest Common (20)',
			]
			var loot2 = 
			[
				'None (1)',
				'None (2)',
				'None (3)',
				'None (4)',
				'None (5)',
				'None (6)',
				'None (7)',
				'None (8)',
				'None (9)',
				'None (10)',
				'Level 3 Forest Uncommon (11)',
				'Level 3 Forest Uncommon (12)',
				'Level 3 Forest Uncommon (13)',
				'Level 3 Forest Uncommon (14)',
				'Level 3 Forest Uncommon (15)',
				'Level 3 Forest Uncommon (16)',
				'Level 3 Forest Uncommon (17)',
				'Level 3 Forest Uncommon (18)',
				'Level 3 Forest Uncommon (19)',
				'Level 3 Forest Uncommon (20)',
			]
			var loot3 = 
			[
				'None (1)',
				'None (2)',
				'None (3)',
				'None (4)',
				'None (5)',
				'None (6)',
				'None (7)',
				'None (8)',
				'None (9)',
				'None (10)',
				'None (11)',
				'None (12)',
				'None (13)',
				'None (14)',
				'None (15)',
				'Level 3 Forest Rare (16)',
				'Level 3 Forest Rare (17)',
				'Level 3 Forest Rare (18)',
				'Level 3 Forest Rare (19)',
				'Level 3 Forest Rare (20)',
			]
			break;
		
			//loot pool for Island
			case "Island":
			var loot = 
			[
				'Level 3 Island Common (1)',
				'Level 3 Island Common (2)',
				'Level 3 Island Common (3)',
				'Level 3 Island Common (4)',
				'Level 3 Island Common (5)',
				'Level 3 Island Common (6)',
				'Level 3 Island Common (7)',
				'Level 3 Island Common (8)',
				'Level 3 Island Common (9)',
				'Level 3 Island Common (10)',
				'Level 3 Island Common (11)',
				'Level 3 Island Common (12)',
				'Level 3 Island Common (13)',
				'Level 3 Island Common (14)',
				'Level 3 Island Common (15)',
				'Level 3 Island Common (16)',
				'Level 3 Island Common (17)',
				'Level 3 Island Common (18)',
				'Level 3 Island Common (19)',
				'Level 3 Island Common (20)',
			]
			var loot2 = 
			[
				'None (1)',
				'None (2)',
				'None (3)',
				'None (4)',
				'None (5)',
				'None (6)',
				'None (7)',
				'None (8)',
				'None (9)',
				'None (10)',
				'Level 3 Island Uncommon (11)',
				'Level 3 Island Uncommon (12)',
				'Level 3 Island Uncommon (13)',
				'Level 3 Island Uncommon (14)',
				'Level 3 Island Uncommon (15)',
				'Level 3 Island Uncommon (16)',
				'Level 3 Island Uncommon (17)',
				'Level 3 Island Uncommon (18)',
				'Level 3 Island Uncommon (19)',
				'Level 3 Island Uncommon (20)',
			]
			var loot3 = 
			[
				'None (1)',
				'None (2)',
				'None (3)',
				'None (4)',
				'None (5)',
				'None (6)',
				'None (7)',
				'None (8)',
				'None (9)',
				'None (10)',
				'None (11)',
				'None (12)',
				'None (13)',
				'None (14)',
				'None (15)',
				'Level 3 Island Rare (16)',
				'Level 3 Island Rare (17)',
				'Level 3 Island Rare (18)',
				'Level 3 Island Rare (19)',
				'Level 3 Island Rare (20)',
			]
			break;
		
			//loot pool for Swamp
			case "Swamp":
			var loot = 
			[
				'Level 3 Swamp Common (1)',
				'Level 3 Swamp Common (2)',
				'Level 3 Swamp Common (3)',
				'Level 3 Swamp Common (4)',
				'Level 3 Swamp Common (5)',
				'Level 3 Swamp Common (6)',
				'Level 3 Swamp Common (7)',
				'Level 3 Swamp Common (8)',
				'Level 3 Swamp Common (9)',
				'Level 3 Swamp Common (10)',
				'Level 3 Swamp Common (11)',
				'Level 3 Swamp Common (12)',
				'Level 3 Swamp Common (13)',
				'Level 3 Swamp Common (14)',
				'Level 3 Swamp Common (15)',
				'Level 3 Swamp Common (16)',
				'Level 3 Swamp Common (17)',
				'Level 3 Swamp Common (18)',
				'Level 3 Swamp Common (19)',
				'Level 3 Swamp Common (20)',
			]
			var loot2 = 
			[
				'None (1)',
				'None (2)',
				'None (3)',
				'None (4)',
				'None (5)',
				'None (6)',
				'None (7)',
				'None (8)',
				'None (9)',
				'None (10)',
				'Level 3 Swamp Uncommon (11)',
				'Level 3 Swamp Uncommon (12)',
				'Level 3 Swamp Uncommon (13)',
				'Level 3 Swamp Uncommon (14)',
				'Level 3 Swamp Uncommon (15)',
				'Level 3 Swamp Uncommon (16)',
				'Level 3 Swamp Uncommon (17)',
				'Level 3 Swamp Uncommon (18)',
				'Level 3 Swamp Uncommon (19)',
				'Level 3 Swamp Uncommon (20)',
			]
			var loot3 = 
			[
				'None (1)',
				'None (2)',
				'None (3)',
				'None (4)',
				'None (5)',
				'None (6)',
				'None (7)',
				'None (8)',
				'None (9)',
				'None (10)',
				'None (11)',
				'None (12)',
				'None (13)',
				'None (14)',
				'None (15)',
				'Level 3 Swamp Rare (16)',
				'Level 3 Swamp Rare (17)',
				'Level 3 Swamp Rare (18)',
				'Level 3 Swamp Rare (19)',
				'Level 3 Swamp Rare (20)',
			]
			break;
		}
		break;
	}
//Loot Pool for Encounter Level 4
case "Encounter Level 4":
{
		switch(y)
		{
			case "Plains":
			//loot pool for Plains
			var loot = 
			[
				'Level 4 Plains Common (1)',
				'Level 4 Plains Common (2)',
				'Level 4 Plains Common (3)',
				'Level 4 Plains Common (4)',
				'Level 4 Plains Common (5)',
				'Level 4 Plains Common (6)',
				'Level 4 Plains Common (7)',
				'Level 4 Plains Common (8)',
				'Level 4 Plains Common (9)',
				'Level 4 Plains Common (10)',
				'Level 4 Plains Common (11)',
				'Level 4 Plains Common (12)',
				'Level 4 Plains Common (13)',
				'Level 4 Plains Common (14)',
				'Level 4 Plains Common (15)',
				'Level 4 Plains Common (16)',
				'Level 4 Plains Common (17)',
				'Level 4 Plains Common (18)',
				'Level 4 Plains Common (19)',
				'Level 4 Plains Common (20)',
			]
			var loot2 = 
			[
				'None (1)',
				'None (2)',
				'None (3)',
				'None (4)',
				'None (5)',
				'None (6)',
				'None (7)',
				'None (8)',
				'None (9)',
				'None (10)',
				'Level 4 Plains Uncommon (11)',
				'Level 4 Plains Uncommon (12)',
				'Level 4 Plains Uncommon (13)',
				'Level 4 Plains Uncommon (14)',
				'Level 4 Plains Uncommon (15)',
				'Level 4 Plains Uncommon (16)',
				'Level 4 Plains Uncommon (17)',
				'Level 4 Plains Uncommon (18)',
				'Level 4 Plains Uncommon (19)',
				'Level 4 Plains Uncommon (20)',
			]
			var loot3 = 
			[
				'None (1)',
				'None (2)',
				'None (3)',
				'None (4)',
				'None (5)',
				'None (6)',
				'None (7)',
				'None (8)',
				'None (9)',
				'None (10)',
				'None (11)',
				'None (12)',
				'None (13)',
				'None (14)',
				'None (15)',
				'Level 4 Plains Rare (16)',
				'Level 4 Plains Rare (17)',
				'Level 4 Plains Rare (18)',
				'Level 4 Plains Rare (19)',
				'Level 4 Plains Rare (20)',
			]
			break;

			//loot pool for Forest
			case "Forest":
			var loot = 
			[
				'Level 4 Forest Common (1)',
				'Level 4 Forest Common (2)',
				'Level 4 Forest Common (3)',
				'Level 4 Forest Common (4)',
				'Level 4 Forest Common (5)',
				'Level 4 Forest Common (6)',
				'Level 4 Forest Common (7)',
				'Level 4 Forest Common (8)',
				'Level 4 Forest Common (9)',
				'Level 4 Forest Common (10)',
				'Level 4 Forest Common (11)',
				'Level 4 Forest Common (12)',
				'Level 4 Forest Common (13)',
				'Level 4 Forest Common (14)',
				'Level 4 Forest Common (15)',
				'Level 4 Forest Common (16)',
				'Level 4 Forest Common (17)',
				'Level 4 Forest Common (18)',
				'Level 4 Forest Common (19)',
				'Level 4 Forest Common (20)',
			]
			var loot2 = 
			[
				'None (1)',
				'None (2)',
				'None (3)',
				'None (4)',
				'None (5)',
				'None (6)',
				'None (7)',
				'None (8)',
				'None (9)',
				'None (10)',
				'Level 4 Forest Uncommon (11)',
				'Level 4 Forest Uncommon (12)',
				'Level 4 Forest Uncommon (13)',
				'Level 4 Forest Uncommon (14)',
				'Level 4 Forest Uncommon (15)',
				'Level 4 Forest Uncommon (16)',
				'Level 4 Forest Uncommon (17)',
				'Level 4 Forest Uncommon (18)',
				'Level 4 Forest Uncommon (19)',
				'Level 4 Forest Uncommon (20)',
			]
			var loot3 = 
			[
				'None (1)',
				'None (2)',
				'None (3)',
				'None (4)',
				'None (5)',
				'None (6)',
				'None (7)',
				'None (8)',
				'None (9)',
				'None (10)',
				'None (11)',
				'None (12)',
				'None (13)',
				'None (14)',
				'None (15)',
				'Level 4 Forest Rare (16)',
				'Level 4 Forest Rare (17)',
				'Level 4 Forest Rare (18)',
				'Level 4 Forest Rare (19)',
				'Level 4 Forest Rare (20)',
			]
			break;
		
			//loot pool for Island
			case "Island":
			var loot = 
			[
				'Level 4 Island Common (1)',
				'Level 4 Island Common (2)',
				'Level 4 Island Common (3)',
				'Level 4 Island Common (4)',
				'Level 4 Island Common (5)',
				'Level 4 Island Common (6)',
				'Level 4 Island Common (7)',
				'Level 4 Island Common (8)',
				'Level 4 Island Common (9)',
				'Level 4 Island Common (10)',
				'Level 4 Island Common (11)',
				'Level 4 Island Common (12)',
				'Level 4 Island Common (13)',
				'Level 4 Island Common (14)',
				'Level 4 Island Common (15)',
				'Level 4 Island Common (16)',
				'Level 4 Island Common (17)',
				'Level 4 Island Common (18)',
				'Level 4 Island Common (19)',
				'Level 4 Island Common (20)',
			]
			var loot2 = 
			[
				'None (1)',
				'None (2)',
				'None (3)',
				'None (4)',
				'None (5)',
				'None (6)',
				'None (7)',
				'None (8)',
				'None (9)',
				'None (10)',
				'Level 4 Island Uncommon (11)',
				'Level 4 Island Uncommon (12)',
				'Level 4 Island Uncommon (13)',
				'Level 4 Island Uncommon (14)',
				'Level 4 Island Uncommon (15)',
				'Level 4 Island Uncommon (16)',
				'Level 4 Island Uncommon (17)',
				'Level 4 Island Uncommon (18)',
				'Level 4 Island Uncommon (19)',
				'Level 4 Island Uncommon (20)',
			]
			var loot3 = 
			[
				'None (1)',
				'None (2)',
				'None (3)',
				'None (4)',
				'None (5)',
				'None (6)',
				'None (7)',
				'None (8)',
				'None (9)',
				'None (10)',
				'None (11)',
				'None (12)',
				'None (13)',
				'None (14)',
				'None (15)',
				'Level 4 Island Rare (16)',
				'Level 4 Island Rare (17)',
				'Level 4 Island Rare (18)',
				'Level 4 Island Rare (19)',
				'Level 4 Island Rare (20)',
			]
			break;
		
			//loot pool for Swamp
			case "Swamp":
			var loot = 
			[
				'Level 4 Swamp Common (1)',
				'Level 4 Swamp Common (2)',
				'Level 4 Swamp Common (3)',
				'Level 4 Swamp Common (4)',
				'Level 4 Swamp Common (5)',
				'Level 4 Swamp Common (6)',
				'Level 4 Swamp Common (7)',
				'Level 4 Swamp Common (8)',
				'Level 4 Swamp Common (9)',
				'Level 4 Swamp Common (10)',
				'Level 4 Swamp Common (11)',
				'Level 4 Swamp Common (12)',
				'Level 4 Swamp Common (13)',
				'Level 4 Swamp Common (14)',
				'Level 4 Swamp Common (15)',
				'Level 4 Swamp Common (16)',
				'Level 4 Swamp Common (17)',
				'Level 4 Swamp Common (18)',
				'Level 4 Swamp Common (19)',
				'Level 4 Swamp Common (20)',
			]
			var loot2 = 
			[
				'None (1)',
				'None (2)',
				'None (3)',
				'None (4)',
				'None (5)',
				'None (6)',
				'None (7)',
				'None (8)',
				'None (9)',
				'None (10)',
				'Level 4 Swamp Uncommon (11)',
				'Level 4 Swamp Uncommon (12)',
				'Level 4 Swamp Uncommon (13)',
				'Level 4 Swamp Uncommon (14)',
				'Level 4 Swamp Uncommon (15)',
				'Level 4 Swamp Uncommon (16)',
				'Level 4 Swamp Uncommon (17)',
				'Level 4 Swamp Uncommon (18)',
				'Level 4 Swamp Uncommon (19)',
				'Level 4 Swamp Uncommon (20)',
			]
			var loot3 = 
			[
				'None (1)',
				'None (2)',
				'None (3)',
				'None (4)',
				'None (5)',
				'None (6)',
				'None (7)',
				'None (8)',
				'None (9)',
				'None (10)',
				'None (11)',
				'None (12)',
				'None (13)',
				'None (14)',
				'None (15)',
				'Level 4 Swamp Rare (16)',
				'Level 4 Swamp Rare (17)',
				'Level 4 Swamp Rare (18)',
				'Level 4 Swamp Rare (19)',
				'Level 4 Swamp Rare (20)',
			]
			break;
		}
		break;
	}
}
	var randomNumber = Math.floor(Math.random()*(loot.length));
	document.getElementById('treasureDisplay').innerHTML = loot[randomNumber];
	var randomNumber2 = Math.floor(Math.random()*(loot2.length));
	document.getElementById('treasureDisplay2').innerHTML = loot2[randomNumber2];
	var randomNumber3 = Math.floor(Math.random()*(loot3.length));
	document.getElementById('treasureDisplay3').innerHTML = loot3[randomNumber3];
	document.getElementById('goldTDisplay').innerHTML = gold;	
	document.getElementById('silverTDisplay').innerHTML = silver;
	document.getElementById('copperTDisplay').innerHTML = copper;	
}
