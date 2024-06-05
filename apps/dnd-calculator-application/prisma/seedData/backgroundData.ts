export const backgroundsSeedData = [
    {
      backgroundName: 'Acolyte',
      backgroundDescription: 'You have spent your life in service to a temple, learning the rituals and practices of your faith',
      skillProficiencies: ['Insight', 'Religion'],
      toolProficiencies: [],
      languageSlotModifier: 2,
      backgroundFeatureTitle: 'Shelter of the Faithful',
      backgroundFeatureDescription: 'You and your companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith. ' +
      'Those who share your faith will support you (but only you) at a modest lifestyle.',
      suggestedCharacteristics: ["I idolize a particular hero of my faith, and constantly refer to that person's deeds and example."],
      equipment: ['Holy_symbol', 'Prayer_book', '5xIncense', 'Vestments', 'Common_clothes', '15gp'],
    },
    {
      backgroundName: 'Charlatan',
      backgroundDescription: 'You are a con artist, a swindler, and a cheat. You have a silver tongue and a quick wit',
      skillProficiencies: ['Deception', 'Sleight of Hand'],
      toolProficiencies: ['Disguise Kit', 'Forgery Kit'],
      languageSlotModifier: 0,
      backgroundFeatureTitle: 'False Identity',
      backgroundFeatureDescription: 'You have created a second identity that includes documentation, established acquaintances, and disguises that allow you to assume that persona',
      suggestedCharacteristics: ["I lie about almost everything, even when there's no good reason to."],
      equipment: ['Fine_clothes', 'Disguise_kit', 'Tools_of_the_con', '15gp'], // Fix tools of the con, needs to be a choice of items/
    },
    {
      backgroundName: 'Criminal',
      backgroundDescription: 'You are an experienced criminal with a history of breaking the law and getting away with it',
      skillProficiencies: ['Deception', 'Stealth'],
      toolProficiencies: ['Thieves Tools'],
      languageSlotModifier: 0,
      backgroundFeatureTitle: 'Criminal Contact',
      backgroundFeatureDescription: 'You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. ' +
      'You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you.',
      suggestedCharacteristics: ["I have a 'tell' that reveals when I'm lying."],
      equipment: ['Crowbar', 'Dark_clothes', 'Thieves_tools', '15gp'],
    },
    {
      backgroundName: 'Entertainer',
      backgroundDescription: 'You thrive in front of an audience. You know how to entrance them, entertain them, and even inspire them',
      skillProficiencies: ['Acrobatics', 'Performance'],
      toolProficiencies: ['Disguise Kit', 'Musical Instrument'],
      languageSlotModifier: 0,
      backgroundFeatureTitle: 'By Popular Demand',
      backgroundFeatureDescription: 'You can always find a place to perform, usually in an inn or tavern but possibly with a circus, at a theater, or even in a noble’s court. ' +
      'At such a place, you receive free lodging and food of a modest or comfortable standard, as long as you perform each night.',
      suggestedCharacteristics: ["I'm a hopeless romantic, always searching for that 'special someone'."],
      equipment: ['Musical_instrument', 'Costume', '15gp'], // Fix musical instrument, needs to be a choice of items
    },
    {
      backgroundName: 'Folk Hero',
      backgroundDescription: 'You come from a humble social rank, but you are destined for so much more. Already the people of your home village regard you as their champion',
      skillProficiencies: ['Animal Handling', 'Survival'],
      toolProficiencies: ['Artisan Tools'],
      languageSlotModifier: 0,
      backgroundFeatureTitle: 'Rustic Hospitality',
      backgroundFeatureDescription: 'Since you come from the ranks of the common folk, you fit in among them with ease. ' +
      'You can find a place to hide, rest, or recuperate among other commoners, unless you have shown yourself to be a danger to them.',
      suggestedCharacteristics: ["I judge people by their actions, not their words."],
      equipment: ['Artisan_tools', 'Shovel', 'Iron_pot', 'Common_clothes', '10gp'],
    },
    {
      backgroundName: 'Guild Artisan',
      backgroundDescription: "You are a member of an artisan's guild, skilled in a particular field and closely associated with other artisans",
      skillProficiencies: ['Insight', 'Persuasion'],
      toolProficiencies: ['Artisan Tools'],
      languageSlotModifier: 0,
      backgroundFeatureTitle: 'Guild Membership',
      backgroundFeatureDescription: 'You are a member of an artisan’s guild, skilled in a particular field and closely associated with other artisans. ' +
      'You know the practices of your guild and the laws of the community. ' +
      'Your guild will provide you with lodging and food if necessary, and pay for your funeral if needed. ' +
      'In some cities and towns, a guildhall offers a central place to meet other members of your profession, which can be a good place to meet potential patrons, allies, or hirelings.',
      suggestedCharacteristics: ["I'm willing to listen to every side of an argument before I make my own judgment."],
      equipment: ['Artisan_tools', 'Letter_of_introduction', 'Travelers_clothes', '15gp'],
    },
    {
      backgroundName: 'Hermit',
      backgroundDescription: 'You lived in seclusion, either in a sheltered community such as a monastery, or entirely alone for a period of time',
      skillProficiencies: ['Medicine', 'Religion'],
      toolProficiencies: [],
      languageSlotModifier: 0,
      backgroundFeatureTitle: 'Discovery',
      backgroundFeatureDescription: 'The quiet seclusion of your extended hermitage gave you access to a unique and powerful discovery. ' +
      'The exact nature of this revelation depends on the nature of your seclusion. ' +
      'It might be a great truth about the cosmos, the deities, the powerful beings of the outer planes, or the forces of nature.',
      suggestedCharacteristics: ["I'm driven by a wanderlust that led me away from home."],
      equipment: ['Scroll_case', 'Winter_blanket', 'Common_clothes', 'Herbalism_kit', '5gp'],
    },
    {
      backgroundName: 'Noble',
      backgroundDescription: 'You understand wealth, power, and privilege. You carry a noble title, and your family owns land, collects taxes, and wields significant political influence',
      skillProficiencies: ['History', 'Persuasion'],
      toolProficiencies: [],
      languageSlotModifier: 0,
      backgroundFeatureTitle: 'Position of Privilege',
      backgroundFeatureDescription: 'Thanks to your noble birth, people are inclined to think the best of you. ' +
      'You are welcome in high society, and people assume you have the right to be wherever you are. ' +
      'The common folk make every effort to accommodate you and avoid your displeasure, and other people of high birth treat you as a member of the same social sphere. ' +
      'You can secure an audience with a local noble if you need to.',
      suggestedCharacteristics: ["I have a strong sense of fair play and always try to find the most equitable solution to arguments."],
      equipment: ['Fine_clothes', 'Signet_ring', 'Scroll_of_pedigree', 'Purse', '25gp'],
    },
    {
      backgroundName: 'Outlander',
      backgroundDescription: 'You grew up in the wilds, far from civilization and the comforts of town and technology',
      skillProficiencies: ['Athletics', 'Survival'],
      toolProficiencies: ['Musical Instrument'],
      languageSlotModifier: 0,
      backgroundFeatureTitle: 'Wanderer',
      backgroundFeatureDescription: 'You have an excellent memory for maps and geography, and you can always recall the general layout of terrain, settlements, and other features around you. ' +
      'In addition, you can find food and fresh water for yourself and up to five other people each day, provided that the land offers berries, small game, water, and so forth.',
      suggestedCharacteristics: ["I place no stock in wealthy or well-mannered folk. Money and manners won't save you from a hungry owlbear."],
      equipment: ['Staff', 'Hunting_trap', 'Trophy_from_an_animal', 'Travelers_clothes', '10gp'],
    },
    {
      backgroundName: 'Sage',
      backgroundDescription: 'You spent years learning the lore of the multiverse. You scoured manuscripts, studied scrolls, and listened to the greatest experts on the subjects that interest you',
      skillProficiencies: ['Arcana', 'History'],
      toolProficiencies: [],
      languageSlotModifier: 2,
      backgroundFeatureTitle: 'Researcher',
      backgroundFeatureDescription: 'When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you can obtain it. ' +
      'Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature. ' +
      'Your DM might rule that the knowledge you seek is secreted away in an almost inaccessible place, or that it simply cannot be found. ' +
      'Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign.',
      suggestedCharacteristics: ["I'm willing to listen to every side of an argument before I make my own judgment."],
      equipment: ['Bottle_of_black_ink', 'Quill', 'Small_knife', 'Letter_from_a_dead_colleague', 'Common_clothes', '10gp'],
    },
    {
      backgroundName: 'Sailor',
      backgroundDescription: 'You sailed on a seagoing vessel for years. In that time, you faced down mighty storms, monsters of the deep, and those who wanted to sink your craft',
      skillProficiencies: ['Athletics', 'Perception'],
      toolProficiencies: ['Navigator Tools', 'Water Vehicles'],
      languageSlotModifier: 0,
      backgroundFeatureTitle: "Ship's Passage",
      backgroundFeatureDescription: 'When you need to, you can secure free passage on a sailing ship for yourself and your adventuring companions. ' +
      'You might sail on the ship you served on, or another ship you have good relations with (perhaps one captained by a former crewmate).',
      suggestedCharacteristics: ["I follow orders, even if I think they're wrong."],
      equipment: ['Belaying_pin', '50ft_of_rope', 'Lucky_charm', 'Common_clothes', '10gp'],
    },
    {
      backgroundName: 'Soldier',
      backgroundDescription: 'You are a warrior, trained to fight and defend. You served in an army, either as a regular soldier or as an officer',
      skillProficiencies: ['Athletics', 'Intimidation'],
      toolProficiencies: ['Gaming Set'],
      languageSlotModifier: 0,
      backgroundFeatureTitle: 'Military Rank',
      backgroundFeatureDescription: 'You have a military rank from your career as a soldier. ' +
      'Soldiers loyal to your former military organization still recognize your authority and influence, and they defer to you if they are of a lower rank. ' +
      'You can invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for temporary use. ' +
      'You can also usually gain access to friendly military encampments and fortresses where your rank is recognized.',
      suggestedCharacteristics: ["I can stare down a hell hound without flinching."],
      equipment: ['Insignia_of_rank', 'Trophy_from_a_fallen_enemy', 'Set_of_bone_dice', 'Common_clothes', '10gp'],
    }
  ]