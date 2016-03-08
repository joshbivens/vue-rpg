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
      fighting: false
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
      var dungeon = this.dungeons[_.random(this.dungeons.length)];
      var monster = this.monsters[_.random(this.monsters.length)];
      this.dungeon = dungeon;
      this.monster = monster;
      this.character.exploring = true;
      this.character.shopping = false;
      this.fighting = false;
    },
    fight() {
      this.fighting = true;
      // Compare the att/def values of you and the monster
      // You go first
      // if your att is higher than the monster's def, you hit for the full att value;
      // if your att is lower, you don't hit
      // Monster turn
      // If monster att is higher than your def, they hit for half
      // If not, nothing
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
  // {
  //   name: "Simple Slime",
  //   hp: 10,
  //   attack: 0,
  //   defense: 0,
  //   gv: 1,
  //   alive: true
  // },
  // {
  //   name: "Complex Slime",
  //   hp: 20,
  //   attack: 5,
  //   defense: 0,
  //   gv: 5,
  //   alive: true
  // },
  // {
  //   name: "Common Basilisk",
  //   hp: 30,
  //   attack: 15,
  //   defense: 10,
  //   gv: 10,
  //   alive: true
  // },
  // {
  //   name: "Rabid Basilisk",
  //   hp: 40,
  //   attack: 25,
  //   defense: 15,
  //   gv: 15,
  //   alive: true
  // },
  // {
  //   name: "Simple Skellington",
  //   hp: 25,
  //   attack: 5,
  //   defense: 10,
  //   gv: 5,
  //   alive: true
  // },
  // {
  //   name: "Spooky Skellington",
  //   hp: 25,
  //   attack: 10,
  //   defense: 10,
  //   gv: 10,
  //   alive: true
  // },
  {
    name: "Black Dragon",
    hp: 500,
    attack: 50,
    defense: 50,
    gv: 100,
    alive: true
  },
  {
    name: "Raging Warbeast of the Abyss",
    hp: 1000,
    attack: 100,
    defense: 100,
    gv: 300,
    alive: true
  }
];