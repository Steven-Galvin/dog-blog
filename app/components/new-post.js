import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    savePost() {
      var params = {
        title: this.get('title') ? this.get('title') : "New Post",
        date: this.get('date') ? this.get('date') : "N/A",
        image: this.get('image') ? this.get('image') : "https://vetstreet.brightspotcdn.com/dims4/default/ff29db9/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fe1%2F36d0f0a8c311e0a0d50050568d634f%2Ffile%2FGoldendoodle-2-645mk070111.jpg",
        body: this.get('body') ? this.get('body') : "How can you have a blog post with no body?",
      };
      this.sendAction('savePost', params);
    }
  }
});
