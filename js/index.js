var game = {
    init: false
}

// Weapons & spells
var actions = [
    {
        type: 'weapon',
        name: 'sword',
        label: 'Epée',
        attack: 10
    },
    {
        type: 'weapon',
        name: 'axe',
        label: 'Hache',
        attack: 12
    },
    {
        type: 'weapon',
        name: 'shield',
        label: 'Bouclier',
        attack: 0,
        defense: 5
    },
    {
        type: 'spell',
        name: 'fireball',
        label: 'Boule de feu',
        attack: 40,
        mana: 30
    },
    {
        type: 'spell',
        name: 'frostbolt',
        label: 'Eclair de givre',
        attack: 20,
        mana: 20
    },
    {
        type: 'spell',
        name: 'mana',
        label: 'Potion de mana',
        attack: 0,
        mana: 100
    }
]

// Characters
var hero1 = {
    name: 'Roger le guerrier',
    hp: 500,
    maxHP: 500,
    mp: 50,
    maxMP: 50,
    defense: 0,
    attack: 10,
    class: 'warrior',
    actions: []
}

var hero2 = {
    name: 'Rapafro mage',
    hp: 350,
    maxHP: 350,
    mp: 200,
    maxMP: 200,
    defense: 0,
    attack: 6,
    class: 'mage',
    actions: []
}

// refresh one hero informations
var refreshHero = function(heroElement, hero) {
    console.log(hero)
}

// refresh the UI
var refresh = function() {
    refreshHero(null, hero1);
    refreshHero(null, hero2);
}

// load the game
var play = function() {
    // display game content and hide play button
    var gameContainer = document.getElementById('game');
    gameContainer.className = 'game-container';
    var playButton = document.getElementById('play');
    playButton.className = 'play gone';

    // init both heroes using the refresh function
    refresh();
}

// check if attacker has enough mana
var hasEnoughMana = function(attacker, manaCost) {
    if (attacker.mp - manaCost < 0) {
        alert('Pas assez de MP !')
        return false;
    }
    return true;
}

// check if defender is dead
var isDead = function(defender) {
    if (defender.hp < 0) {
        var message = defender.name + ' a perdu !';
        alert(message)
        return true;
    }
    return false;
}

// handle actions from onclick events
var doAction = function(action, attacker, defender) {

    /* DEBUG */
    var debug = attacker.name + ' uses ' + action; 
    if (action !== 'mana' && action !== 'shield') {
        debug += ' on ' + defender.name;
    }
    console.log(debug)
    /* END DEBUG */

    // TODO : reset attacker's defense at each turn
    // insert code here

    // TODO : write the code for each action
    //        => remove attacker's attack + action damage to defender's HP
    //        => all the informations you need in the actions array (line 6)
    if (action === 'sword') {
        // insert code here
    }
    else if (action === 'axe') {
        // insert code here
    }
    else if (action === 'shield') {
        // insert code here
        // Note : shield doesn't add attack but defense
    }
    else if (action === 'fireball') {
        // insert code here
        // Note : don't forget to check if attacker has enough mana to cast the spell with hasEnoughMana function
    }
    else if (action === 'frostbolt') {
        // insert code here
        // Note : don't forget to check if attacker has enough mana to cast the spell with hasEnoughMana function
    }
    else if (action === 'mana') {
        // insert code here
        // Note : don't forget to check if attacker MP won't be above maxMP after drinking the mana potion 
    }

    // check if the defender is dead to end the game
    if (isDead(defender)) {
        endGame();
        return ;
    }

    // refresh DOM once JS objects were updated
    refresh();
}

// reset heroes data
var resetData = function() {
    hero1.hp = hero1.maxHP;
    hero1.mp = hero1.maxMP;
    hero1.defense = 0;
    hero2.hp = hero2.maxHP;
    hero2.mp = hero2.maxMP;
    hero2.defense = 0;
}

// end the game 
var endGame = function() {
    game.init = false;

    // hide game content and display play button
    var gameContainer = document.getElementById('game');
    gameContainer.className = 'game-container gone';
    var playButton = document.getElementById('play');
    playButton.className = 'main-menu-btn visible';
    
    // Reset data for a new game
    resetData();
}