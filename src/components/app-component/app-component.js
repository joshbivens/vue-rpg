import Vue from 'vue';
import template from './app-component-template.html';
import CreatorComponent from '../creator-component/creator-component';
import StatsComponent from '../stats-component/stats-component';
import ChoiceComponent from '../choice-component/choice-component';

const AppComponent = Vue.extend({
  template,
  components: {
    'creator-component': CreatorComponent,
    'stats-component': StatsComponent,
    'choice-component': ChoiceComponent
  },
  data() {
    return {
      character: {
        name: '',
        caste: '',
        gold: 30,
        hp: 100,
        strength: 0,
        agility: 0,
        luck: 0,
        mana: 0,
        created: false,
        exploring: false,
        shopping: false
      }
    }
  }
})

export default AppComponent;