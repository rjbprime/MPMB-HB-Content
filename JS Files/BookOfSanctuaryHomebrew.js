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
	Modifications							:	Removed (K/k)ara-turan from (sub)races

*/

RaceList["hengeyokai"] = {
	regExpSearch : /hengeyokai/i,
	name : "Hengeyokai",
	sortname : "Hengeyokai",
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
	trait : "Hengeyokai (+2 Dexterity, my creature type is fey and humanoid)"+
		"\n \u2022 Hybrid Nature: I'm a shapechanger with two creature types: fey and humanoid. I can be affected by a game effect if it works on either of my creature types no matter my current form."+
		"\n \u2022 Animal Form: I chose an animal form for my hengeyokai: badger, cat, crab, dog (mastiff), hare (weasel stats block, speed 40), monkey, rat, or sparrow.\n\t My chosen animal grants me an ability score increase at first level or another benefit: The sparrow grants no other benefit than the flying speed gained in animal form.\n\t I can transform as an action and stay in my beast shape indefinitely. I can revert to my hybrid or human form by using a bonus action on my turn. I automatically revert to my human form if I fall unconscious, drop to 0 hit points, or die. See the druid's Wild Shape feature for the rules that apply while I am transformed."+
		"\n \u2022 Hybrid Form: I can assume my hybrid form as an action. In my animal form, I can shapechange into my hybrid form as a bonus action.\n In my hybrid form, I stand at my human height on my hind legs or similar appendages. I assume an overall humanoid shape, with front paws or wings changing into hands that are capable of gripping and using weapons and other equipment, but retain my animalistic appearance, including fur, scales, feathers, tails, and other characteristics. At the DM's option, my hybrid form may have a natural weapon (e.g. claws, beak, bite) that deals 1d6 bludgeoning, piercing, or slashing damage as appropriate to the animal's natural weapon. I am proficient with my natural weapon.\n While in my hybrid form, I can speak with animals (as per the spell). This is a nonmagical ability.\n I can stay in my hybrid form indefinitely. I can revert to my animal or human form by using a bonus action on my turn. I revert to my human form if I fall unconscious, drop to 0 hit points, or die.",
	features : {
		"animal form" : {
			name : "Animal Form",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			action : [["action", ""]],
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery: "short rest"
		},
		"hybrid form" : {
			name : "Hybrid Form",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			action : [["action", ""]],
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery: "short rest"
		}
	},
	toNotesPage : [{
		name : "Animal Form",
		source : [["BOS", 6]],
		popupName : "Hengeyokai Animal Form Features",
		page3notes : true,
		note : [
			"\u2022 Assume Animal Form",
			" I can transform as an action and stay in my beast shape indefinitely.",
			" I can revert to my hybrid or human form by using a bonus action on my turn.",
			" I automatically revert to my human form if I fall unconscious, drop to 0 hit points, or die.",
			" See the druid's Wild Shape feature for the rules that apply while I am transformed",
			"\u2022 Animal Selection",
			" I select my animal form in the Wild Shape page."
		]
	},
	{
		name : "Hybrid Form",
		source : [["BOS", 6]],
		popupName : "Hengeyokai Hybrid Form Features",
		page3notes : true,
		note : [
			"\u2022 Assume Hybrid Form",
			" I can assume my hybrid form as an action. In my animal form, I can shapechange into my hybrid form as a bonus action.",
			" In my hybrid form, I stand at my human height on my hind legs or similar appendages. I assume an overall humanoid shape, with front paws or wings changing into hands that are capable of gripping and using weapons and other equipment, but retain my animalistic appearance, including fur, scales, feathers, tails, and other characteristics.",
			" At the DM's option, my hybrid form may have a natural weapon (e.g. claws, beak, bite) that deals 1d6 bludgeoning, piercing, or slashing damage as appropriate to the animal's natural weapon. I am proficient with my natural weapon.",
			" While in my hybrid form, I can speak with animals (as per the spell). This is a nonmagical ability.",
			" I can stay in my hybrid form indefinitely. I can revert to my animal or human form by using a bonus action on my turn. I revert to my human form if I fall unconscious, drop to 0 hit points, or die."
		]
	}]
};

AddRacialVariant("hengeyokai", "badger", {
	regExpSearch : /badger/i,
	name : "Badger Hengeyokai",
	trait : "Badger Hengeyokai (+2 Dexterity, +1 Constitution" + desc([
		"Badger Animal Form"
	]),
	scores : [0, 2, 1, 0, 0, 0]
});

AddRacialVariant("hengeyokai", "cat", {
	regExpSearch : /cat/i,
	name : "Cat Hengeyokai",
	trait : "Cat Hengeyokai (+2 Dexterity, +1 Charisma" + desc([
		"Cat Animal Form"
	]),
	scores : [0, 2, 0, 0, 0, 1]
});

AddRacialVariant("hengeyokai", "crab", {
	regExpSearch : /crab/i,
	name : "Crab Hengeyokai",
	trait : "Crab Hengeyokai (+2 Dexterity, 20ft Swim speed" + desc([
		"Crab Animal Form"
	]),
	scores : [0, 2, 0, 0, 0, 0],
	speed : {
		swim : { spd : 20, enc : 10 }
	}
});

AddRacialVariant("hengeyokai", "dog (mastiff)", {
	regExpSearch : /dog/i,
	name : "Dog (Mastiff) Hengeyokai",
	trait : "Dog (Mastiff) Hengeyokai (+2 Dexterity, +1 Strength" + desc([
		"Mastiff Animal Form"
	]),
	scores : [1, 2, 0, 0, 0, 0]
});

AddRacialVariant("hengeyokai", "hare", {
	regExpSearch : /hare/i,
	name : "Hare Hengeyokai",
	trait : "Hare Hengeyokai (+2 Dexterity, +1 Wisdom" + desc([
		"Hare Animal Form"
	]),
	scores : [0, 2, 0, 0, 1, 0],
	speed : {
		walk : { spd : 40, enc : 30 }
	}
});

AddRacialVariant("hengeyokai", "monkey", {
	regExpSearch : /monkey/i,
	name : "Monkey Hengeyokai",
	trait : "Monkey Hengeyokai (+2 Dexterity, 20ft Climb Speed" + desc([
		"Monkey Animal Form"
	]),
	scores : [0, 2, 0, 0, 0, 0],
	speed : {
		climb : { spd : 20, enc : 10 }
	}
});

AddRacialVariant("hengeyokai", "rat", {
	regExpSearch : /rat/i,
	name : "Rat Hengeyokai",
	trait : "Rat Hengeyokai (+2 Dexterity, Advantage Wisdom (Perception) checks that rely on smell" + desc([
		"Rat Animal Form"
	]),
	scores : [0, 2, 0, 0, 0, 0]
});

AddRacialVariant("hengeyokai", "sparrow", {
	regExpSearch : /sparrow/i,
	name : "Sparrow Hengeyokai",
	trait : "Sparrow Hengeyokai (+2 Dexterity, Fly speed in animal form" + desc([
		"Sparrow Animal Form"
	]),
	scores : [0, 2, 0, 0, 0, 0]
});

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

/*	Odachi
	url of full content						:	none
	submitted by							:	RJB
	accessed								:	2023/03/27 23:10 GMT+10:00
	version accessed						:	2023/03/27 23:10 GMT+10:00
	backup of content at point of access	:	none
	Modifications							:	none
*/

WeaponsList["odachi"] = {
	name : "Odachi",
	source : ["BOS", 9],
	defaultExcluded : true,
	regExpSearch : /^(?=.*odachi).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [2, 6, "piercing or slashing"],
	range : "Melee",
	description : "Heavy, reach, two-handed",
	tooltip : "Special: I may chose to deal either piercing or slashing damage.",
	special : false,
	list : "melee",
	weight : 4.8,
	monkweapon : true,
	baseWeapon : "greatsword",
};

/*	Katana
	url of full content						:	none
	submitted by							:	RJB
	accessed								:	2023/03/27 23:10 GMT+10:00
	version accessed						:	2023/03/27 23:10 GMT+10:00
	backup of content at point of access	:	none
	Modifications							:	none
*/

WeaponsList["katana"] = {
	name : "Katana",
	source : ["BOS", 9],
	defaultExcluded : true,
	regExpSearch : /^(?=.*katana).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 8, "piercing or slashing"],
	range : "Melee",
	description : "Finesse, Versatile (1d10)",
	tooltip : "Special: I may chose to deal either piercing or slashing damage.",
	special : false,
	list : "melee",
	weight : 2.5,
	monkweapon : true,
	baseWeapon : "longsword",
};

/*	Wakizashi
	url of full content						:	none
	submitted by							:	RJB
	accessed								:	2023/03/28 12:30 GMT+10:00
	version accessed						:	2023/03/28 12:30 GMT+10:00
	backup of content at point of access	:	none
	Modifications							:	none
*/

WeaponsList["wakizashi"] = {
	name : "Wakizashi",
	source : ["BOS", 9],
	defaultExcluded : true,
	regExpSearch : /^(?=.*wakizashi).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 6, "piercing or slashing"],
	range : "Melee",
	description : "Finesse, light",
	tooltip : "Special: I may chose to deal either piercing or slashing damage.",
	special : false,
	list : "melee",
	weight : 1.75,
	monkweapon : true,
	baseWeapon : "longsword",
};