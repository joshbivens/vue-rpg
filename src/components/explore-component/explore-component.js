import Vue from 'vue';
import _ from 'lodash';
import template from './explore-component-template.html';

const ExploreComponent = Vue.extend({
  template,
  props: ['character'],
  data() {
    return {
      dungeons: dungeons,
      monsters: monsters,
      dungeon: '',
      monster: '',
      localHP: 0,
      goldFromLuck: 0,
      round: 0, 
      fighting: false,
      characterTurn: false,
      monsterTurn: false
    }
  },
  computed: {
    attack() {
      return 10 + (this.character.strength * 0.15) + (this.character.agility * 0.1);
    },
    defense() {
      return this.character.agility * 0.3;
    }
  },
  methods: {
    explore() {
      var dungeon = this.dungeons[_.random(this.dungeons.length - 1)];
      var monster = this.monsters[_.random(this.monsters.length - 1)];
      this.dungeon = dungeon;
      this.monster = monster;
      this.monster.alive = true;
      this.localHP = monster.hp;
      this.character.exploring = true;
      this.character.shopping = false;
      this.fighting = false;
    },
    fight() {
      this.round += 1;
      this.fighting = true;
      this.characterTurn = true;
      this.monsterTurn = false;
      if (this.attack > this.monster.defense) {
        this.localHP -= this.attack;
      }
      if (this.localHP <= 0) {
        var goldFromLuck = _.random(this.character.luck);
        this.goldFromLuck = goldFromLuck;
        console.log(this.goldFromLuck);
        this.monster.alive = false;
        this.character.gold += this.monster.gv + goldFromLuck;
        this.character.hp = 100;
        this.round = 0;
      }
    },
    endTurn() {
      this.round += 1;
      this.monsterTurn = true;
      this.characterTurn = false;
      if (this.monster.attack > this.defense) {
        this.character.hp -= this.monster.attack;
      }
      if (this.character.hp <= 0) {
        this.character.alive = false;
      }
    }
  }
});

export default ExploreComponent;

var dungeons = [
  "Caves of Mraia",
  "Caves of Ortul",
  "Deeping Caverns",
  "Glowing Caverns",
  "Astral Plexus",
  "Orbal Dungeon",
  "Dark Forest",
  "Lake of Lorne"
];

var monsters = [
  {
    name: "Simple Slime",
    hp: 10,
    attack: 0,
    defense: 0,
    gv: 1,
    alive: true,
    attacking: false
  },
  {
    name: "Complex Slime",
    hp: 20,
    attack: 5,
    defense: 0,
    gv: 5,
    alive: true,
    attacking: false
  },
  {
    name: "Common Basilisk",
    hp: 30,
    attack: 15,
    defense: 10,
    gv: 10,
    alive: true,
    attacking: false
  },
  {
    name: "Rabid Basilisk",
    hp: 40,
    attack: 25,
    defense: 15,
    gv: 15,
    alive: true,
    attacking: false
  },
  {
    name: "Simple Skellington",
    hp: 25,
    attack: 5,
    defense: 10,
    gv: 5,
    alive: true,
    attacking: false
  },
  {
    name: "Spooky Skellington",
    hp: 25,
    attack: 10,
    defense: 10,
    gv: 10,
    alive: true,
    attacking: false
  },
  {
    name: "Black Dragon",
    hp: 500,
    attack: 50,
    defense: 50,
    gv: 100,
    alive: true,
    attacking: false
  },
  {
    name: "Raging Warbeast of the Abyss",
    hp: 1000,
    attack: 100,
    defense: 100,
    gv: 300,
    alive: true,
    attacking: false
  }
];