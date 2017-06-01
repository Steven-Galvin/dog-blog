import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deletePost(post) {
      if(confirm('Are you sure your want to delete this blog post?')) {
        this.sendAction('destroyPost', post);
      }
    }
  }
});
