import Vue from 'vue';
import template from './stats-component-template.html';

const StatsComponent = Vue.extend({
  template,
  props: ['character']
})

export default StatsComponent;