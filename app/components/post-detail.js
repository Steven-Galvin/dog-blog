import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deletePost(post) {
      if(confirm('Are you sure your want to delete this blog post?')) {
        this.sendAction('destroyPost', post);
      }
    },

    updatePost(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!== undefined) {
          post.set(key,params[key]);
        }
      });
      this.sendAction('updatePost', post);
    },

    saveComment(params) {
      this.sendAction('saveComment', params)
    },

    updateComment(comment, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!== undefined) {
          comment.set(key,params[key]);
        }
      });
      this.sendAction('updateComment', comment)
    },

    deleteComment(comment) {
      if (confirm('Are you sure you want to delete this comment?')) {
        this.sendAction('destroyComment', comment);
      }
    }
  }
});
