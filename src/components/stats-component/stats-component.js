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
    },
    sell(item) {
      this.character.gold += item.cost;
      this.character.inventory.splice(this.character.inventory.indexOf(item), 1);
    },
    drink(potion) {
      this.character.hp += potion.hp;
      if (this.character.hp > 100) {
        this.character.hp = 100;
      }
      this.character.potions.splice(this.character.potions.indexOf(potion), 1);
    }
  }
})

export default StatsComponent;
