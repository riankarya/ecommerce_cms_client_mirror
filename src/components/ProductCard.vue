<template>
  <div class="col-lg-3 col-md-4 col-sm-6 mix" :class="data.category">
    <div class="product-item">
      <div
        class="product-item-pic set-bg"
        data-setbg="https://blognumbers.files.wordpress.com/2010/09/9.jpg" :style="{ backgroundImage: `url(${data.image_url})` }"
      >
        <ul class="product-hover">
          <li>
            <a @click="deleteProduct"><span class="icon_close"></span></a>
          </li>
          <li>
            <a @click="editProduct"><span class="icon_pencil-edit"></span></a>
          </li>
        </ul>
      </div>
      <div class="product-item-text">
        <h6><a href="#">{{ data.name }}</a></h6>
        <div class="rating">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </div>
        <div class="product-price">$ 59.0</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'productCard',
  props: {
    data: Object
  },
  methods: {
    deleteProduct () {
      this.$store.dispatch('deleteProduct', this.data.id)
        .then(data => {
          this.$store.dispatch('fetchProduct')
        })
        .catch(err => {
          console.log(err)
        })
    },
    editProduct () {
      this.$store.dispatch('fetchProductById', this.data)
        .then(data => {
          this.$router.push('/editproduct')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
@import "../assets/styleSheet/style.css";
@import "../assets/styleSheet/bootstrap.min.css";
@import "../assets/styleSheet/elegant-icons.css";
@import "../assets/styleSheet/font-awesome.min.css";
</style>
