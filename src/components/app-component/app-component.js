import Vue from 'vue';
import template from './app-component-template.html';
import CreatorComponent from '../creator-component/creator-component';
import ExploreComponent from '../explore-component/explore-component';
import ShopComponent from '../shop-component/shop-component';
import StatsComponent from '../stats-component/stats-component';

const AppComponent = Vue.extend({
  template,
  components: {
    'creator-component': CreatorComponent,
    'explore-component': ExploreComponent,
    'shop-component': ShopComponent,
    'stats-component': StatsComponent
  },
  data() {
    return {
      character: {
        name: '',
        caste: '',
        gold: 50,
        hp: 100,
        strength: 0,
        agility: 0,
        luck: 0,
        mana: 0,
        inventory: [],
        created: false,
        exploring: false,
        shopping: false
      }
    }
  }
})

export default AppComponent;