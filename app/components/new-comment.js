import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    saveComment() {
      var params = {
        author: this.get('author') ? this.get('author') : "Jesse Doe",
        date: this.get('date') ? this.get('date') : "N/A",
        content: this.get('content') ? this.get('content') : "N/A",
        post: this.get('post')
      };
      this.set('addNewComment', false);
      this.sendAction('saveComment', params);
    }
  }
});
