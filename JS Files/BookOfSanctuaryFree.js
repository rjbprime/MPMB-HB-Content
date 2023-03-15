if (sheetVersion < 13001003) { throw "This script was made for a newer version of the sheet. Please use the latest version and try again.\nYou can get the latest version on www.flapkan.com."; };
var iFileName = "BookOfSanctuaryFree.js";
RequiredSheetVersion("13.1.3");

//	Define the source
SourceList["BOS"] = {
	name : "Book of Sanctuary [Free Content]",
	abbreviation : "BOS",
	group : "Personal Campaign House Rules",
	campaignSetting : "Book of Sanctuary",
	date : "2023/02/27"
};

//	a function to calculate the point buy value of a stat
function ASCalcPointBuy(theScore) {
	theScore = parseFloat(theScore.replace(",","."));
	if (isNaN(theScore) || theScore <= 8) {
		var toReturn = 0;
	} else  {
		var toReturn = theScore - 8;
		if (theScore > 13) toReturn += theScore - 13;
		if (theScore > 17) toReturn += theScore - 17;
	}
	return toReturn.toFixed(0);
}

//	New Races

/*	Subset of (sub)Race not in SRD
	url of full content						:	https://www.dndbeyond.com/races/135726-kara-turan-hengeyokai
	submitted by							:	Benz74M
	accessed								:	2023/03/15 19:30 GMT+10:00
	version accessed						:	2.5
	backup of content at point of access	:	https://raw.githack.com/rjbprime/MPMB-HB-Content/3d80db99b62cf198863b439d637d444a7182173d/DDB%20Backup%20PDFs/The%20Kara-Turan%20Hengeyokai%20Race%20for%20Dungeons%20&%20Dragons%20(D&D)%20Fifth%20Edition%20(5e)%20-%20D&D%20Beyond.pdf

*/
RaceList["kara-turan sparrow hengeyokai"] = {
	regExpSearch : /kara-turan sparrow hengeyokai/i,
	name : "Kara-Turan Sparrow Hengeyokai",
	sortname : "Hengeyokai, Kara-Turan (Sparrow)",
	source : [["BOS", 6]],
	plural : "Hengeyokai",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 2],
	age : "  can live for over 200 years, but for the first century they exist only as animals and cannot assume another form",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	scores : [0, 2, 0, 0, 0, 0],
	trait : "Kara-Turan Sparrow Hengeyokai" + (typePF ? "\n " : "\t") +
	"\u2022 Hybrid Nature: I'm a shapechanger with two creature types: fey and humanoid. I can be affected by a game effect if it works on either of my creature types no matter my current form." +
	"\n \u2022 Animal Form: I chose an animal form for my hengeyokai: sparrow.\n\t My chosen animal grants me an ability score increase at first level or another benefit: The sparrow grants no other benefit than the flying speed gained in animal form.\n\t I can transform as an action and stay in my beast shape indefinitely. I can revert to my hybrid or human form by using a bonus action on my turn. I automatically revert to my human form if I fall unconscious, drop to 0 hit points, or die. See the druid's Wild Shape feature for the rules that apply while I am transformed." +
	"\n \u2022 Hybrid Form: I can assume my hybrid form as an action. In my animal form, I can shapechange into my hybrid form as a bonus action.\n In our hybrid form, hengeyokai stand at our human height on our hind legs or similar appendages. We assume an overall humanoid shape, with front paws or wings changing into hands that are capable of gripping and using weapons and other equipment, but retain our animalistic appearance, including fur, scales, feathers, tails, and other characteristics. At the DM's option, my hybrid form may have a natural weapon (e.g. claws, beak, bite) that deals 1d6 bludgeoning, piercing, or slashing damage as appropriate to the animal's natural weapon. I am proficient with my natural weapon.\n While in my hybrid form, I can speak with animals (as per the spell). This is a nonmagical ability.\n I can stay in my hybrid form indefinitely. I can revert to my animal or human form by using a bonus action on my turn. I revert to my human form if I fall unconscious, drop to 0 hit points, or die.",
};

RaceList["kara-turan badger hengeyokai"] = {
	regExpSearch : /kara-turan badger hengeyokai/i,
	name : "Kara-Turan Badger Hengeyokai",
	sortname : "Hengeyokai, Kara-Turan (badger)",
	source : [["BOS", 6]],
	plural : "Hengeyokai",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 2],
	age : "  can live for over 200 years, but for the first century they exist only as animals and cannot assume another form",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	scores : [0, 2, 1, 0, 0, 0],
	trait : "Kara-Turan Badger Hengeyokai" + (typePF ? "\n " : "\t") +
	"\u2022 Hybrid Nature: I'm a shapechanger with two creature types: fey and humanoid. I can be affected by a game effect if it works on either of my creature types no matter my current form." +
	"\n \u2022 Animal Form: I chose an animal form for my hengeyokai: badger.\n\t My chosen animal grants me an ability score increase at first level or another benefit: The badger grants +1 Constitution.\n\t I can transform as an action and stay in my beast shape indefinitely. I can revert to my hybrid or human form by using a bonus action on my turn. I automatically revert to my human form if I fall unconscious, drop to 0 hit points, or die. See the druid's Wild Shape feature for the rules that apply while I am transformed." +
	"\n \u2022 Hybrid Form: I can assume my hybrid form as an action. In my animal form, I can shapechange into my hybrid form as a bonus action.\n In our hybrid form, hengeyokai stand at our human height on our hind legs or similar appendages. We assume an overall humanoid shape, with front paws or wings changing into hands that are capable of gripping and using weapons and other equipment, but retain our animalistic appearance, including fur, scales, feathers, tails, and other characteristics. At the DM's option, my hybrid form may have a natural weapon (e.g. claws, beak, bite) that deals 1d6 bludgeoning, piercing, or slashing damage as appropriate to the animal's natural weapon. I am proficient with my natural weapon.\n While in my hybrid form, I can speak with animals (as per the spell). This is a nonmagical ability.\n I can stay in my hybrid form indefinitely. I can revert to my animal or human form by using a bonus action on my turn. I revert to my human form if I fall unconscious, drop to 0 hit points, or die.",
};

RaceList["kara-turan cat hengeyokai"] = {
	regExpSearch : /kara-turan cat hengeyokai/i,
	name : "Kara-Turan Cat Hengeyokai",
	sortname : "Hengeyokai, Kara-Turan (cat)",
	source : [["BOS", 6]],
	plural : "Hengeyokai",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 2],
	age : "  can live for over 200 years, but for the first century they exist only as animals and cannot assume another form",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	scores : [0, 2, 0, 0, 0, 1],
	trait : "Kara-Turan Cat Hengeyokai" + (typePF ? "\n " : "\t") +
	"\u2022 Hybrid Nature: I'm a shapechanger with two creature types: fey and humanoid. I can be affected by a game effect if it works on either of my creature types no matter my current form." +
	"\n \u2022 Animal Form: I chose an animal form for my hengeyokai: badger.\n\t My chosen animal grants me an ability score increase at first level or another benefit: The cat grants +1 Charisma.\n\t I can transform as an action and stay in my beast shape indefinitely. I can revert to my hybrid or human form by using a bonus action on my turn. I automatically revert to my human form if I fall unconscious, drop to 0 hit points, or die. See the druid's Wild Shape feature for the rules that apply while I am transformed." +
	"\n \u2022 Hybrid Form: I can assume my hybrid form as an action. In my animal form, I can shapechange into my hybrid form as a bonus action.\n In our hybrid form, hengeyokai stand at our human height on our hind legs or similar appendages. We assume an overall humanoid shape, with front paws or wings changing into hands that are capable of gripping and using weapons and other equipment, but retain our animalistic appearance, including fur, scales, feathers, tails, and other characteristics. At the DM's option, my hybrid form may have a natural weapon (e.g. claws, beak, bite) that deals 1d6 bludgeoning, piercing, or slashing damage as appropriate to the animal's natural weapon. I am proficient with my natural weapon.\n While in my hybrid form, I can speak with animals (as per the spell). This is a nonmagical ability.\n I can stay in my hybrid form indefinitely. I can revert to my animal or human form by using a bonus action on my turn. I revert to my human form if I fall unconscious, drop to 0 hit points, or die.",
};

RaceList["kara-turan crab hengeyokai"] = {
	regExpSearch : /kara-turan crab hengeyokai/i,
	name : "Kara-Turan Crab Hengeyokai",
	sortname : "Hengeyokai, Kara-Turan (crab)",
	source : [["BOS", 6]],
	plural : "Hengeyokai",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : 20, enc : 10 }
	},
	languageProfs : ["Common", 2],
	age : "  can live for over 200 years, but for the first century they exist only as animals and cannot assume another form",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	scores : [0, 2, 0, 0, 0, 0],
	trait : "Kara-Turan Crab Hengeyokai" + (typePF ? "\n " : "\t") +
	"\u2022 Hybrid Nature: I'm a shapechanger with two creature types: fey and humanoid. I can be affected by a game effect if it works on either of my creature types no matter my current form." +
	"\n \u2022 Animal Form: I chose an animal form for my hengeyokai: badger.\n\t My chosen animal grants me an ability score increase at first level or another benefit: The crab grants a 20 foot swim speed.\n\t I can transform as an action and stay in my beast shape indefinitely. I can revert to my hybrid or human form by using a bonus action on my turn. I automatically revert to my human form if I fall unconscious, drop to 0 hit points, or die. See the druid's Wild Shape feature for the rules that apply while I am transformed." +
	"\n \u2022 Hybrid Form: I can assume my hybrid form as an action. In my animal form, I can shapechange into my hybrid form as a bonus action.\n In our hybrid form, hengeyokai stand at our human height on our hind legs or similar appendages. We assume an overall humanoid shape, with front paws or wings changing into hands that are capable of gripping and using weapons and other equipment, but retain our animalistic appearance, including fur, scales, feathers, tails, and other characteristics. At the DM's option, my hybrid form may have a natural weapon (e.g. claws, beak, bite) that deals 1d6 bludgeoning, piercing, or slashing damage as appropriate to the animal's natural weapon. I am proficient with my natural weapon.\n While in my hybrid form, I can speak with animals (as per the spell). This is a nonmagical ability.\n I can stay in my hybrid form indefinitely. I can revert to my animal or human form by using a bonus action on my turn. I revert to my human form if I fall unconscious, drop to 0 hit points, or die.",
};

RaceList["kara-turan mastiff hengeyokai"] = {
	regExpSearch : /kara-turan mastiff hengeyokai/i,
	name : "Kara-Turan Mastiff Hengeyokai",
	sortname : "Hengeyokai, Kara-Turan (mastiff)",
	source : [["BOS", 6]],
	plural : "Hengeyokai",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 2],
	age : "  can live for over 200 years, but for the first century they exist only as animals and cannot assume another form",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	scores : [0, 2, 0, 0, 0, 1],
	trait : "Kara-Turan Mastiff Hengeyokai" + (typePF ? "\n " : "\t") +
	"\u2022 Hybrid Nature: I'm a shapechanger with two creature types: fey and humanoid. I can be affected by a game effect if it works on either of my creature types no matter my current form." +
	"\n \u2022 Animal Form: I chose an animal form for my hengeyokai: badger.\n\t My chosen animal grants me an ability score increase at first level or another benefit: The mastiff grants +1 Strength.\n\t I can transform as an action and stay in my beast shape indefinitely. I can revert to my hybrid or human form by using a bonus action on my turn. I automatically revert to my human form if I fall unconscious, drop to 0 hit points, or die. See the druid's Wild Shape feature for the rules that apply while I am transformed." +
	"\n \u2022 Hybrid Form: I can assume my hybrid form as an action. In my animal form, I can shapechange into my hybrid form as a bonus action.\n In our hybrid form, hengeyokai stand at our human height on our hind legs or similar appendages. We assume an overall humanoid shape, with front paws or wings changing into hands that are capable of gripping and using weapons and other equipment, but retain our animalistic appearance, including fur, scales, feathers, tails, and other characteristics. At the DM's option, my hybrid form may have a natural weapon (e.g. claws, beak, bite) that deals 1d6 bludgeoning, piercing, or slashing damage as appropriate to the animal's natural weapon. I am proficient with my natural weapon.\n While in my hybrid form, I can speak with animals (as per the spell). This is a nonmagical ability.\n I can stay in my hybrid form indefinitely. I can revert to my animal or human form by using a bonus action on my turn. I revert to my human form if I fall unconscious, drop to 0 hit points, or die.",
};

RaceList["kara-turan hare hengeyokai"] = {
	regExpSearch : /kara-turan hare hengeyokai/i,
	name : "Kara-Turan Hare Hengeyokai",
	sortname : "Hengeyokai, Kara-Turan (hare)",
	source : [["BOS", 6]],
	plural : "Hengeyokai",
	size : 3,
	speed : {
		walk : { spd : 40, enc : 30 }
	},
	languageProfs : ["Common", 2],
	age : "  can live for over 200 years, but for the first century they exist only as animals and cannot assume another form",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	scores : [0, 2, 0, 0, 1, 0],
	trait : "Kara-Turan Hare Hengeyokai" + (typePF ? "\n " : "\t") +
	"\u2022 Hybrid Nature: I'm a shapechanger with two creature types: fey and humanoid. I can be affected by a game effect if it works on either of my creature types no matter my current form." +
	"\n \u2022 Animal Form: I chose an animal form for my hengeyokai: badger.\n\t My chosen animal grants me an ability score increase at first level or another benefit: The hare grants +1 Strength and an improved walking speed of 40 feet, instead of 30 feet.\n\t I can transform as an action and stay in my beast shape indefinitely. I can revert to my hybrid or human form by using a bonus action on my turn. I automatically revert to my human form if I fall unconscious, drop to 0 hit points, or die. See the druid's Wild Shape feature for the rules that apply while I am transformed." +
	"\n \u2022 Hybrid Form: I can assume my hybrid form as an action. In my animal form, I can shapechange into my hybrid form as a bonus action.\n In our hybrid form, hengeyokai stand at our human height on our hind legs or similar appendages. We assume an overall humanoid shape, with front paws or wings changing into hands that are capable of gripping and using weapons and other equipment, but retain our animalistic appearance, including fur, scales, feathers, tails, and other characteristics. At the DM's option, my hybrid form may have a natural weapon (e.g. claws, beak, bite) that deals 1d6 bludgeoning, piercing, or slashing damage as appropriate to the animal's natural weapon. I am proficient with my natural weapon.\n While in my hybrid form, I can speak with animals (as per the spell). This is a nonmagical ability.\n I can stay in my hybrid form indefinitely. I can revert to my animal or human form by using a bonus action on my turn. I revert to my human form if I fall unconscious, drop to 0 hit points, or die.",
};

RaceList["kara-turan monkey hengeyokai"] = {
	regExpSearch : /kara-turan monkey hengeyokai/i,
	name : "Kara-Turan Monkey Hengeyokai",
	sortname : "Hengeyokai, Kara-Turan (monkey)",
	source : [["BOS", 6]],
	plural : "Hengeyokai",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		climb : { spd : 20, enc : 10 }
	},
	languageProfs : ["Common", 2],
	age : "  can live for over 200 years, but for the first century they exist only as animals and cannot assume another form",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	scores : [0, 2, 0, 0, 0, 1],
	trait : "Kara-Turan Monkey Hengeyokai" + (typePF ? "\n " : "\t") +
	"\u2022 Hybrid Nature: I'm a shapechanger with two creature types: fey and humanoid. I can be affected by a game effect if it works on either of my creature types no matter my current form." +
	"\n \u2022 Animal Form: I chose an animal form for my hengeyokai: badger.\n\t My chosen animal grants me an ability score increase at first level or another benefit: The monkey grants a 20 foot climbing speed.\n\t I can transform as an action and stay in my beast shape indefinitely. I can revert to my hybrid or human form by using a bonus action on my turn. I automatically revert to my human form if I fall unconscious, drop to 0 hit points, or die. See the druid's Wild Shape feature for the rules that apply while I am transformed." +
	"\n \u2022 Hybrid Form: I can assume my hybrid form as an action. In my animal form, I can shapechange into my hybrid form as a bonus action.\n In our hybrid form, hengeyokai stand at our human height on our hind legs or similar appendages. We assume an overall humanoid shape, with front paws or wings changing into hands that are capable of gripping and using weapons and other equipment, but retain our animalistic appearance, including fur, scales, feathers, tails, and other characteristics. At the DM's option, my hybrid form may have a natural weapon (e.g. claws, beak, bite) that deals 1d6 bludgeoning, piercing, or slashing damage as appropriate to the animal's natural weapon. I am proficient with my natural weapon.\n While in my hybrid form, I can speak with animals (as per the spell). This is a nonmagical ability.\n I can stay in my hybrid form indefinitely. I can revert to my animal or human form by using a bonus action on my turn. I revert to my human form if I fall unconscious, drop to 0 hit points, or die.",
};

RaceList["kara-turan rat hengeyokai"] = {
	regExpSearch : /kara-turan rat hengeyokai/i,
	name : "Kara-Turan Rat Hengeyokai",
	sortname : "Hengeyokai, Kara-Turan (rat)",
	source : [["BOS", 6]],
	plural : "Hengeyokai",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 2],
	age : "  can live for over 200 years, but for the first century they exist only as animals and cannot assume another form",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	scores : [0, 2, 0, 0, 0, 1],
	trait : "Kara-Turan Rat Hengeyokai" + (typePF ? "\n " : "\t") +
	"\u2022 Hybrid Nature: I'm a shapechanger with two creature types: fey and humanoid. I can be affected by a game effect if it works on either of my creature types no matter my current form." +
	"\n \u2022 Animal Form: I chose an animal form for my hengeyokai: badger.\n\t My chosen animal grants me an ability score increase at first level or another benefit: The rat grants Advantage on Wisdom (Perception) checks that rely on smell.\n\t I can transform as an action and stay in my beast shape indefinitely. I can revert to my hybrid or human form by using a bonus action on my turn. I automatically revert to my human form if I fall unconscious, drop to 0 hit points, or die. See the druid's Wild Shape feature for the rules that apply while I am transformed." +
	"\n \u2022 Hybrid Form: I can assume my hybrid form as an action. In my animal form, I can shapechange into my hybrid form as a bonus action.\n In our hybrid form, hengeyokai stand at our human height on our hind legs or similar appendages. We assume an overall humanoid shape, with front paws or wings changing into hands that are capable of gripping and using weapons and other equipment, but retain our animalistic appearance, including fur, scales, feathers, tails, and other characteristics. At the DM's option, my hybrid form may have a natural weapon (e.g. claws, beak, bite) that deals 1d6 bludgeoning, piercing, or slashing damage as appropriate to the animal's natural weapon. I am proficient with my natural weapon.\n While in my hybrid form, I can speak with animals (as per the spell). This is a nonmagical ability.\n I can stay in my hybrid form indefinitely. I can revert to my animal or human form by using a bonus action on my turn. I revert to my human form if I fall unconscious, drop to 0 hit points, or die.",
};

//	New Creatures

/*	Common Perching Bird
	url of full content						:	https://www.dndbeyond.com/monsters/67144-common-perching-bird
	submitted by							:	Benz74M
	accessed								:	2023/03/15 19:30 GMT+10:00
	version accessed						:	2.5
	backup of content at point of access	:	https://raw.githack.com/rjbprime/MPMB-HB-Content/3d80db99b62cf198863b439d637d444a7182173d/DDB%20Backup%20PDFs/Common%20Perching%20Bird%20-%20Monsters%20-%20Homebrew%20-%20D&D%20Beyond.pdf
	Modifications							:	Changed referrences of "(C/c)ommon (P/p)erching (B/b)ird" to "(S/s)parrow"
*/

CreatureList["sparrow"] = {
	name : "Sparrow",
	source : ["BOS", 8],
	size : 5,
	type : "Beast",
	alignment : "Unaligned",
	ac : 12,
	hp : 1,
	hd : [1, 4],
	speed : "5 ft, fly 50 ft",
	proficiencyBonus : 2,
	proficiencyBonusLinked : true,
	challengeRating : "0",
	scores : [1, 14, 8, 2, 10, 6],
	savesLinked : true,
	senses : "",
	attacksAction : 1,
	attacks : [{
		name : "Peck",
		ability : 2,
		damage : [0, 0, "piercing"],
		range : "Melee (5 ft)",
		description : "(minor annoyance). 1 piercing damage on a critical hit."
	}],
	skills : {
		"Perception" : 3,
		"Stealth" : 3
	},
	features : [{
		"tiny critter" : {
			name : "Tiny Critter",
			description : "Because of its tiny size and unpredictable maneuverability, creatures have disadvantage on ranged attacks against the sparrow while it's flying if the bird is more than 60 feet away.",
			joinString : "\n   "
		},
		"fooled by illusions" : {
			name : "Fooled by Illusions",
			description : "The sparrow has disadvantage on saving throws or ability checks made to perceive illusions (including invisible objects or creatures) and transparent windows.",
			joinString : "\n   "
		}
	}],
	traits : [{
		name : "Keen Sight",
		description : "The sparrow has advantage on Wisdom (Perception) checks that rely on sight."
	}],
};

/*	Monkey
	url of full content						:	https://www.dndbeyond.com/monsters/296670-monkey
	submitted by							:	Benz74M
	accessed								:	2023/03/15 19:30 GMT+10:00
	version accessed						:	2.5
	backup of content at point of access	:	https://raw.githack.com/rjbprime/MPMB-HB-Content/3d80db99b62cf198863b439d637d444a7182173d/DDB%20Backup%20PDFs/Monkey%20-%20Monsters%20-%20Homebrew%20-%20D&D%20Beyond.pdf
	Modifications							:	None
*/

CreatureList["monkey"] = {
	name : "Monkey",
	source : ["BOS", 8],
	size : 5,
	type : "Beast",
	alignment : "Unaligned",
	ac : 12,
	hp : 3,
	hd : [1, 4],
	speed : "30 ft, climb 30 ft",
	scores : [8, 14, 12, 5, 12, 7],
	senses : "",
	passivePerception : 11,
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 1,
		damage : [1, 4, "piercing"],
		range : "Melee (5 ft)",
		description : ""
	},
	{
		name : "Fling Feces (3/day)",
		ability : 1,
		damage : [0, 0, "psychic"],
		range : "15/30 ft",
		description : "The target must succeed on a DC 12 Intelligence saving throw. On a failed save, the target must use its movement to move 10 feet away from the monkey at the start of its next turn. The monkey flings feces if cornered, frightened or in captivity."
	}],
	skills : {
		"Athletics" : 6,
		"Perception" : 3,
		"Sleight of Hand" : 6
	},
	features : [{
		"nimble escape" : {
			name : "Nimble Escape",
			description : "The monkey can take the Disengage or Hide action as a bonus action on each of its turns.",
			joinString : "\n   "
		}
	}],
	traits : [{
		name : "Keen Hearing",
		description : "The monkey has advantage on Wisdom (Perception) checks that rely on hearing."
	}],
};

/*	Weasel
	url of full content						:	https://www.dndbeyond.com/monsters/17052-weasel
	submitted by							:	WotC
	accessed								:	2023/03/15 19:30 GMT+10:00
	version accessed						:	2023/03/15 19:30 GMT+10:00
	backup of content at point of access	:	https://raw.githack.com/rjbprime/MPMB-HB-Content/e913e1a55012fd4ee02f1555b24ed4bfcee48467/DDB%20Backup%20PDFs/Weasel%20-%20Monsters%20-%20D&D%20Beyond.pdf
	Modifications							:	Changed name to Hare, Changed Speed to 40ft
*/

CreatureList["hare"] = {
	name : "Hare",
	source : [["BOS", 8]],
	size : 5, //Tiny
	type : "Beast",
	companion : "familiar",
	alignment : "Unaligned",
	ac : 13,
	hp : 1,
	hd : [1, 4],
	speed : "40 ft",
	scores : [3, 16, 8, 2, 12, 3],
	skills : {
		"perception" : 3,
		"stealth" : 5
	},
	senses : "Adv. on Wis (Perception) checks using hearing/smell",
	passivePerception : 13,
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 2,
		damage : [1, "", "piercing"],
		range : "Melee (5 ft)",
		description : "",
		abilitytodamage : false
	}],
	traits : [{
		name : "Keen Hearing and Smell",
		description : "The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell."
	}]
};