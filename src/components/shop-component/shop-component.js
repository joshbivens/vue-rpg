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
      potions: potions
    }
  },
  methods: {
    shop() {
      var village = this.villages[_.random(this.villages.length - 1)];
      this.newItems = _.sampleSize(this.items, 4);
      this.village = village;
      this.potions = potions;
      this.character.shopping = true;
      this.character.exploring = false;
    },
    buyItem(item) {
      if (this.character.gold >= item.cost) {
        this.newItems.splice(this.newItems.indexOf(item), 1);
        this.character.inventory.push(item);
        this.character.gold -= item.cost;
      }
    },
    buyPotion(item) {
      if (this.character.gold >= item.cost) {
        this.character.potions.push(item);
        this.character.gold -= item.cost;
      }
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

var potions = [
  {
    name: "Minor Health Potion (+10 HP)",
    cost: 10,
    hp: 10,
    equipped: false
  },
  {
    name: "Major Health Potion (+30 HP)",
    cost: 20,
    hp: 30,
    equipped: false
  },
  {
    name: "Max Health Potion (Full HP)",
    cost: 50,
    hp: 100,
    equipped: false
  }
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
    luck: 5,
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
    luck: 1,
    equipped: false
  },
  {
    name: "Villager's Longbow",
    cost: 20,
    hp: 0,
    strength: 10,
    agility: 10,
    luck: 1,
    equipped: false
  },
  {
    name: "Hardened Crossbow",
    cost: 30,
    hp: 0,
    strength: 10,
    agility: 20,
    luck: 2,
    equipped: false
  },
  {
    name: "Hardened Longbow",
    cost: 40,
    hp: 0,
    strength: 20,
    agility: 20,
    luck: 2,
    equipped: false
  },
  {
    name: "Villager's Wand",
    cost: 10,
    hp: 0,
    strength: 5,
    agility: 5,
    luck: 2,
    equipped: false
  },
  {
    name: "Wand of the Wild",
    cost: 20,
    hp: 0,
    strength: 10,
    agility: 10,
    luck: 4,
    equipped: false
  },
  {
    name: "Dagger",
    cost: 10,
    hp: 0,
    strength: 0,
    agility: 10,
    luck: 1,
    equipped: false
  },
  {
    name: "Lucky Dagger",
    cost: 15,
    hp: 0,
    strength: 0,
    agility: 10,
    luck: 3,
    equipped: false
  },
  {
    name: "Golden Dagger",
    cost: 60,
    hp: 10,
    strength: 10,
    agility: 20,
    luck: 5,
    equipped: false
  },
  {
    name: "Coat of Valor",
    cost: 60,
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
    strength: 20,
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
    luck: 5,
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
    luck: 15,
    equipped: false
  }
];
