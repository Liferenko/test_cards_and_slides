var cards_dashboard = new Vue({
  el: '#cards_dashboard',
  data: {
    card: {
      image: 'https://source.unsplash.com/random/800x600',
      username_status: ['online', 'offline'],
      username: 'userName',
      
      rating: {
        counter: 5.0,
        quantity: 3301
      },
      price: 'от 500 '
    }
  }
})