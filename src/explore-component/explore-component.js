import Vue from 'vue';
import template from './explore-component-template.html';

const ExploreComponent = Vue.extend({
  template,
  props: ['character']
})

export default ExploreComponent;