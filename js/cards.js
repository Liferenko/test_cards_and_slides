/*global Vue*/
var cards_dashboard = new Vue({
  el: '#cards_dashboard',
  components: {
    taskcard: {
      template: '#taskcard-template',
      data: function() {
        return {
          active: false,
          card: {
            image: 'https://source.unsplash.com/random/800x600?count=30',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturi',
            username_status: ['online', 'offline'],
            username: 'userName',
            rating: {
              counter: '5.0',
              quantity: 260
            },
            price: 'от 500 '
          }}},
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
      
    },
      },
    data: function() {
      return {
        active: false
        
      }
    
  }

});