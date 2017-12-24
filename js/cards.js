/*global Vue*/
var cards_dashboard = new Vue({
  el: '#cards_dashboard',
  components: {
    taskcard: {
      template: '#taskcard-template'
    },
      card: {
      image: 'https://source.unsplash.com/random/800x600',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu',
      username_status: ['online', 'offline'],
      username: 'userName',
      
      rating: {
        counter: '5.0',
        quantity: 260
      },
      price: 'от 500 '
    }},
    data: function() {
  return {
    active: false
    
    }
    
  },
  methods: {
      open: function() {
          this.active = true
      },
      close: function() {
          this.active = false
      },
      onCancel: function() {
          this.close();
      },
      onConfirm: function() {
          this.close();
      }
  }
});