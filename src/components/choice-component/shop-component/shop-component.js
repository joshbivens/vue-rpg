// We actually want to show a list of available items with prices. You get gold from killing monsters. Maybe a loop that goes through the items array and pushes three randos, and THAT list is what's displayed as 'for sale'.

import Vue from 'vue';
import _ from 'lodash';
import template from './shop-component-template.html';

const ShopComponent = Vue.extend({
  template,
  props: ['character'],
  data() {
    return {
      villages: villages,
      items: items,
      village: '',
      newItems: [],
      shopping: false
    }
  },
  methods: {
    shop() {
      var village = this.villages[_.random(this.villages.length)];
      this.newItems = _.sampleSize(this.items, 3);
      this.village = village;
      this.shopping = !this.shopping;
    },
    buy(item) {
      // Remove item from newItems
      var newItem = item;
      this.newItems.splice(this.newItems.indexOf(newItem), 1);
      // Push item to character's inventory
      this.character.inventory.push(newItem);
      // Modify character stats
      this.character.gold -= newItem.cost;
    }
  }
});

export default ShopComponent;
    
var villages = [
  "Ortul",
  "Calestrii",
  "the Forest of Light",
  "Eldevin",
  "Nessus",
  "Thrax"
];

var items = [
  {
    name: "Wand of Wilding",
    cost: 20,
    hp: 0,
    strength: 10,
    agility: 10,
    luck: -10,
    mana: 20
  },
  {
    name: "Halberd of Distortion",
    cost: 30,
    hp: 0,
    strength: 20,
    agility: -5,
    luck: 0,
    mana: 20
  },
  {
    name: "Coat of Valor",
    cost: 50,
    hp: 10,
    strength: 10,
    agility: 10,
    luck: 10,
    mana: 0
  },
  {
    name: "Basic Shortsword",
    cost: 10,
    hp: 0,
    strength: 5,
    agility: 0,
    luck: 0,
    mana: 0
  },
  {
    name: "Basic Longsword",
    cost: 20,
    hp: 0,
    strength: 10,
    agility: 0,
    luck: 0,
    mana: 0
  },
  {
    name: "Dagger",
    cost: 10,
    hp: 0,
    strength: 0,
    agility: 10,
    luck: 0,
    mana: 0
  }
];