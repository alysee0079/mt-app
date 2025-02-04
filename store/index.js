import Vue from 'vue'
import Vuex from 'vuex'
import geo from './modules/geo'
import home from './modules/home'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    geo,
    home
  },
  actions: {
    async nuxtServerInit({
      commit
    }, { req, app }) {
      const { status, data: { province, city } } = await app.$axios.get('/geo/getPosition')
      commit('geo/setPosition', status === 200 ? { city, province } : { city: '', province: '' })
      console.log(city)
      const { status: status2, data: { menu } } = await app.$axios.get('geo/menu')
      commit('home/setMenu', status === 200 ? menu : [])
      const { status: status3, data: { result } } = await app.$axios.get('/search/hotPlace', {
        params: {
          city: app.store.state.geo.position.city.replace('市', '')
        }
      })
      commit('home/setHotPlace', status3 === 200 ? result : [])
      console.log(result)
    }
  }
})

export default store
