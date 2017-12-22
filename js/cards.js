var cards_dashboard = new Vue({
  el: '#cards_dashboard',
  data: {
    card: {
      image: 'https://source.unsplash.com/random/800x600',
      username_status: ['online', 'offline'],
      username: 'userName',
      price: 'от 500 '
    }
  }
})