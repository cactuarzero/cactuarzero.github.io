function newLoot()
{
	var x = document.getElementById("lootSelect").value; 
	var y = document.getElementById("creatureSelect").value;

	var gold = Math.floor(Math.random()*(5));
	var silver = Math.floor(Math.random()*50);
	var copper = Math.floor(Math.random()*99);

switch(x)
{
	case "Encounter Level 1":
	{
		switch(y)
		{
			case "Goblin":
			//loot pool for goblin
			var loot = 
			[
				'Level 1 Goblin Common (1)',
				'Level 1 Goblin Common (2)',
				'Level 1 Goblin Common (3)',
				'Level 1 Goblin Common (4)',
				'Level 1 Goblin Common (5)',
				'Level 1 Goblin Common (6)',
				'Level 1 Goblin Common (7)',
				'Level 1 Goblin Common (8)',
				'Level 1 Goblin Common (9)',
				'Level 1 Goblin Common (10)',
				'Level 1 Goblin Common (11)',
				'Level 1 Goblin Common (12)',
				'Level 1 Goblin Common (13)',
				'Level 1 Goblin Common (14)',
				'Level 1 Goblin Common (15)',
				'Level 1 Goblin Common (16)',
				'Level 1 Goblin Common (17)',
				'Level 1 Goblin Common (18)',
				'Level 1 Goblin Common (19)',
				'Level 1 Goblin Common (20)',
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
				'Level 1 Goblin Uncommon (11)',
				'Level 1 Goblin Uncommon (12)',
				'Level 1 Goblin Uncommon (13)',
				'Level 1 Goblin Uncommon (14)',
				'Level 1 Goblin Uncommon (15)',
				'Level 1 Goblin Uncommon (16)',
				'Level 1 Goblin Uncommon (17)',
				'Level 1 Goblin Uncommon (18)',
				'Level 1 Goblin Uncommon (19)',
				'Level 1 Goblin Uncommon (20)',
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
				'Level 1 Goblin Rare (16)',
				'Level 1 Goblin Rare (17)',
				'Level 1 Goblin Rare (18)',
				'Level 1 Goblin Rare (19)',
				'Level 1 Goblin Rare (20)',
			]
			break;

			//loot pool for Dragon
			case "Dragon":
			var loot = 
			[
				'Level 1 Dragon Common (1)',
				'Level 1 Dragon Common (2)',
				'Level 1 Dragon Common (3)',
				'Level 1 Dragon Common (4)',
				'Level 1 Dragon Common (5)',
				'Level 1 Dragon Common (6)',
				'Level 1 Dragon Common (7)',
				'Level 1 Dragon Common (8)',
				'Level 1 Dragon Common (9)',
				'Level 1 Dragon Common (10)',
				'Level 1 Dragon Common (11)',
				'Level 1 Dragon Common (12)',
				'Level 1 Dragon Common (13)',
				'Level 1 Dragon Common (14)',
				'Level 1 Dragon Common (15)',
				'Level 1 Dragon Common (16)',
				'Level 1 Dragon Common (17)',
				'Level 1 Dragon Common (18)',
				'Level 1 Dragon Common (19)',
				'Level 1 Dragon Common (20)',
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
				'Level 1 Dragon Uncommon (11)',
				'Level 1 Dragon Uncommon (12)',
				'Level 1 Dragon Uncommon (13)',
				'Level 1 Dragon Uncommon (14)',
				'Level 1 Dragon Uncommon (15)',
				'Level 1 Dragon Uncommon (16)',
				'Level 1 Dragon Uncommon (17)',
				'Level 1 Dragon Uncommon (18)',
				'Level 1 Dragon Uncommon (19)',
				'Level 1 Dragon Uncommon (20)',
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
				'Level 1 Dragon Rare (16)',
				'Level 1 Dragon Rare (17)',
				'Level 1 Dragon Rare (18)',
				'Level 1 Dragon Rare (19)',
				'Level 1 Dragon Rare (20)',
			]
			break;
		
			//loot pool for bandit
			case "Bandit":
			var loot = 
			[
				'Level 1 Bandit Common (1)',
				'Level 1 Bandit Common (2)',
				'Level 1 Bandit Common (3)',
				'Level 1 Bandit Common (4)',
				'Level 1 Bandit Common (5)',
				'Level 1 Bandit Common (6)',
				'Level 1 Bandit Common (7)',
				'Level 1 Bandit Common (8)',
				'Level 1 Bandit Common (9)',
				'Level 1 Bandit Common (10)',
				'Level 1 Bandit Common (11)',
				'Level 1 Bandit Common (12)',
				'Level 1 Bandit Common (13)',
				'Level 1 Bandit Common (14)',
				'Level 1 Bandit Common (15)',
				'Level 1 Bandit Common (16)',
				'Level 1 Bandit Common (17)',
				'Level 1 Bandit Common (18)',
				'Level 1 Bandit Common (19)',
				'Level 1 Bandit Common (20)',
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
				'Level 1 Bandit Uncommon (11)',
				'Level 1 Bandit Uncommon (12)',
				'Level 1 Bandit Uncommon (13)',
				'Level 1 Bandit Uncommon (14)',
				'Level 1 Bandit Uncommon (15)',
				'Level 1 Bandit Uncommon (16)',
				'Level 1 Bandit Uncommon (17)',
				'Level 1 Bandit Uncommon (18)',
				'Level 1 Bandit Uncommon (19)',
				'Level 1 Bandit Uncommon (20)',
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
				'Level 1 Bandit Rare (16)',
				'Level 1 Bandit Rare (17)',
				'Level 1 Bandit Rare (18)',
				'Level 1 Bandit Rare (19)',
				'Level 1 Bandit Rare (20)',
			]
			break;
		
			//loot pool for beholder
			case "Beholder":
			var loot = 
			[
				'Level 1 Beholder Common (1)',
				'Level 1 Beholder Common (2)',
				'Level 1 Beholder Common (3)',
				'Level 1 Beholder Common (4)',
				'Level 1 Beholder Common (5)',
				'Level 1 Beholder Common (6)',
				'Level 1 Beholder Common (7)',
				'Level 1 Beholder Common (8)',
				'Level 1 Beholder Common (9)',
				'Level 1 Beholder Common (10)',
				'Level 1 Beholder Common (11)',
				'Level 1 Beholder Common (12)',
				'Level 1 Beholder Common (13)',
				'Level 1 Beholder Common (14)',
				'Level 1 Beholder Common (15)',
				'Level 1 Beholder Common (16)',
				'Level 1 Beholder Common (17)',
				'Level 1 Beholder Common (18)',
				'Level 1 Beholder Common (19)',
				'Level 1 Beholder Common (20)',
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
				'Level 1 Beholder Uncommon (11)',
				'Level 1 Beholder Uncommon (12)',
				'Level 1 Beholder Uncommon (13)',
				'Level 1 Beholder Uncommon (14)',
				'Level 1 Beholder Uncommon (15)',
				'Level 1 Beholder Uncommon (16)',
				'Level 1 Beholder Uncommon (17)',
				'Level 1 Beholder Uncommon (18)',
				'Level 1 Beholder Uncommon (19)',
				'Level 1 Beholder Uncommon (20)',
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
				'Level 1 Beholder Rare (16)',
				'Level 1 Beholder Rare (17)',
				'Level 1 Beholder Rare (18)',
				'Level 1 Beholder Rare (19)',
				'Level 1 Beholder Rare (20)',
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
			case "Goblin":
			//loot pool for goblin
			var loot = 
			[
				'Level 2 Goblin Common (1)',
				'Level 2 Goblin Common (2)',
				'Level 2 Goblin Common (3)',
				'Level 2 Goblin Common (4)',
				'Level 2 Goblin Common (5)',
				'Level 2 Goblin Common (6)',
				'Level 2 Goblin Common (7)',
				'Level 2 Goblin Common (8)',
				'Level 2 Goblin Common (9)',
				'Level 2 Goblin Common (10)',
				'Level 2 Goblin Common (11)',
				'Level 2 Goblin Common (12)',
				'Level 2 Goblin Common (13)',
				'Level 2 Goblin Common (14)',
				'Level 2 Goblin Common (15)',
				'Level 2 Goblin Common (16)',
				'Level 2 Goblin Common (17)',
				'Level 2 Goblin Common (18)',
				'Level 2 Goblin Common (19)',
				'Level 2 Goblin Common (20)',
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
				'Level 2 Goblin Uncommon (11)',
				'Level 2 Goblin Uncommon (12)',
				'Level 2 Goblin Uncommon (13)',
				'Level 2 Goblin Uncommon (14)',
				'Level 2 Goblin Uncommon (15)',
				'Level 2 Goblin Uncommon (16)',
				'Level 2 Goblin Uncommon (17)',
				'Level 2 Goblin Uncommon (18)',
				'Level 2 Goblin Uncommon (19)',
				'Level 2 Goblin Uncommon (20)',
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
				'Level 2 Goblin Rare (16)',
				'Level 2 Goblin Rare (17)',
				'Level 2 Goblin Rare (18)',
				'Level 2 Goblin Rare (19)',
				'Level 2 Goblin Rare (20)',
			]
			break;

			//loot pool for Dragon
			case "Dragon":
			var loot = 
			[
				'Level 2 Dragon Common (1)',
				'Level 2 Dragon Common (2)',
				'Level 2 Dragon Common (3)',
				'Level 2 Dragon Common (4)',
				'Level 2 Dragon Common (5)',
				'Level 2 Dragon Common (6)',
				'Level 2 Dragon Common (7)',
				'Level 2 Dragon Common (8)',
				'Level 2 Dragon Common (9)',
				'Level 2 Dragon Common (10)',
				'Level 2 Dragon Common (11)',
				'Level 2 Dragon Common (12)',
				'Level 2 Dragon Common (13)',
				'Level 2 Dragon Common (14)',
				'Level 2 Dragon Common (15)',
				'Level 2 Dragon Common (16)',
				'Level 2 Dragon Common (17)',
				'Level 2 Dragon Common (18)',
				'Level 2 Dragon Common (19)',
				'Level 2 Dragon Common (20)',
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
				'Level 2 Dragon Uncommon (11)',
				'Level 2 Dragon Uncommon (12)',
				'Level 2 Dragon Uncommon (13)',
				'Level 2 Dragon Uncommon (14)',
				'Level 2 Dragon Uncommon (15)',
				'Level 2 Dragon Uncommon (16)',
				'Level 2 Dragon Uncommon (17)',
				'Level 2 Dragon Uncommon (18)',
				'Level 2 Dragon Uncommon (19)',
				'Level 2 Dragon Uncommon (20)',
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
				'Level 2 Dragon Rare (16)',
				'Level 2 Dragon Rare (17)',
				'Level 2 Dragon Rare (18)',
				'Level 2 Dragon Rare (19)',
				'Level 2 Dragon Rare (20)',
			]
			break;
		
			//loot pool for bandit
			case "Bandit":
			var loot = 
			[
				'Level 2 Bandit Common (1)',
				'Level 2 Bandit Common (2)',
				'Level 2 Bandit Common (3)',
				'Level 2 Bandit Common (4)',
				'Level 2 Bandit Common (5)',
				'Level 2 Bandit Common (6)',
				'Level 2 Bandit Common (7)',
				'Level 2 Bandit Common (8)',
				'Level 2 Bandit Common (9)',
				'Level 2 Bandit Common (10)',
				'Level 2 Bandit Common (11)',
				'Level 2 Bandit Common (12)',
				'Level 2 Bandit Common (13)',
				'Level 2 Bandit Common (14)',
				'Level 2 Bandit Common (15)',
				'Level 2 Bandit Common (16)',
				'Level 2 Bandit Common (17)',
				'Level 2 Bandit Common (18)',
				'Level 2 Bandit Common (19)',
				'Level 2 Bandit Common (20)',
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
				'Level 2 Bandit Uncommon (11)',
				'Level 2 Bandit Uncommon (12)',
				'Level 2 Bandit Uncommon (13)',
				'Level 2 Bandit Uncommon (14)',
				'Level 2 Bandit Uncommon (15)',
				'Level 2 Bandit Uncommon (16)',
				'Level 2 Bandit Uncommon (17)',
				'Level 2 Bandit Uncommon (18)',
				'Level 2 Bandit Uncommon (19)',
				'Level 2 Bandit Uncommon (20)',
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
				'Level 2 Bandit Rare (16)',
				'Level 2 Bandit Rare (17)',
				'Level 2 Bandit Rare (18)',
				'Level 2 Bandit Rare (19)',
				'Level 2 Bandit Rare (20)',
			]
			break;
		
			//loot pool for beholder
			case "Beholder":
			var loot = 
			[
				'Level 2 Beholder Common (1)',
				'Level 2 Beholder Common (2)',
				'Level 2 Beholder Common (3)',
				'Level 2 Beholder Common (4)',
				'Level 2 Beholder Common (5)',
				'Level 2 Beholder Common (6)',
				'Level 2 Beholder Common (7)',
				'Level 2 Beholder Common (8)',
				'Level 2 Beholder Common (9)',
				'Level 2 Beholder Common (10)',
				'Level 2 Beholder Common (11)',
				'Level 2 Beholder Common (12)',
				'Level 2 Beholder Common (13)',
				'Level 2 Beholder Common (14)',
				'Level 2 Beholder Common (15)',
				'Level 2 Beholder Common (16)',
				'Level 2 Beholder Common (17)',
				'Level 2 Beholder Common (18)',
				'Level 2 Beholder Common (19)',
				'Level 2 Beholder Common (20)',
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
				'Level 2 Beholder Uncommon (11)',
				'Level 2 Beholder Uncommon (12)',
				'Level 2 Beholder Uncommon (13)',
				'Level 2 Beholder Uncommon (14)',
				'Level 2 Beholder Uncommon (15)',
				'Level 2 Beholder Uncommon (16)',
				'Level 2 Beholder Uncommon (17)',
				'Level 2 Beholder Uncommon (18)',
				'Level 2 Beholder Uncommon (19)',
				'Level 2 Beholder Uncommon (20)',
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
				'Level 2 Beholder Rare (16)',
				'Level 2 Beholder Rare (17)',
				'Level 2 Beholder Rare (18)',
				'Level 2 Beholder Rare (19)',
				'Level 2 Beholder Rare (20)',
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
			case "Goblin":
			//loot pool for goblin
			var loot = 
			[
				'Level 3 Goblin Common (1)',
				'Level 3 Goblin Common (2)',
				'Level 3 Goblin Common (3)',
				'Level 3 Goblin Common (4)',
				'Level 3 Goblin Common (5)',
				'Level 3 Goblin Common (6)',
				'Level 3 Goblin Common (7)',
				'Level 3 Goblin Common (8)',
				'Level 3 Goblin Common (9)',
				'Level 3 Goblin Common (10)',
				'Level 3 Goblin Common (11)',
				'Level 3 Goblin Common (12)',
				'Level 3 Goblin Common (13)',
				'Level 3 Goblin Common (14)',
				'Level 3 Goblin Common (15)',
				'Level 3 Goblin Common (16)',
				'Level 3 Goblin Common (17)',
				'Level 3 Goblin Common (18)',
				'Level 3 Goblin Common (19)',
				'Level 3 Goblin Common (20)',
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
				'Level 3 Goblin Uncommon (11)',
				'Level 3 Goblin Uncommon (12)',
				'Level 3 Goblin Uncommon (13)',
				'Level 3 Goblin Uncommon (14)',
				'Level 3 Goblin Uncommon (15)',
				'Level 3 Goblin Uncommon (16)',
				'Level 3 Goblin Uncommon (17)',
				'Level 3 Goblin Uncommon (18)',
				'Level 3 Goblin Uncommon (19)',
				'Level 3 Goblin Uncommon (20)',
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
				'Level 3 Goblin Rare (16)',
				'Level 3 Goblin Rare (17)',
				'Level 3 Goblin Rare (18)',
				'Level 3 Goblin Rare (19)',
				'Level 3 Goblin Rare (20)',
			]
			break;

			//loot pool for Dragon
			case "Dragon":
			var loot = 
			[
				'Level 3 Dragon Common (1)',
				'Level 3 Dragon Common (2)',
				'Level 3 Dragon Common (3)',
				'Level 3 Dragon Common (4)',
				'Level 3 Dragon Common (5)',
				'Level 3 Dragon Common (6)',
				'Level 3 Dragon Common (7)',
				'Level 3 Dragon Common (8)',
				'Level 3 Dragon Common (9)',
				'Level 3 Dragon Common (10)',
				'Level 3 Dragon Common (11)',
				'Level 3 Dragon Common (12)',
				'Level 3 Dragon Common (13)',
				'Level 3 Dragon Common (14)',
				'Level 3 Dragon Common (15)',
				'Level 3 Dragon Common (16)',
				'Level 3 Dragon Common (17)',
				'Level 3 Dragon Common (18)',
				'Level 3 Dragon Common (19)',
				'Level 3 Dragon Common (20)',
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
				'Level 3 Dragon Uncommon (11)',
				'Level 3 Dragon Uncommon (12)',
				'Level 3 Dragon Uncommon (13)',
				'Level 3 Dragon Uncommon (14)',
				'Level 3 Dragon Uncommon (15)',
				'Level 3 Dragon Uncommon (16)',
				'Level 3 Dragon Uncommon (17)',
				'Level 3 Dragon Uncommon (18)',
				'Level 3 Dragon Uncommon (19)',
				'Level 3 Dragon Uncommon (20)',
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
				'Level 3 Dragon Rare (16)',
				'Level 3 Dragon Rare (17)',
				'Level 3 Dragon Rare (18)',
				'Level 3 Dragon Rare (19)',
				'Level 3 Dragon Rare (20)',
			]
			break;
		
			//loot pool for bandit
			case "Bandit":
			var loot = 
			[
				'Level 3 Bandit Common (1)',
				'Level 3 Bandit Common (2)',
				'Level 3 Bandit Common (3)',
				'Level 3 Bandit Common (4)',
				'Level 3 Bandit Common (5)',
				'Level 3 Bandit Common (6)',
				'Level 3 Bandit Common (7)',
				'Level 3 Bandit Common (8)',
				'Level 3 Bandit Common (9)',
				'Level 3 Bandit Common (10)',
				'Level 3 Bandit Common (11)',
				'Level 3 Bandit Common (12)',
				'Level 3 Bandit Common (13)',
				'Level 3 Bandit Common (14)',
				'Level 3 Bandit Common (15)',
				'Level 3 Bandit Common (16)',
				'Level 3 Bandit Common (17)',
				'Level 3 Bandit Common (18)',
				'Level 3 Bandit Common (19)',
				'Level 3 Bandit Common (20)',
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
				'Level 3 Bandit Uncommon (11)',
				'Level 3 Bandit Uncommon (12)',
				'Level 3 Bandit Uncommon (13)',
				'Level 3 Bandit Uncommon (14)',
				'Level 3 Bandit Uncommon (15)',
				'Level 3 Bandit Uncommon (16)',
				'Level 3 Bandit Uncommon (17)',
				'Level 3 Bandit Uncommon (18)',
				'Level 3 Bandit Uncommon (19)',
				'Level 3 Bandit Uncommon (20)',
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
				'Level 3 Bandit Rare (16)',
				'Level 3 Bandit Rare (17)',
				'Level 3 Bandit Rare (18)',
				'Level 3 Bandit Rare (19)',
				'Level 3 Bandit Rare (20)',
			]
			break;
		
			//loot pool for beholder
			case "Beholder":
			var loot = 
			[
				'Level 3 Beholder Common (1)',
				'Level 3 Beholder Common (2)',
				'Level 3 Beholder Common (3)',
				'Level 3 Beholder Common (4)',
				'Level 3 Beholder Common (5)',
				'Level 3 Beholder Common (6)',
				'Level 3 Beholder Common (7)',
				'Level 3 Beholder Common (8)',
				'Level 3 Beholder Common (9)',
				'Level 3 Beholder Common (10)',
				'Level 3 Beholder Common (11)',
				'Level 3 Beholder Common (12)',
				'Level 3 Beholder Common (13)',
				'Level 3 Beholder Common (14)',
				'Level 3 Beholder Common (15)',
				'Level 3 Beholder Common (16)',
				'Level 3 Beholder Common (17)',
				'Level 3 Beholder Common (18)',
				'Level 3 Beholder Common (19)',
				'Level 3 Beholder Common (20)',
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
				'Level 3 Beholder Uncommon (11)',
				'Level 3 Beholder Uncommon (12)',
				'Level 3 Beholder Uncommon (13)',
				'Level 3 Beholder Uncommon (14)',
				'Level 3 Beholder Uncommon (15)',
				'Level 3 Beholder Uncommon (16)',
				'Level 3 Beholder Uncommon (17)',
				'Level 3 Beholder Uncommon (18)',
				'Level 3 Beholder Uncommon (19)',
				'Level 3 Beholder Uncommon (20)',
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
				'Level 3 Beholder Rare (16)',
				'Level 3 Beholder Rare (17)',
				'Level 3 Beholder Rare (18)',
				'Level 3 Beholder Rare (19)',
				'Level 3 Beholder Rare (20)',
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
			case "Goblin":
			//loot pool for goblin
			var loot = 
			[
				'Level 4 Goblin Common (1)',
				'Level 4 Goblin Common (2)',
				'Level 4 Goblin Common (3)',
				'Level 4 Goblin Common (4)',
				'Level 4 Goblin Common (5)',
				'Level 4 Goblin Common (6)',
				'Level 4 Goblin Common (7)',
				'Level 4 Goblin Common (8)',
				'Level 4 Goblin Common (9)',
				'Level 4 Goblin Common (10)',
				'Level 4 Goblin Common (11)',
				'Level 4 Goblin Common (12)',
				'Level 4 Goblin Common (13)',
				'Level 4 Goblin Common (14)',
				'Level 4 Goblin Common (15)',
				'Level 4 Goblin Common (16)',
				'Level 4 Goblin Common (17)',
				'Level 4 Goblin Common (18)',
				'Level 4 Goblin Common (19)',
				'Level 4 Goblin Common (20)',
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
				'Level 4 Goblin Uncommon (11)',
				'Level 4 Goblin Uncommon (12)',
				'Level 4 Goblin Uncommon (13)',
				'Level 4 Goblin Uncommon (14)',
				'Level 4 Goblin Uncommon (15)',
				'Level 4 Goblin Uncommon (16)',
				'Level 4 Goblin Uncommon (17)',
				'Level 4 Goblin Uncommon (18)',
				'Level 4 Goblin Uncommon (19)',
				'Level 4 Goblin Uncommon (20)',
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
				'Level 4 Goblin Rare (16)',
				'Level 4 Goblin Rare (17)',
				'Level 4 Goblin Rare (18)',
				'Level 4 Goblin Rare (19)',
				'Level 4 Goblin Rare (20)',
			]
			break;

			//loot pool for Dragon
			case "Dragon":
			var loot = 
			[
				'Level 4 Dragon Common (1)',
				'Level 4 Dragon Common (2)',
				'Level 4 Dragon Common (3)',
				'Level 4 Dragon Common (4)',
				'Level 4 Dragon Common (5)',
				'Level 4 Dragon Common (6)',
				'Level 4 Dragon Common (7)',
				'Level 4 Dragon Common (8)',
				'Level 4 Dragon Common (9)',
				'Level 4 Dragon Common (10)',
				'Level 4 Dragon Common (11)',
				'Level 4 Dragon Common (12)',
				'Level 4 Dragon Common (13)',
				'Level 4 Dragon Common (14)',
				'Level 4 Dragon Common (15)',
				'Level 4 Dragon Common (16)',
				'Level 4 Dragon Common (17)',
				'Level 4 Dragon Common (18)',
				'Level 4 Dragon Common (19)',
				'Level 4 Dragon Common (20)',
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
				'Level 4 Dragon Uncommon (11)',
				'Level 4 Dragon Uncommon (12)',
				'Level 4 Dragon Uncommon (13)',
				'Level 4 Dragon Uncommon (14)',
				'Level 4 Dragon Uncommon (15)',
				'Level 4 Dragon Uncommon (16)',
				'Level 4 Dragon Uncommon (17)',
				'Level 4 Dragon Uncommon (18)',
				'Level 4 Dragon Uncommon (19)',
				'Level 4 Dragon Uncommon (20)',
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
				'Level 4 Dragon Rare (16)',
				'Level 4 Dragon Rare (17)',
				'Level 4 Dragon Rare (18)',
				'Level 4 Dragon Rare (19)',
				'Level 4 Dragon Rare (20)',
			]
			break;
		
			//loot pool for bandit
			case "Bandit":
			var loot = 
			[
				'Level 4 Bandit Common (1)',
				'Level 4 Bandit Common (2)',
				'Level 4 Bandit Common (3)',
				'Level 4 Bandit Common (4)',
				'Level 4 Bandit Common (5)',
				'Level 4 Bandit Common (6)',
				'Level 4 Bandit Common (7)',
				'Level 4 Bandit Common (8)',
				'Level 4 Bandit Common (9)',
				'Level 4 Bandit Common (10)',
				'Level 4 Bandit Common (11)',
				'Level 4 Bandit Common (12)',
				'Level 4 Bandit Common (13)',
				'Level 4 Bandit Common (14)',
				'Level 4 Bandit Common (15)',
				'Level 4 Bandit Common (16)',
				'Level 4 Bandit Common (17)',
				'Level 4 Bandit Common (18)',
				'Level 4 Bandit Common (19)',
				'Level 4 Bandit Common (20)',
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
				'Level 4 Bandit Uncommon (11)',
				'Level 4 Bandit Uncommon (12)',
				'Level 4 Bandit Uncommon (13)',
				'Level 4 Bandit Uncommon (14)',
				'Level 4 Bandit Uncommon (15)',
				'Level 4 Bandit Uncommon (16)',
				'Level 4 Bandit Uncommon (17)',
				'Level 4 Bandit Uncommon (18)',
				'Level 4 Bandit Uncommon (19)',
				'Level 4 Bandit Uncommon (20)',
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
				'Level 4 Bandit Rare (16)',
				'Level 4 Bandit Rare (17)',
				'Level 4 Bandit Rare (18)',
				'Level 4 Bandit Rare (19)',
				'Level 4 Bandit Rare (20)',
			]
			break;
		
			//loot pool for beholder
			case "Beholder":
			var loot = 
			[
				'Level 4 Beholder Common (1)',
				'Level 4 Beholder Common (2)',
				'Level 4 Beholder Common (3)',
				'Level 4 Beholder Common (4)',
				'Level 4 Beholder Common (5)',
				'Level 4 Beholder Common (6)',
				'Level 4 Beholder Common (7)',
				'Level 4 Beholder Common (8)',
				'Level 4 Beholder Common (9)',
				'Level 4 Beholder Common (10)',
				'Level 4 Beholder Common (11)',
				'Level 4 Beholder Common (12)',
				'Level 4 Beholder Common (13)',
				'Level 4 Beholder Common (14)',
				'Level 4 Beholder Common (15)',
				'Level 4 Beholder Common (16)',
				'Level 4 Beholder Common (17)',
				'Level 4 Beholder Common (18)',
				'Level 4 Beholder Common (19)',
				'Level 4 Beholder Common (20)',
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
				'Level 4 Beholder Uncommon (11)',
				'Level 4 Beholder Uncommon (12)',
				'Level 4 Beholder Uncommon (13)',
				'Level 4 Beholder Uncommon (14)',
				'Level 4 Beholder Uncommon (15)',
				'Level 4 Beholder Uncommon (16)',
				'Level 4 Beholder Uncommon (17)',
				'Level 4 Beholder Uncommon (18)',
				'Level 4 Beholder Uncommon (19)',
				'Level 4 Beholder Uncommon (20)',
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
				'Level 4 Beholder Rare (16)',
				'Level 4 Beholder Rare (17)',
				'Level 4 Beholder Rare (18)',
				'Level 4 Beholder Rare (19)',
				'Level 4 Beholder Rare (20)',
			]
			break;
		}
		break;
	}
}

	var randomNumber = Math.floor(Math.random()*(loot.length));
	document.getElementById('lootDisplay').innerHTML = loot[randomNumber];
	var randomNumber2 = Math.floor(Math.random()*(loot2.length));
	document.getElementById('lootDisplay2').innerHTML = loot2[randomNumber2];
	var randomNumber3 = Math.floor(Math.random()*(loot3.length));
	document.getElementById('lootDisplay3').innerHTML = loot3[randomNumber3];
	document.getElementById('goldDisplay').innerHTML = gold;	
	document.getElementById('silverDisplay').innerHTML = silver;
	document.getElementById('copperDisplay').innerHTML = copper;	
}
