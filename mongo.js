var monsterFunction = function(name, health, last_fought, attacks, stats, db){
    db.monsters.insert();

    console.log(db.monsters.find());

    db.monsters.find({"name": "The Vicious Frost Dog"});

    db.monsters.find({"attacks": "bite"});

    db.monsters.find({"stats.defense": 10});
};

