import Vue from 'vue'
import routes from './src/routes'

var App = require('./src/index.vue')
// App.el = '#root'
// new Vue(App)


// Routing
const app = new Vue({
  el: '#root',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent: function() {
      const matchingView = (routes[this.currentRoute] === '/') ? App : routes[this.currentRoute]
      return matchingView
        ? require('./src/views/' + matchingView + '.vue')
        : require('./src/views/404.vue')
    }
  },
  render: function(h) {
    return h(this.ViewComponent)
  }
}).$mount(App)

window.addEventListener('popstate', function() {
  app.currentRoute = window.location.pathname
})