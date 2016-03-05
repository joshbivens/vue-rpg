import Vue from 'vue';
import template from './explore-component-template.html';

const ExploreComponent = Vue.extend({
  template,
  props: ['character'],
  data() {
    return {
      dungeon: '',
      monster: '',
      exploring: false
    }
  },
  methods: {
    explore() {
      var dungeon = dungeons[Math.floor(Math.random() * dungeons.length)];
      var monster = monsters[Math.floor(Math.random() * monsters.length)].name;  
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
  "Dark Forest"
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