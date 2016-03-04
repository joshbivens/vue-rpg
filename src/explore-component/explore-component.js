import Vue from 'vue';
import template from './explore-component-template.html';

const ExploreComponent = Vue.extend({
  template,
  props: ['character'],
  data() {
    return {
      dungeons: dungeons,
      villages: villages,
      items: items
    }
  },
  filters: {
    randomize(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
  },
  computed: {
    randomItem() {
      return items[Math.floor(Math.random() * items.length)].name;
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