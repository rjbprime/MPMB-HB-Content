var iFileName = "rjb_BookOfFantasiaHomebrew.js";
RequiredSheetVersion("13.2.3");

//	Define the source
SourceList["BOF"] = {
	name : "Book of Fantasia [House Rules and Homebrew]",
	abbreviation : "BOF",
	group : "Personal Campaign House Rules",
	campaignSetting : "Book of Fantasia",
	date : "2025/09/20"
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
	source : [["BOF", 6]],
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
		source : [["BOF", 6]],
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
		source : [["BOF", 6]],
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

RaceList["harengon-bof"] = {
	regExpSearch : /harengon/i,
	name : "Harengon",
	source : [["BOF", 6]],
	plural : "Harengons",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	weaponProfs : [!1, !1, ["scimitar", "double-bladed scimitar", "longbow", "shortbow"]],
	skills : ["Perception"],
	addMod : [{ type : "skill", field : "Init", mod : "Prof", text : "I can add my proficiency bonus to my initiative rolls." }],
	scoresGeneric : true,
	action : [["reaction", "Lucky Footwork"], ["bonus action", "Rabbit Hop"]],
	features : {
		"rabbit hop" : {
			name : "Rabbit Hop",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "short rest",
			additional : ProficiencyBonusList.map(function(n) {
				var hopDistance = n * 5 + ' ft';
				return What("Unit System") === "metric" ? ConvertToMetric(hopDistance) : hopDistance;
			})
		}
	},
	trait : "Harengon"+
		"\n \u2022 Hare-Trigger: I can add my proficiency bonus to my initiative rolls."+
		"\n \u2022 Leporine Senses: I have proficiency in the Perception skill."+
		"\n \u2022 Lucky Footwork: As a reaction when I fail a Dexterity saving throw, I can add +1d4 to the result, potentially making it a success. I can't do this if I'm prone or my speed is 0."+
		"\n \u2022 Rabbit Hop: As a bonus action if my speed isn't 0, I can jump 5 ft times my Prof Bonus without provoking opportunity attacks. I can do this my Prof Bonus times per short rest."
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
	source : ["BOF", 8],
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
	source : ["BOF", 8],
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
	source : [["BOF", 8]],
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

// Class Revisions
// Add Fighter (Brute)

var UATS_fighterBruteSubclassUA = AddSubClass("fighter", "brute-ua", {
	regExpSearch : /brute/i,
	subname : "Brute",
	source : [["BOF", 2]],
	fullname : "Brute",
	features : {
		"subclassfeature3" : {
			name : "Brute Force",
			source : [["BOF", 2]],
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
			source : [["BOF", 2]],
			minlevel : 7,
			description : desc([
				"I add +1d6 to all my saving throws, including death saves",
				"If the total of a death save is 20 or more, it counts as rolling a 20"
			]),
			savetxt : { text : ["Add 1d6 to all saves"] }
		},
		"subclassfeature15" : {
			name : "Devastating Critical",
			source : [["BOF", 2]],
			minlevel : 15,
			description : "\n   " + "Whenever I score a critical hit with a weapon, I add my fighter level to the damage",
			additional : levels.map(function (n) { return n < 15 ? "" : "+" + n + " damage on crit"; })
		},
		"subclassfeature18" : {
			name : "Survivor",
			source : [["BOF", 2]],
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
	FSfea.source = ["BOF", 2];
	FSfea.minlevel = 10;
	FSfea.extrachoices = "";
	FSfea.description = '\n   Choose an Additional Fighting Style using the "Choose Feature" button above ';
	ClassSubList[UATS_fighterBruteSubclassUA].features.subclassfeature10 = FSfea;
});

// New Maneuver options
AddFeatureChoice(ClassSubList["fighter-battle master"].features["subclassfeature3.1"], true, "Strike Beyond", {
	name : "Strike Beyond",
	source : [["BOF", 7]],
	description : desc([
		"I can throw aside all concern for defense to attack an enemy just beyond my reach. When I make my first attack roll on my turn, I can decide to expend one Superiority Die to attack recklessly. ",
		"I then roll that die, and add it to the damage roll. Doing so extends my reach by 5 ft, until the start of my next turn, but attack rolls against me have Advantage during that time. ",
		"I can't do this if I'm incapacitated"
	])
});

// Monk Revisions
ClassList["monk"]["die"] = 10;

// Paladin Revision
ClassList["paladin"]["die"] = 12;

// New Fighting Style
AddFightingStyle(["fighter", "ranger", "paladin"], "Mariner", { // Still valid 2021-09-21
	name : "Mariner Fighting Style",
	source : [["BOF", 3]],
	description : "\n   " + "While not wearing heavy armor or using a shield, I gain +1 AC and swim/climb speed" + "\n   " + "The swimming and climbing speeds are equal to my current walking speed",
	speed : {
		climb : { spd : "walk", enc : "walk" },
		swim : { spd : "walk", enc : "walk" }
	},
	extraAC : {
		mod : 1,
		text : "I gain a +1 bonus to AC while I'm not wearing heavy armor and not using a shield.",
		stopeval : function (v) { return v.heavyArmor || v.usingShield; }
	}
});
AddFightingStyle(["fighter", "ranger", "paladin"], "Close Quarters Shooter", { // Still valid 2021-09-21
	name : "Close Quarters Shooting Fighting Style",
	source : [["BOF", 1]],
	description:"\n   " + "+1 bonus to attack rolls I make with ranged attacks" + "\n   " + "I don't have disadvantage when making a ranged attack while within 5 ft of a hostile target" + "\n   " + "My ranged attacks ignore half and three-quarters cover against targets within 30 ft",
	calcChanges : {
		atkCalc : [
			function (fields, v, output) {
				if (v.isRangedWeapon) output.extraHit += 1;
			},
			"My ranged weapons get a +1 bonus on the To Hit, no Disadvantage within 5 ft of hostile target, ignore 1/2 and 3/4 cover."
		]
	}
});
AddFightingStyle(["fighter", "ranger", "paladin"], "Tunnel Fighter", { // Still valid 2021-09-21
	name : "Tunnel Fighting Style",
	source : [["BOF", 1]],
	description : "\n   " + "As a bonus action, I enter a defensive stance that lasts until the start of my next turn" + "\n   " + "While I'm in this defensive stance I gain the following two benefits:" + "\n    - " + "I can make opportunity attacks without using my reaction" + "\n    - " + "I can make a melee attack as a reaction if a hostile moves >5 ft while in my reach",
	action : [["bonus action", ""]]
});
/*

*/
// Dreamwalker feat
FeatsList["dreamwalker"] = {
	name : "Dreamwalker",
	source : [["BOF", 10]],
	descriptionFull : "Either through training or unknown reasons, you are able to walk between reality and dreams. You gain the following benefit:\n During a long rest, you can enter the Ethereal Plane as an astral projection of yourself. While on this plane, you can see when a creature is dreaming by seeing a near transparent sphere that deforms the fabric of the plane like water refracting light around its head. You can choose to peer into the dream or enter it for a number of minutes equal to five times your proficiency bonus. Once you've peered on enter into a creature's dream, you can't peer again into this creature's dreams until your next long rest.\n If you chose to enter the dream, you may interact with it however you choose and you can also communicate with the dreamer. When the dreamer wakes up, it can make an Insight check against your spell save DC or against a Deception or Persuasion check, your choice, to acknowledge that its dream has been meddled with.\n The DM may choose to not make a roll or give advantage or even disadvantage on the roll depending on the situation and the complexity of the dream. Inserting yourself in a dream has a chance of failure depending on your relationship with the creature. When you enter a dream, the DM rolls d100 and consults the table following.\n\n Relationship    Failure    Success\nFamily Member   \u2013     01-100\nClose Friend    01-10      11-100\nFriend          01-20      21-100\nTrusted Ally    01-30      31-100\nAcquaintance    01-40      41-100\nStranger        01-50      51-100\n\nAny damage you take while on the Ethereal Plane through this feat is also inflicted on your physical body. You die in your sleep if you are killed while on the Ethereal Plane.\n Resting while Dreamwalking isn't as recovering as a normal. At the end of a long rest where you dreamwalked, you do not recover lost Hit Points, though you still regain all Hit Dice normally gained through a long rest. You can spend one or more Hit Dice at the end of the long rest to regain Hit points.",
	description : "During a Long Rest: enter the dreams of other creatures via the Ethereal Plane, can interact with said creature in their dreams, for up to 5\u00D7 prof. bonus per day. Damage carries over to waking body, don't restore damage to HP upon waking, recover my HD normally, and can spend them to recover HP afterwards.",
};

// Revised Feats
// Revenant blade feat
FeatsList["revenant blade-bof"] = {
	name : "Revenant Blade",
	source : [["BOF", 10]],
	prerequisite : "Being an Elf (any) or Harengon",
	prereqeval : function(v) { return (/^(?!.*half)(?=.*(elf|eladrin|avariel|grugach|shadar-kai|harengon)).*$/i).test(CurrentRace.known); },
	descriptionFull : "You have trained with a master of the double blade and their skills have passed on to you. You gain the following benefits:" + "\n   " + "\u2022 Increase your Dexterity or Strength score by 1, to a maximum of 20." + "\n   " + "\u2022 While you are holding a double-bladed scimitar with two hands, you gain a + 1 bonus to Armor Class." + "\n   " + "\u2022 A double-bladed scimitar has the finesse property when you wield it." + "\n   " + "\u2022 On your turn, when you use a bonus action to make a melee attack with the blade at the opposite end of the weapon, the weapon's damage die for this attack increases to 2d4, instead of the usual 1d4.",
	description : "As a bonus action with the Attack action, I can make an additional attack with a double-bladed scimitar's opposite end for 2d4 slashing damage." + "\n   " + "I treat double-bladed scimitar as having the finesse trait. +1 AC while wielding a double-bladed scimitar with two hands." + "\n   " + "[+1 Strength or Dexterity].",
	scorestxt : "+1 Strength or Dexterity",
	action : [["bonus action", " (with Attack action)"]],
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == 'double-bladed scimitar' && fields.Proficiency) {
					fields.Description = fields.Description.replace('Two-handed; With Attack action, one attack as bonus action for 1d4', 'Finesse, two-handed; With Attack action, one attack as bonus action for 2d4');
					fields.Mod = v.StrDex;
				};
			},
			"Double-bladed scimitars count as having finesse for me and I can make an extra attack with them as a bonus action when taking the Attack action. They deal 2d4 damage for both ends of the weapon."
		]
	},
	extraAC : {
		mod : 1,
		text : "I gain a +1 bonus to AC while I'm wielding a double-bladed weapon in two hands.",
		stopeval : function (v) { return v.usingShield && !(/animated/i).test(What("AC Shield Bonus Description")) || !CurrentWeapons.known.some(function (n) { return n[0] == "double-bladed scimitar" || (WeaponsList[n[0]] && WeaponsList[n[0]].baseWeapon == "double-bladed scimitar"); }); }
	}
};

// Double bladed scimitar
WeaponsList["double-bladed scimitar"] = {
	regExpSearch : /^(?=.*double)(?=.*scimitar).*$/i,
	name : "Double-bladed scimitar",
	infoname: "Double-bladed scimitar [100 gp]",
	nameAlt : ["Scimitar, Double-bladed"],
	source : [["E:RLW", 22], ["WGtE", 74], ["BOF", 3]],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [2, 4, "slashing"],
	range : "Melee",
	weight : 6,
	description : "Two-handed; With Attack action, one attack as bonus action for 1d4",
	//special : true,
	abilitytodamage : true,
	monkweapon: true,
};

// Revolver
WeaponsList.revolver = {
	regExpSearch : /^(?=.*revolver).*$/i,
	name : "Revolver",
	infoname: "Revolver [300 gp]",
	source : [["D24", 73]],
	list : "firearm",
	ability : 2,
	type : "Martial",
	damage : [2, 8, "piercing"],
	range : "40/120 ft",
	weight : 3,
	description : "Ammunition, reload (6 shots)",
	abilitytodamage : true,
	ammo : "modern bullet",
	defaultExcluded : true,
	monkweapon: true,
};

// Boomstick
WeaponsList.boomstick = {
	regExpSearch : /^(?=.*boomstick).*$/i,
	name : "Boomstick",
	source : [["BOF", 8]],
	list : "firearm",
	ability : 2,
	type : "Martial",
	damage : [2, 8, "piercing"],
	range : "15/45 ft",
	weight : 3,
	description : "Ammunition, reload (2 shots)",
	abilitytodamage : true,
	ammo : "modern bullet",
	defaultExcluded : true,
	monkweapon: true,
};

// Shotgun
WeaponsList.shotgun = {
	regExpSearch : /^(?=.*shotgun).*$/i,
	name : "Shotgun",
	infoname: "Shotgun [600 gp]",
	source : [["D24", 73]],
	list : "firearm",
	ability : 2,
	type : "Martial",
	damage : [2, 8, "piercing"],
	range : "30/90 ft",
	weight : 7,
	description : "Ammunition, reload (2 shots), Two-handed",
	abilitytodamage : true,
	ammo : "modern bullet",
	defaultExcluded : true,
};

// Ammo
AmmoList["modern bullet"] = {
	name : "Bullets, Modern",
	infoname: "Bullets, Modern [4 gp]",
	source : [["D24", 72]],
	weight : 0.1,
	icon : "Bullets",
	invName : "Bullets, modern",
	alternatives : [/^(?=.*bullet)(?=.*modern).*$/i],
	defaultExcluded : true
};

MagicItemsList['sun blade'] = {
	name : "Sun Blade",
	source : [["SRD", 246], ["D", 205]],
	type : "weapon (any sword)",
	rarity : "rare",
	magicItemTable : "G",
	attunement : true,
	description : "As a bonus action, I can have this hilt create a blade of radiance. While the blade exists, it acts like a sword that does +2 to attack and damage rolls, radiant damage (+1d8 to undead), has finesse, emits bright sunlight in a 15-ft radius and dim light in another 15 ft. As an action, I can change the light's radius by 5 ft.",
	descriptionLong : "As a bonus action, I can have this hilt create or dismiss a blade of pure radiance. While the blade exists, it acts like a sword that grants a +2 bonus to attack and damage rolls, does radiant damage and has the finesse property (if not Heavy). It also deals +1d8 radiant damage to undead and emits sunlight, bright light in a 15-ft radius and dim light in an additional 15-ft radius. As an action, I can expand or reduce both the bright and dim light's radius by 5 ft each, to a maximum of 30 ft each or a minimum of 10 ft each.",
	descriptionFull : "This item appears to be a longsword hilt. While grasping the hilt, you can use a bonus action to cause a blade of pure radiance to spring into existence, or make the blade disappear. While the blade exists, this magic longsword has the finesse property. If you are proficient with shortswords or longswords, you are proficient with the sun blade.\n   You gain a +2 bonus to attack and damage rolls made with this weapon, which deals radiant damage instead of slashing damage. When you hit an undead with it, that target takes an extra 1d8 radiant damage.\n   The sword's luminous blade emits bright light in a 15-foot radius and dim light for an additional 15 feet. The light is sunlight. While the blade persists, you can use an action to expand or reduce its radius of bright and dim light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each.",
	weight : 3,
	action : [["bonus action", " (start/stop)"], ["action", " (change light)"]],
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "sword"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /sword|scimitar|rapier|double-bladed scimitar/i;
			return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && /sword|scimitar|rapier|double-bladed scimitar/i.test(v.baseWeaponName) && /^(?=.*sun)(?=.*blade).*$/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Damage_Type = "Radiant";
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					var addFinesse = /(^|[,;]) ?heavy([,;]|$)|finesse/i.test(fields.Description) ? '' : 'Finesse; ';
					fields.Description += (fields.Description ? '; ' : '') + addFinesse + '+1d8 damage to undead';
					if (v.baseWeaponName === "longsword" && !fields.Proficiency) {
						fields.Proficiency = CurrentProfs.weapon.otherWea && CurrentProfs.weapon.otherWea.finalProfs.indexOf("shortsword") !== -1;
					}
				}
			},
			'If I include the words "Sun Blade" in a the name of a sword, it will be treated as the magic weapon Sun Blade. It adds +2 to hit and damage rolls made with it, deals radiant damage, and deals +1d8 damage to undead. It gains the Finesse property unless it has the Heavy property. Having shortsword proficiency also makes me proficient with it, but only if it is a longsword.',
			1
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isMeleeWeapon && /sword|scimitar|rapier|double-bladed scimitar/i.test(v.baseWeaponName) && /^(?=.*sun)(?=.*blade).*$/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					output.magic = v.thisWeapon[1] + 2;
				}
			}, ''
		]
	}
};

MagicItemsList["frostburn"] = {
	name : "Frostburn",
	source : [["BOF", 3]],
	type : "weapon (any melee weapon)",
	rarity : "rare",
	magicItemTable : "?",
	attunement : true,
	description : "As a bonus action, I can speak the command word of this magic weapon, causing both flames to erupt from it, and a chill wind to emanate from it. These flames and chill winds add +2d6 Fire damage, +2d6 Cold damage, shine bright light in a 40-ft radius and dim light for an additional 40 ft, and grants me resistance to fire. The flames and chill winds  last until I speak the command word again as a bonus action or sheathe it. Once per hour when I draw the blade, I can extinguish all nonmagical flames within 30 ft of me.",
	descriptionFull : "While holding this magic weapon, you can take a Bonus Action and use a command word to cause flames to engulf the damage-dealing part of the weapon, and for the weapon to emanate a chill wind. These flames shed Bright Light in a 40-foot radius and Dim Light for an additional 40 feet. While the weapon is enhanced by this ability, it deals an extra 2d6 Fire damage and 2d6 Cold Damage on a hit.\n The enhancement last until you take a Bonus Action to issue the command again or until you drop, stow, or sheathe the weapon. In addition, while you hold the weapon, you have Resistance to Fire damage.\n   In freezing temperatures, the weapon sheds Bright Light in a 10-foot radius and Dim Light for an additional 10 feet.\n   When you draw this weapon, you can extinguish all nonmagical flames within 30 feet of yourself. Once used, this property can’t be used again for 1 hour.",
	action : [["bonus action", " (activate/end)"]],
	usages : 1,
	recovery : "Hour",
	additional : "extinguish flames",
	dmgres : ["Fire"],
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "weapon"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /double-bladed scimitar/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		},
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/^(?=.*frostburn).*$/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'While active, +2d6 fire damage and +2d6 cold damage';
				}
			},
			'If I include the words "Frostburn" in a the name of a melee weapon, it will be treated as the magic weapon Frostburn. When the command word is spoken, the blade erupts with flames and emanates chill winds, adding +2d6 fire damage and +2d6 cold damage  on a hit, a shining light, and resistance to fire.'
		]
	}
};
