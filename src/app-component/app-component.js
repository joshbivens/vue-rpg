import Vue from 'vue';
import template from './app-component-template.html';
import CreatorComponent from '../creator-component/creator-component';
import StatsComponent from '../stats-component/stats-component';
import ExploreComponent from '../explore-component/explore-component';

const AppComponent = Vue.extend({
  template,
  components: {
    'creator-component': CreatorComponent,
    'stats-component': StatsComponent,
    'explore-component': ExploreComponent
  },
  data() {
    return {
      character: {
        name: '',
        caste: '',
        hp: 100,
        strength: 0,
        agility: 0,
        luck: 0,
        mana: 0,
        created: false
      }
    }
  }
})

export default AppComponent;