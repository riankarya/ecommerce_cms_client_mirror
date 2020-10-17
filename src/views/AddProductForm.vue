<template>
  <div class="login col-md-4 mix addProduct">
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100">
          <form @submit.prevent="addProduct" class="login100-form validate-form">
            <span class="login100-form-title"> Add Product </span>

            <div
              class="wrap-input100 validate-input"
              data-validate="Enter name"
            >
              <input v-model="name" :class="{'has-val': name.length}" class="input100" type="text" name="name" />
              <span class="focus-input100" data-placeholder="Name"></span>
            </div>

            <div
              class="wrap-input100 validate-input"
              data-validate="Enter image_url"
            >
              <input v-model="image_url" :class="{'has-val': image_url.length}" class="input100" type="text" name="image_url" />
              <span class="focus-input100" data-placeholder="Image URL"></span>
            </div>

            <div
              class="wrap-input100 validate-input"
              data-validate="Enter price"
            >
              <input v-model="price" :class="{'has-val': price}" class="input100" type="number" name="price" />
              <span class="focus-input100" data-placeholder="Price"></span>
            </div>

            <div
              class="wrap-input100 validate-input"
              data-validate="Enter stock"
            >
              <input v-model="stock" :class="{'has-val': stock}" class="input100" type="number" name="stock" />
              <span class="focus-input100" data-placeholder="Stock"></span>
            </div>

            <div
              class="wrap-input100 validate-input"
              data-validate="Enter category"
            >
              <select style="border: none" v-model="category" :class="{'has-val': category.length}" class="input100">
                <option class="option" value="women">Women</option>
                <option value="kid">Kid</option>
                <option value="men">Men</option>
                <option value="accessory">Accessory</option>
                <option value="cosmetic">Cosmetic</option>
              </select>
              <span class="focus-input100" data-placeholder="Category"></span>
            </div>

            <div class="container-login100-form-btn">
              <button class="login100-form-btn">Add Product</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      name: '',
      image_url: '',
      price: null,
      stock: null,
      category: ''
    }
  },
  methods: {
    addProduct () {
      this.$store.dispatch('addProduct', {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock,
        category: this.category
      })
        .then(data => {
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="css" scoped>
  @import '../assets/styleSheet/login.css';
  @import '../assets/styleSheet/bootstrap.min.css';
</style>
