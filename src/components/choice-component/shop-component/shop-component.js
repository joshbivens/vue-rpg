// We actually want to show a list of available items with prices. You get gold from killing monsters. Maybe a loop that goes through the items array and pushes three randos, and THAT list is what's displayed as 'for sale'.

import Vue from 'vue';
import template from './shop-component-template.html';

const ShopComponent = Vue.extend({
  template,
  props: ['character'],
  data() {
    return {
      village: '',
      item: '',
      shopping: false
    }
  },
  methods: {
    shop() {
      var village = villages[Math.floor(Math.random() * villages.length)];
      var item = items[Math.floor(Math.random() * items.length)].name;
      this.item = item;
      this.village = village;
      this.shopping = true;
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
    name: "Wand of Wilding"
  },
  {
    name: "Halberd of Distort"
  },
  {
    name: "Coat of Valor"
  }
];