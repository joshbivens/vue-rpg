import Vue from 'vue';
import template from './stats-component-template.html';

const StatsComponent = Vue.extend({
  template,
  props: ['character'],
  data() {
    return {
      stats: false
    }
  },
  methods: {
    show() {
      this.stats = !this.stats;
    }
  }
})

export default StatsComponent;