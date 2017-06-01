import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },

  actions: {
    destroyPost(post) {
      post.destroyRecord();
      this.transitionTo('index');
    },

    updatePost(post) {
      post.save();
      this.transitionTo('index');
    },

    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var post = params.post;
      post.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return post.save();
      });
      this.transitionTo('post', post);
    },

    updateComment(comment) {
      comment.save();
      this.transitionTo('post', post);
    }
  }
});
