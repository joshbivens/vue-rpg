import Vue from 'vue';
import template from './creator-component-template.html';
import StatsComponent from '../stats-component/stats-component';

const CreatorComponent = Vue.extend({
  template,
  components: {
    'stats-component': StatsComponent
  },
  data() {
    return {
      character: {
        characterName: '',
        caste: '',
        hp: 100,
        strength: 0,
        agility: 0,
        luck: 0,
        mana: 0,
        created: false
      }
    }
  },
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