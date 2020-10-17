<template>
  <section class="product spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-4">
          <div class="section-title">
            <h4>New product</h4>
          </div>
        </div>
        <div class="col-lg-8 col-md-8">
          <ul class="filter-controls">
            <!-- <li @click="isActive = 'addProduct'"  :class="{active: isActive == 'addProduct'}" data-filter=".addProduct">Add Product</li> -->
            <li @click="isActive = 'all'"  :class="{active: isActive == 'all'}" data-filter="*">All</li>
            <li @click="isActive = 'women'" :class="{active: isActive == 'women'}" data-filter=".women">Women’s</li>
            <li @click="isActive = 'kid'" :class="{active: isActive == 'kid'}" data-filter=".kid">Kid’s</li>
            <li @click="isActive = 'men'" :class="{active: isActive == 'men'}" data-filter=".men">Men’s</li>
            <li @click="isActive = 'accessories'" :class="{active: isActive == 'accessories'}" data-filter=".accessory">Accessories</li>
            <li @click="isActive = 'cosmetic'" :class="{active: isActive == 'cosmetic'}" data-filter=".cosmetic">Cosmetics</li>
          </ul>
        </div>
      </div>
      <div class="row property-gallery">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :data="product"
        ></ProductCard>
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from '../components/ProductCard'
import mixitup from 'mixitup'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    ProductCard
  },
  data () {
    return {
      isActive: 'all',
      containerEl: []
    }
  },
  created () {
    this.$store.dispatch('fetchProduct')
  },
  mounted () {
    this.containerEl = document.querySelector('.property-gallery')
    mixitup(this.containerEl)
  },
  watch: {
    products () {
      // console.log(containerEl, '<<<<<CONTAINER EL BOS>>>>>')
      this.containerEl = document.querySelector('.property-gallery')
      mixitup(this.containerEl)
    }
  },
  computed: {
    ...mapState(['products'])
  }
}
</script>

<style lang="css" scoped>
@import "../assets/styleSheet/style.css";
@import "../assets/styleSheet/bootstrap.min.css";
@import "../assets/styleSheet/elegant-icons.css";
@import "../assets/styleSheet/font-awesome.min.css";
</style>
