import Vue from 'vue'
import Vuex from 'vuex'
{{#feathersVuex}}
import client from '@/api/client'
import feathersVuex from 'feathers-vuex'
{{/feathersVuex}}

Vue.use(Vuex)

{{#feathersVuex}}
const { service, auth } = feathersVuex(client, { idField: 'id' })

export default new Vuex.Store({
  plugins: [
    service('users'),

    // service('serviceName', {
    //   // custom service options
    //   idField: '_id', // The field in each record that will contain the id
    //   nameStyle: 'path', // Use the full service path as the Vuex module name, instead of just the last section
    //   namespace: 'custom-namespace', // Customize the Vuex module name.  Overrides nameStyle.
    //   autoRemove: true, // automatically remove records missing from responses (only use with feathers-rest)
    //   enableEvents: false // turn off socket event listeners. It's true by default

    //   // custom state, getters, mutations, actions
    //   state: {},
    //   getters: {},
    //   mutations: {},
    //   actions: {}
    // })

    auth({
      userService: 'users'
    })
  ]
})
{{else}}
export default new Vuex.Store({
  //
})
{{/feathersVuex}}
