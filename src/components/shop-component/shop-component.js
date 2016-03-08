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
      newItems: []
    }
  },
  methods: {
    shop() {
      var village = this.villages[_.random(this.villages.length)];
      this.newItems = _.sampleSize(this.items, 4);
      this.village = village;
      this.character.shopping = true;
      this.character.exploring = false;
    },
    buy(item) {
      var newItem = item;
      if (this.character.gold >= newItem.cost) {
        this.newItems.splice(this.newItems.indexOf(newItem), 1);
        this.character.inventory.push(newItem);
        this.character.gold -= newItem.cost;
      }
    }
  }
});

// Attack value for a character will be a combination of the stats! Computed maybe.

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
    name: "Basic Shortsword",
    cost: 10,
    hp: 0,
    strength: 5,
    agility: 0,
    luck: 0,
    equipped: false
  },
  {
    name: "Mystic Shortsword",
    cost: 30,
    hp: 5,
    strength: 10,
    agility: 5,
    luck: 0,
    equipped: false
  },
  {
    name: "Basic Longsword",
    cost: 20,
    hp: 0,
    strength: 15,
    agility: 0,
    luck: 0,
    equipped: false
  },
  {
    name: "Longsword of Vitality",
    cost: 40,
    hp: 20,
    strength: 20,
    agility: 0,
    luck: 0,
    equipped: false
  },
  {
    name: "Villager's Crossbow",
    cost: 10,
    hp: 0,
    strength: 0,
    agility: 10,
    luck: 0,
    equipped: false
  },
  {
    name: "Villager's Longbow",
    cost: 20,
    hp: 0,
    strength: 10,
    agility: 10,
    luck: 0,
    equipped: false
  },
  {
    name: "Hardened Crossbow",
    cost: 30,
    hp: 0,
    strength: 10,
    agility: 20,
    luck: 0,
    equipped: false
  },
  {
    name: "Hardened Longbow",
    cost: 40,
    hp: 0,
    strength: 20,
    agility: 20,
    luck: 0,
    equipped: false
  },
  {
    name: "Villager's Wand",
    cost: 10,
    hp: 0,
    strength: 0,
    agility: 0,
    luck: 0,
    equipped: false
  },
  {
    name: "Wand of the Wild",
    cost: 20,
    hp: 0,
    strength: 10,
    agility: 10,
    luck: 0,
    equipped: false
  },
  {
    name: "Dagger",
    cost: 10,
    hp: 0,
    strength: 0,
    agility: 10,
    luck: 0,
    equipped: false
  },
  {
    name: "Lucky Dagger",
    cost: 15,
    hp: 0,
    strength: 0,
    agility: 10,
    luck: 2,
    equipped: false
  },
  {
    name: "Golden Dagger",
    cost: 50,
    hp: 10,
    strength: 10,
    agility: 10,
    luck: 10,
    equipped: false
  },
  {
    name: "Coat of Valor",
    cost: 50,
    hp: 10,
    strength: 10,
    agility: 10,
    luck: 10,
    equipped: false
  },
  {
    name: "Hardened Helm",
    cost: 20,
    hp: 10,
    strength: 10,
    agility: 0,
    luck: 0,
    equipped: false
  },
  {
    name: "Dragon's Helm",
    cost: 30,
    hp: 20,
    strength: 10,
    agility: 0,
    luck: 0,
    equipped: false
  },
  {
    name: "Obsidian Cloak",
    cost: 40,
    hp: 20,
    strength: 0,
    agility: 0,
    luck: 0,
    equipped: false
  },
  {
    name: "Fuligin Cloak",
    cost: 40,
    hp: 20,
    strength: 0,
    agility: 20,
    luck: 0,
    equipped: false
  },
  {
    name: "Chromkey Dreamcoat",
    cost: 50,
    hp: 30,
    strength: 0,
    agility: 0,
    luck: 0,
    equipped: false
  },
  {
    name: "Stealth Gauntlets",
    cost: 50,
    hp: 10,
    strength: 10,
    agility: 20,
    luck: 2,
    equipped: false
  },
  {
    name: "Golden Trinket",
    cost: 35,
    hp: 0,
    strength: 0,
    agility: 0,
    luck: 5,
    equipped: false
  }
];