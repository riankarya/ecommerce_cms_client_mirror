import Axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: {},
    isLoggedIn: false
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    setProduct (state, payload) {
      state.product = payload
    },
    updateName (state, payload) {
      state.product.name = payload
    },
    updateImageUrl (state, payload) {
      state.product.image_url = payload
    },
    updatePrice (state, payload) {
      state.product.price = payload
    },
    updateStock (state, payload) {
      state.product.stock = payload
    },
    updateCategory (state, payload) {
      state.product.category = payload
    },
    setIsLoggedIn (state, payload) {
      state.isLoggedIn = payload
    }
  },
  actions: {
    login (context, payload) {
      return new Promise((resolve, reject) => {
        Axios({
          url: 'http://localhost:3000/users/login',
          method: 'post',
          data: payload
        })
          .then(data => {
            localStorage.setItem('token', data.data.token)
            localStorage.setItem('id', data.data.id)
            context.commit('setIsLoggedIn', true)
            resolve(data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    register (context, payload) {
      console.log('<<<<ASUP TI STATE>>>>', payload)
      return new Promise((resolve, reject) => {
        Axios({
          url: 'http://localhost:3000/users/register',
          method: 'post',
          data: payload
        })
          .then(data => {
            resolve(data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    addProduct (context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        Axios({
          url: 'http://localhost:3000/products/addProduct',
          method: 'post',
          headers: { token: localStorage.token },
          data: payload
        })
          .then(data => {
            resolve(data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    fetchProduct (context, payload) {
      return new Promise((resolve, reject) => {
        Axios({
          url: 'http://localhost:3000/products',
          method: 'get'
        })
          .then(data => {
            console.log(data.data.data)
            data = data.data.data.map(elem => {
              return {
                id: elem.id,
                name: elem.name,
                image_url: elem.image_url,
                price: elem.price,
                stock: elem.stock,
                category: elem.category
              }
            })
            console.log('<<<<ASUP TI FETCHPRODUCT VUE>>>>', data)
            context.commit('setProducts', data)
            resolve(data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    deleteProduct (context, payload) {
      return new Promise((resolve, reject) => {
        Axios({
          url: `http://localhost:3000/products/${payload}`,
          method: 'delete',
          headers: { token: localStorage.token }
        })
          .then(data => {
            console.log(data)
            resolve(data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    fetchProductById (context, payload) {
      return new Promise((resolve, reject) => {
        Axios({
          url: `http://localhost:3000/products/${payload.id}`,
          method: 'get',
          headers: { token: localStorage.token }
        })
          .then(data => {
            data = {
              id: data.data.data.id,
              name: data.data.data.name,
              image_url: data.data.data.image_url,
              price: data.data.data.price,
              stock: data.data.data.stock,
              category: data.data.data.category
            }
            context.commit('setProduct', data)
            console.log(this.state.product)
            resolve(data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    editProduct (context, payload) {
      return new Promise((resolve, reject) => {
        Axios({
          url: `http://localhost:3000/products/${this.state.product.id}`,
          method: 'put',
          headers: { token: localStorage.token },
          data: payload
        })
          .then(data => {
            resolve(data)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
    // logout (context, payload) {
    //   return new Promise((resolve, reject) => {
    //     localStorage.clear()
    //       .then(data => {
    //         context.commit('setIsLoggedIn', false)
    //         resolve(data)
    //       })
    //       .catch(err => {
    //         reject(err)
    //       })
    //   })
    // }
  },
  modules: {
  }
})
