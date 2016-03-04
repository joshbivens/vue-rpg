import Vue from 'vue';
import template from './creator-component-template.html';

const CreatorComponent = Vue.extend({
  template,
  props: ['character'],
  methods: {
    create() {
      this.character.created = true;
      if (this.character.caste == "Warrior") {
        this.character.strength = 80;
        this.character.agility = 30;
        this.character.luck = 30;
        this.character.mana = 10;
      }
      if (this.character.caste == "Ranger") {
        this.character.strength = 40;
        this.character.agility = 70;
        this.character.luck = 50;
        this.character.mana = 30;
      }
      if (this.character.caste == "Rogue") {
        this.character.strength = 50;
        this.character.agility = 60;
        this.character.luck = 40;
        this.character.mana = 30;
      }
      if (this.character.caste == "Mage") {
        this.character.strength = 30;
        this.character.agility = 30;
        this.character.luck = 30;
        this.character.mana = 70;
      }
    }
  }
});

export default CreatorComponent;