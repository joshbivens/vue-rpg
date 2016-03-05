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
      exploring: false
    }
  },
  methods: {
    explore() {
      var dungeon = this.dungeons[_.random(this.dungeons.length)];
      var monster = this.monsters[_.random(this.monsters.length)].name;  
      this.dungeon = dungeon;
      this.monster = monster;
      this.exploring = true;
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
    attack: 0
  },
  {
    name: "Complex Slime",
    hp: 20,
    attack: 5
  },
  {
    name: "Common Basilisk",
    hp: 30,
    attack: 15
  },
  {
    name: "Rabid Basilisk",
    hp: 40,
    attack: 25
  },
  {
    name: "Simple Skellington",
    hp: 25,
    attack: 5
  },
  {
    name: "Spooky Skellington",
    hp: 25,
    attack: 10
  },
  {
    name: "Black Dragon of the Dark Forest",
    hp: 500,
    attack: 50
  },
  
  {
    name: "Raging Warbeast of the Abyss",
    hp: 1000,
    attack: 100
  }
];