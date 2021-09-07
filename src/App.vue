<template>
  <TopNav/>
  <Hero 
    hascta=true
    hasAvatar=true
    :avatarSrc=image
    title="Hello, I'm Kenny Krosky. I'm a Software Engineer and UX Designer." 
    copy="I'm a Type 1 diabetic, family man (2 kids and 1 on the way), and a big time coffee sipper. I'm passionate about all things Front-end, specifically JavaScript, CSS, and API related. Currently employed by Adobe, leading and maintaining the Creative Cloud growth web domain."
    ctaLink="/contact"
    ctaText="Let's Connect"
  />
  <Products/>
</template>

<script>
import TopNav from '@/components/Nav/TopNav.vue'
import Hero from '@/components/Hero.vue'
import image from '@/assets/me.jpg'
import Products from './components/Products.vue'
import { mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    TopNav,
    Hero,
    Products
  },
  data() {
    return {
      image: image
    }
  },
  methods: {
    ...mapActions(['setProducts'])
  },
  mounted()  {
    this.setProducts();
  },
}
</script>

<style lang="scss">

</style>
