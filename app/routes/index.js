import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      comments: this.store.findAll('comment')
    });
  },

  actions: {
    savePost(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    },

    updatePost(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!== undefined) {
          post.set(key,params[key]);
        }
      });
      post.save();
      this.transitionTo('index');
    },

    // deletePost(post) {
    //   if(confirm('Are you sure your want to delete this blog post?')) {
    //     post.destroyRecord();
    //     this.transitionTo('index');
    //   }
    // }
  }
});
