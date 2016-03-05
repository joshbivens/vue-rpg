import Vue from 'vue';
import template from './creator-component-template.html';

const CreatorComponent = Vue.extend({
  template,
  props: ['character'],
  methods: {
    create() {
      if (this.character.name) {
        this.character.created = true;
        if (this.character.caste == "Cavalier") {
          this.character.strength = 80;
          this.character.agility = 30;
          this.character.luck = 30;
          this.character.mana = 10;
        }
        if (this.character.caste == "Hunter") {
          this.character.strength = 40;
          this.character.agility = 70;
          this.character.luck = 40;
          this.character.mana = 20;
        }
        if (this.character.caste == "Assassin") {
          this.character.strength = 50;
          this.character.agility = 60;
          this.character.luck = 40;
          this.character.mana = 30;
        }
        if (this.character.caste == "Shaman") {
          this.character.strength = 30;
          this.character.agility = 30;
          this.character.luck = 30;
          this.character.mana = 70;
        }
      } else {
        alert("Please enter a name for your character")
      }
    }
  }
});

export default CreatorComponent;