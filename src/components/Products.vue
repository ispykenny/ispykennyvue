<template>
  <div class="inner product">
    <div class="product__card" 
      v-for="product in myProducts.items" 
      :key="product.id">
        <div className="product__content">
          <div className="product__content__inner">
            <h3>{{product.fields.title}}</h3>
            <div v-html="formatData(product.fields.description)"></div>
          </div>
        </div>
      <div className="product__image">
        <div className="lazy" >
            <img 
              :src=product.fields.thumbnail.fields.file.url
              alt="thumbnail of {{{product.title}}}"
            />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export default {
  name: "Products",
  methods: {
    formatData(content) {
      return documentToHtmlString(content)
    }
  },
  computed: {
    myProducts() {
      return this.$store.getters.getProducts
    }
  }
}
</script>

<style lang="scss">
.product {
  flex-wrap: wrap;
  padding-bottom: 3em;

  p {
    font-size: 0.87em;
  }

  &__card {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 3em;
    justify-content: space-between;

    &:first-of-type {
      padding-top: 0em;
    }
  }

  img {
    width: 100%;
    overflow: hidden;
    border-radius: 15px;
    box-shadow: 0px 0px 60px rgba(black, 0.051);
  }

  a {
    margin-top: 2em;
    font-size: 14px;
  }
}


  @media(min-width: $bp-md) {
    .product {
      display: grid;
      grid-template-columns: 1fr 1fr;

      &__card {
        width: 90%;
        margin-bottom: 4em;
      }
    }
  }


  @media(min-width: $bp-xl) {
    .product {
      display: grid;
      grid-template-columns: 1fr;

      &__card {
        width: 100%;
        flex-direction: row;
        padding: 3em 0em;
        margin-bottom: 0em;
        justify-content: space-between;
        border-bottom: 1px solid #ddd;

        &:last-of-type {
          border-bottom: none;
        }

        > div {
          width: 43%;
  
          &:last-of-type {
            width: 52%;
          }
        }
      }
    }
  }
</style>