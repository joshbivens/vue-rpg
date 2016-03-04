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

var items = {
  weapons: {
    
  },
  armor: {
    
  }
}