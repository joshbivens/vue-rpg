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
          this.character.agility = 20;
        }
        if (this.character.caste == "Hunter") {
          this.character.strength = 30;
          this.character.agility = 70;
        }
        if (this.character.caste == "Assassin") {
          this.character.strength = 50;
          this.character.agility = 50;
        }
      } else {
        alert("Please enter a name for your character")
      }
    }
  }
});

export default CreatorComponent;