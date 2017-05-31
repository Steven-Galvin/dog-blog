import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    savePost() {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        date: this.get('date') ? this.get('date') : "",
        image: this.get('image') ? this.get('image') : "get default image",
        body: this.get('body') ? this.get('body') : "",
      };
      this.set('addNewPost', false);
      this.sendAction('savePost', params);
    }
  }
});
