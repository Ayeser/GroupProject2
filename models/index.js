'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

db.Artwork.create({
  title: "Noah's Ark",
  picture:"http://3.bp.blogspot.com/_X4Kut5_tFwI/S-CadtH2lEI/AAAAAAAAAUw/rNqB9MqKa4c/s1600/google-noah-ark.jpg",
  artist:"the glue society",
  book:"genesis",
  chapter:"8",
verse:1
}).then(function(dbUser) {
  console.log(dbUser);
});

db.Scripture.create({
book:"genesis",
chapter:"1",
passage:'1 In the beginning, God created the heavens and the earth. 2 The earth was formless and empty. Darkness was on the surface of the deep and God’s Spirit was hovering over the surface of the waters. 3 God said, “Let there be light,” and there was light. 4 God saw the light, and saw that it was good. God divided the light from the darkness. 5 God called the light “day”, and the darkness he called “night”. There was evening and there was morning, the first day. 6 God said, “Let there be an expanse in the middle of the waters, and let it divide the waters from the waters.” 7 God made the expanse, and divided the waters which were under the expanse from the waters which were above the expanse; and it was so. 8 God called the expanse “sky”. There was evening and there was morning, a second day. 9 God said, “Let the waters under the sky be gathered together to one place, and let the dry land appear;” and it was so. 10 God called the dry land “earth”, and the gathering together of the waters he called “seas”. God saw that it was good. 11 God said, “Let the earth yield grass, herbs yielding seeds, and fruit trees bearing fruit after their kind, with their seeds in it, on the earth;” and it was so. 12 The earth yielded grass, herbs yielding seed after their kind, and trees bearing fruit, with their seeds in it, after their kind; and God saw that it was good. 13 There was evening and there was morning, a third day. 14 God said, “Let there be lights in the expanse of the sky to divide the day from the night; and let them be for signs to mark seasons, days, and years; 15 and let them be for lights in the expanse of the sky to give light on the earth;” and it was so. 16 God made the two great lights: the greater light to rule the day, and the lesser light to rule the night. He also made the stars. 17 God set them in the expanse of the sky to give light to the earth, 18 and to rule over the day and over the night, and to divide the light from the darkness. God saw that it was good. 19 There was evening and there was morning, a fourth day. 20 God said, “Let the waters abound with living creatures, and let birds fly above the earth in the open expanse of the sky.” 21 God created the large sea creatures and every living creature that moves, with which the waters swarmed, after their kind, and every winged bird after its kind. God saw that it was good. 22 God blessed them, saying, “Be fruitful, and multiply, and fill the waters in the seas, and let birds multiply on the earth.” 23 There was evening and there was morning, a fifth day. 24 God said, “Let the earth produce living creatures after their kind, livestock, creeping things, and animals of the earth after their kind;” and it was so. 25 God made the animals of the earth after their kind, and the livestock after their kind, and everything that creeps on the ground after its kind. God saw that it was good. 26 God said, “Let’s make man in our image, after our likeness. Let them have dominion over the fish of the sea, and over the birds of the sky, and over the livestock, and over all the earth, and over every creeping thing that creeps on the earth.” 27 God created man in his own image. In God’s image he created him; male and female he created them. 28 God blessed them. God said to them, “Be fruitful, multiply, fill the earth, and subdue it. Have dominion over the fish of the sea, over the birds of the sky, and over every living thing that moves on the earth.” 29 God said, “Behold,† I have given you every herb yielding seed, which is on the surface of all the earth, and every tree, which bears fruit yielding seed. It will be your food. 30 To every animal of the earth, and to every bird of the sky, and to everything that creeps on the earth, in which there is life, I have given every green herb for food;” and it was so. 31 God saw everything that he had made, and, behold, it was very good. There was evening and there was morning, a sixth day.'
}).then(function(dbScripture) {
console.log(dbScripture);
});

db.Video.create({
title: "In the Beginning",
videoEmbed:'<iframe src="https://player.vimeo.com/video/42558544?color=f2f2f2&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe><p><a href="https://vimeo.com/42558544">In the Beginning</a> from <a href="https://vimeo.com/digitalbiblesociety">Digital Bible Society</a> on <a href="https://vimeo.com">Vimeo</a>.</p>',
sourceCreator:"digital bible society",
book:"genesis",
chapter:"1",
verse:1
}).then(function(dbUser) {
console.log(dbUser);
});