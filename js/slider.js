/*global Vue*/

var slide_dashboard = new Vue({
  el: '#slide_dashboard',
  components: {
    slidecard: {
      template: '#slide-template',
      data: function() {
        return {
          active: false,
          slide: {
            image: 'https://source.unsplash.com/random/800x600?count=11',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu',
            username_status: ['online', 'offline'],
            username: 'userName',
            rating: {
              counter: '5.0',
              quantity: 260
            },
            price: 'от 500 '
          }}}
    },
},

})

