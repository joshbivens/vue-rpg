import Vue from 'vue';
import template from './choice-component-template.html';
import ExploreComponent from './explore-component/explore-component';
import ShopComponent from './shop-component/shop-component';

const ChoiceComponent = Vue.extend({
  template,
  components: {
    'explore-component': ExploreComponent,
    'shop-component': ShopComponent
  },
  props: ['character'],
  data() {
    return {
      exploring: false,
      shopping: false
    }
  },
  methods: {
    explore() {
      this.exploring = true;
      this.shopping = false;
    },
    shop() {
      this.shopping = true;
      this.exploring = false;
    }
  }
});

export default ChoiceComponent;