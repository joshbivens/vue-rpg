// We actually want to show a list of available items with prices. You get gold from killing monsters. Maybe a loop that goes through the items array and pushes three randos, and THAT list is what's displayed as 'for sale'.

import Vue from 'vue';
import template from './shop-component-template.html';

const ShopComponent = Vue.extend({
  template,
  props: ['character'],
  data() {
    return {
      village: '',
      newItems: [],
      shopping: false
    }
  },
  methods: {
    shop() {
      var village = villages[Math.floor(Math.random() * villages.length)];
      
      var newItems = [];
      for (var i = 0, x = items.length; i < 3; i++) {
        var item = items[Math.floor(Math.random() * items.length)];
        newItems.push(item);
        console.log(newItems);
      }
      this.newItems = newItems;
      this.village = village;
      this.shopping = !this.shopping;
    }
  }
});

export default ShopComponent;
    
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
  }
];