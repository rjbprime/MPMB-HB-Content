if (sheetVersion < 13001003) { throw "This script was made for a newer version of the sheet. Please use the latest version and try again.\nYou can get the latest version on www.flapkan.com."; };
var iFileName = "BookOfSanctuaryHomebrew.js";
RequiredSheetVersion("13.1.3");

//	Define the source
SourceList["BOS"] = {
	name : "Book of Sanctuary [Free Content]",
	abbreviation : "BOS",
	group : "Personal Campaign House Rules",
	campaignSetting : "Book of Sanctuary",
	date : "2099/12/31"
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
	heightMetric : " range from barely 1,5 to well over 1,8 meters tall (145 + 5d10 cm)",
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

// Revised Races

RaceList.harengon = {
			regExpSearch: /harengon/i,
			name: "Harengon",
			source: [
				["WBtW", 13],
				["MotM", 22],
			],
			plural: "Harengons",
			size: [3, 4],
			speed: { walk: { spd: 30, enc: 20 } },
			weaponProfs : [false, false, ["scimitar", "double-bladed scimitar", "longbow", "shortbow"]],
			skills: ["Perception"],
			addMod: [
				{
					type: "skill",
					field: "Init",
					mod: "Prof",
					text: "I can add my proficiency bonus to my initiative rolls.",
				},
			],
			scoresGeneric: !0,
			action: [
				["reaction", "Lucky Footwork"],
				["bonus action", "Rabbit Hop"],
			],
			features: {
				"rabbit hop": {
					name: "Rabbit Hop",
					minlevel: 1,
					usages: "Proficiency bonus per ",
					usagescalc: "event.value = How('Proficiency Bonus');",
					recovery: "long rest",
					additional: ProficiencyBonusList.map(function (e) {
						e = 5 * e + " ft";
						return "metric" === What("Unit System")
							? ConvertToMetric(e)
							: e;
					}),
				},
			},
			trait: "Harengon\n • Hare-Trigger: I can add my proficiency bonus to my initiative rolls.\n • Leporine Senses: I have proficiency in the Perception skill.\n • Lucky Footwork: As a reaction when I fail a Dexterity saving throw, I can add +1d4 to the result, potentially making it a success. I can't do this if I'm prone or my speed is 0.\n • Rabbit Hop: As a bonus action if my speed isn't 0, I can jump 5 ft times my Prof Bonus without provoking opportunity attacks. I can do this my Prof Bonus times per long rest.",
		}

//	New Creatures

/*	Common Perching Bird
	url of full content						:	https://www.dndbeyond.com/monsters/67144-common-perching-bird
	submitted by							:	Benz74M
	accessed								:	2023/03/15 19:30 GMT+10:00
	version accessed						:	2.5
	backup of content at point of access	:	https://raw.githack.com/rjbprime/MPMB-HB-Content/3d80db99b62cf198863b439d637d444a7182173d/DDB%20Backup%20PDFs/Common%20Perching%20Bird%20-%20Monsters%20-%20Homebrew%20-%20D&D%20Beyond.pdf
	Modifications							:	Changed references of "(C/c)ommon (P/p)erching (B/b)ird" to "(S/s)parrow"
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
	baseWeapon : "scimitar",
};

// Double bladed scimitar
if (!WeaponsList["double-bladed scimitar"]){
	WeaponsList["double-bladed scimitar"] = {
		regExpSearch : /^(?=.*double)(?=.*scimitar).*$/i,
		name : "Double-bladed scimitar",
		nameAlt : ["Scimitar, Double-bladed"],
		source : [["E:RLW", 22], ["WGtE", 74]],
		list : "melee",
		ability : 1,
		type : "Martial",
		damage : [2, 4, "slashing"],
		range : "Melee",
		weight : 6,
		description : "Two-handed; With Attack action, one attack as bonus action for 1d4",
		special : true,
		abilitytodamage : true
};
}

// Revenant blade feat
FeatsList["revenant blade"] = {
	name : "Revenant Blade",
	source : [["BOS", 6]],
	prerequisite : "Being an Elf or Harengon",
	prereqeval : function(v) { return (/^(?!.*half)(?=.*(elf|eladrin|avariel|grugach|shadar-kai|harengon)).*$/i).test(CurrentRace.known); },
	descriptionFull : "You are descended from a master of the double blade and their skills have passed on to you. You gain the following benefits:\n \u2022 Increase your Dexterity or Strength score by 1, to a maximum of 20.\n \u2022 While wielding a double-bladed weapon with two hands, the weapon has the finesse trait for your attacks with it, and you gain +1 AC.\n \u2022 On your turn, when you use a bonus action to make a melee attack with the blade at the opposite end of the weapon, the weapon's damage die for this attack increases to 2d4, instead of 1d4.",
	description : "As a bonus action with the Attack action, I can make an extra with a double-bladed weapon for 2d4 slashing damage. I treat double-bladed weapons as having the finesse trait. +1 AC while wielding a double-bladed weapon with two hands. [+1 Strength or Dexterity]",
	scorestxt : "+1 Strength or Dexterity",
	action : [["bonus action", " (with Attack action)"]],
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == 'double-bladed scimitar' && fields.Proficiency) {
					fields.Description = fields.Description.replace('Two-handed; With Attack action, one attack as bonus action for 1d4', 'Finesse, two-handed; With Attack action, one attack as bonus action');
					fields.Mod = v.StrDex;
				};
			},
			"Double-bladed weapons count as having finesse for me and I can make an extra attack with them as a bonus action when taking the Attack action."
		]
	},
	extraAC : {
		mod : 1,
		text : "I gain a +1 bonus to AC while I'm wielding a double-bladed weapon in two hands.",
		stopeval : function (v) { return v.usingShield && !(/animated/i).test(What("AC Shield Bonus Description")) || !CurrentWeapons.known.some(function (n) { return n[0] == "double-bladed scimitar" || (WeaponsList[n[0]] && WeaponsList[n[0]].baseWeapon == "double-bladed scimitar"); }); }
	}
};


// Dreamwalker feat
FeatsList["dreamwalker"] = {
	name : "Dreamwalker",
	source : [["BOS", 6]],
	descriptionFull : "Either through training or unknown reasons, you are able to walk between reality and dreams. You gain the following benefit:\n During a long rest, you can enter the Ethereal Plane as an astral projection of yourself. While on this plane, you can see when a creature is dreaming by seeing a near transparent sphere that deforms the fabric of the plane like water refracting light around its head. You can choose to peer into the dream or enter it for a number of minutes equal to five times your proficiency bonus. Once you've peered on enter into a creature's dream, you can't peer again into this creature's dreams until your next long rest.\n If you chose to enter the dream, you may interact with it however you choose and you can also communicate with the dreamer. When the dreamer wakes up, it can make an Insight check against your spell save DC or against a Deception or Persuasion check, your choice, to acknowledge that its dream has been meddled with.\n The DM may choose to not make a roll or give advantage or even disadvantage on the roll depending on the situation and the complexity of the dream. Inserting yourself in a dream has a chance of failure depending on your relationship with the creature. When you enter a dream, the DM rolls d100 and consults the table following.\n\n",
		"Relationship    Failure    Success",
		"Family Member   \u2013     01-100",
		"Close Friend    01-10      11-100",
		"Friend          01-20      21-100",
		"Trusted Ally    01-30      31-100",
		"Acquaintance    01-40      41-100",
		"Stranger        01-50      51-100\n\n",
		"Any damage you take while on the Ethereal Plane through this feat is also inflicted on your physical body. You die in your sleep if you are killed while on the Ethereal Plane.\n Resting while Dreamwalking isn't as recovering as a normal. At the end of a long rest where you dreamwalked, you do not recover lost Hit Points, though you still regain all Hit Dice normally gained through a long rest. You can spend one or more Hit Dice at the end of the long rest to regain Hit points.",
	description : "As a part of a Long Rest, I can enter the dreams of other creatures via the Ethereal Plane, and can choose to interact with said creature in their dreams, for up to five times my proficiency bonus per day. Any damage carries over to my waking body, and I do not restore damage to my Hit Points upon waking, though I do recover my Hit Dice normally, and can spend them to recover afterwards.",
};

// Monk Changes

ClassList["monk"]["die"] = 10
if (ClassList["monk"]["features"]["martial arts"]["calcChanges"] != undefined)
   ClassList["monk"]["features"]["martial arts"]["calcChanges"]["atkAdd"] = [function (fields, v) {
        if (classes.known.monk && classes.known.monk.level && (v.theWea.monkweapon || v.baseWeaponName == "unarmed strike" || v.baseWeaponName == "shortsword" || (v.isMeleeWeapon && (/simple/i).test(v.theWea.type) && !(/heavy|((^|[^+-]\b)2|\btwo).?hand(ed)?s?/i).test(fields.Description)))) {
            v.theWea.monkweapon = true;
            var aMonkDie = function (n) { return n < 5 ? 6 : n < 11 ? 8 : n < 17 ? 10 : 12; }(classes.known.monk.level);
            try {
                var curDie = eval_ish(fields.Damage_Die.replace('d', '*'));
            } catch (e) {
                var curDie = 'x';
            };
            if (isNaN(curDie) || curDie < aMonkDie) {
                fields.Damage_Die = '1d' + aMonkDie;
            };
            if (fields.Mod == 1 || fields.Mod == 2 || What(AbilityScores.abbreviations[fields.Mod - 1] + " Mod") < What(AbilityScores.abbreviations[v.StrDex - 1] + " Mod")) {
                fields.Mod = v.StrDex;
            }
        };
    },
    "I can use either Strength or Dexterity and my Martial Arts damage die in place of the normal damage die for any 'Monk Weapons', which include unarmed strike, shortsword, and any simple melee weapon that is not two-handed or heavy.",
    5]
if (ClassList["monk"]["features"]["martial arts"]["choose monk weapons"] != undefined)
    ClassList["monk"]["features"]["martial arts"]["choose monk weapons"]["calcChanges"]["atkAdd"] = [function (e,a){var t,n=["unarmed strike"].concat(GetFeatureChoice("classes","monk","martial arts",!0));if(classes.known.monk&&classes.known.monk.level&&(-1!=n.indexOf(a.baseWeaponName)||/monk weapon/i.test(a.WeaponTextName))){var i=(t=classes.known.monk.level)<5?6:t<11?8:t<17?10:12;try{var o=eval_ish(e.Damage_Die.replace("d","*"))}catch(e){o="x"}(isNaN(o)||o<i)&&(e.Damage_Die="1d"+i),(1==e.Mod||2==e.Mod||What(AbilityScores.abbreviations[e.Mod-1]+" Mod")<What(AbilityScores.abbreviations[a.StrDex-1]+" Mod"))&&(e.Mod=a.StrDex)}
    },
    "I can use either Strength or Dexterity and my Martial Arts damage die in place of the normal damage die for any 'Monk Weapons', which include unarmed strike and 5 + my Wisdom modifier of simple or martial weapons of my choice that I'm proficient with and that don't have the two-handed, heavy, or special property. I can select these weapon using the \"Choose Feature\" button on the 2nd page, or have them count as such by including the words \"Monk Weapon\" in the name of the weapon.",
    1];

// Brute Fighter

var UATS_fighterBruteSubclassUA = AddSubClass("fighter", "brute-ua", {
	regExpSearch : /brute/i,
	subname : "Brute",
	source : [["UA:TS", 2]],
	fullname : "Brute",
	features : {
		"subclassfeature3" : {
			name : "Brute Force",
			source : [["UA:TS", 2]],
			minlevel : 3,
			description : "\n   " + "I do additional damage with weapons that I'm proficient with",
			additional : levels.map(function (n) {
				return n < 3 ? "" : "+1d" + (n < 10 ? 4 : n < 16 ? 6 : n < 20 ? 8 : 10) + " weapon damage";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.fighter && classes.known.fighter.level > 2 && !v.isSpell && !v.isNaturalWeapon && fields.Proficiency) {
							fields.Description += (fields.Description ? '; ' : '') + '+1d' + (classes.known.fighter.level < 10 ? 4 : classes.known.fighter.level < 16 ? 6 : classes.known.fighter.level < 20 ? 8 : 10) + ' damage';
						};
					},
					"I do +1d4 damage with weapons that I'm proficient with. This increases to 1d6 at 10th level, 1d8 at 16th level, and 1d10 at 20th level."
				]
			}
		},
		"subclassfeature7" : {
			name : "Brutish Durability",
			source : [["UA:TS", 2]],
			minlevel : 7,
			description : desc([
				"I add +1d6 to all my saving throws, including death saves",
				"If the total of a death save is 20 or more, it counts as rolling a 20"
			]),
			savetxt : { text : ["Add 1d6 to all saves"] }
		},
		"subclassfeature15" : {
			name : "Devastating Critical",
			source : [["UA:TS", 2]],
			minlevel : 15,
			description : "\n   " + "Whenever I score a critical hit with a weapon, I add my fighter level to the damage",
			additional : levels.map(function (n) { return n < 15 ? "" : "+" + n + " damage on crit"; })
		},
		"subclassfeature18" : {
			name : "Survivor",
			source : [["UA:TS", 2]],
			minlevel : 18,
			description : desc([
				"If I have less than half my max HP at the start of my turn, I heal myself",
				"I regain HP equal to 5 + Constitution modifier (min 1); This doesn't work if I'm at 0 HP"
			])
		}
	}
});
RunFunctionAtEnd(function () {
	var FSfea = newObj(ClassList.fighter.features["fighting style"]);
	FSfea.name = "Additional Fighting Style";
	FSfea.source = ["UA:TS", 2];
	FSfea.minlevel = 10;
	FSfea.extrachoices = "";
	FSfea.description = '\n   Choose an Additional Fighting Style using the "Choose Feature" button above ';
	ClassSubList[UATS_fighterBruteSubclassUA].features.subclassfeature10 = FSfea;
});