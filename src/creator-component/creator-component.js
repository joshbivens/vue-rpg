import Vue from 'vue';
import template from './creator-component-template.html';

const CreatorComponent = Vue.extend({
  template,
  data() {
    return {
      characterName: '',
      caste: '',
      created: false
    }
  },
  methods: {
    create() {
      this.created = true;
    }
  }
});

export default CreatorComponent;