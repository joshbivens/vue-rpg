import Vue from 'vue';
import template from './stats-component-template.html';

const StatsComponent = Vue.extend({
  template,
  props: ['character'],
  data() {
    return {
      stats: false
    }
  },
  methods: {
    show() {
      this.stats = !this.stats;
    },
    equip(item) {
      item.equipped = true;
      this.character.hp += item.hp;
      this.character.strength += item.strength;
      this.character.agility += item.agility;
      this.character.luck += item.luck;
      this.character.mana += item.mana;
    },
    unequip(item) {
      item.equipped = false;
      this.character.hp -= item.hp;
      this.character.strength -= item.strength;
      this.character.agility -= item.agility;
      this.character.luck -= item.luck;
      this.character.mana -= item.mana;
    }
  }
})

export default StatsComponent;