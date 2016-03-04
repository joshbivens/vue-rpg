import Vue from 'vue';
import template from './explore-component-template.html';

const ExploreComponent = Vue.extend({
  template,
  props: ['character'],
  data() {
    return {
      dungeons: dungeons,
      villages: villages,
      items: items,
      dungeon: '',
      monster: '',
      village: '',
      item: '',
      exploring: false,
      shopping: false
    }
  },
  methods: {
    explore() {
      var dungeon = dungeons[Math.floor(Math.random() * dungeons.length)];
      var monster = monsters[Math.floor(Math.random() * monsters.length)].name;
      this.dungeon = dungeon;
      this.monster = monster;
      this.exploring = true;
      this.shopping = false;
    },
    shop() {
      var village = villages[Math.floor(Math.random() * villages.length)];
      var item = items[Math.floor(Math.random() * items.length)].name;
      this.item = item;
      this.village = village;
      this.shopping = true;
      this.exploring = false;
    }
  }
})

export default ExploreComponent;

var dungeons = [
  "Caves of Mraia",
  "Caves of Ortul",
  "Deeping Cavens",
  "Glowing Caverns",
  "Astral Plexus",
  "Orbal Dungeon",
  "Dark Forest"
];

var villages = [
  "Ortul",
  "Calestrii",
  "Forest of Light",
  "Eldevin",
  "Nessus",
  "Thrax"
];

var monsters = [
  {
    name: "Rabid Basilisk"
  },
  {
    name: "Spooky Skellington"
  },
  {
    name: "Raging Warbeast of the Abyss"
  }
];

var items = [
  {
    name: "Wand of Wilding"
  },
  {
    name: "Halberd of Distort"
  },
  {
    name: "Coat of Valor"
  }
];