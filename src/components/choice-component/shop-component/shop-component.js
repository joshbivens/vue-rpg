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
  }
];