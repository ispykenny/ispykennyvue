<template>
  <div class="hero">
    <div class="inner">
      <div class="hero-area">
        <div class="hero_flex">
          <div class="avatar" :style="{'background-image': `url(${avatarSrc})`}"></div>
          <div>
            <div>
              <h1>{{title}}</h1>
              <h2> {{ $store.state.counter }} </h2>
              <p>
                {{copy}}
              </p>
            </div>
            <div v-if="hascta === `true`">
                <Cta link="ctaLink" ctaText="👋 Let's Connect"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cta from '../elements/Cta.vue'
export default {
  name: "Hero",
  components: {
    Cta
  },
  props: {
    title: String,
    copy: String,
    hascta: String,
    ctaLink: String,
    ctaText: String,
    hasAvatar: String,
    avatarSrc: String
  }
}
</script>

<style lang="scss">

.avatar {
  height: 60px;
  min-width: 60px;
  width: 60px;
  display: block;
  border-radius: 100%;
  background-size: cover;
  background-position: center;
  margin-bottom: 30px;
  position: relative;

  &:before {
    content: '';
    background: linear-gradient(
      to right,
      #f368e0, 
      #5f27cd
    );
    position: absolute;
    z-index: -1;
    left: 50%; top: 50%;
    transform: translate(-50%, -50%);
    height: 120%; width: 120%;
    border-radius: 100%;
    box-shadow: 0px 0px 40px rgba(black, 0.3);
  }
}

@media(min-width: $bp-md) {
  .avatar {
    top: 8px;
  }
}


.content-area {
  padding: 4em 0em;
  max-width: 1000px;

  h1 {
    font-weight: 800;
    font-size: 1.6em;
  }

  p {
    margin-top: 1.4em;
    font-size: 1em;
    color: $primaryColor;

    a {
      color: $primaryColor;
    }

    @media(min-width: $bp-md) {
      font-size: 1.2em;
    }
  }


  img {
    max-width: 100%;
    height: auto;
  }


  figure {
    margin: 0;
  }
}

.blogs .content-area {
  padding: 4em 0em 2em 0em;

  p {
    margin-top: 1em;
  }
}

#js-text {
  transition: $themeTransition;
}


@media(min-width: $bp-sm) {
  .content-area {
    padding: 2em 0em 4em 0em;

    h1 {
      font-size: 2em;
    }
  }
}

@media(min-width: $bp-md) {
  .content-area {

    h1 {
      font-size: 2.6em;
      margin-top: 0;
    }
  }

  .hero_flex {
    display: flex;
    justify-content: space-between;

    > div:last-child {
      max-width: 85%;
    }
  }
}

@media(min-width: $bp-lg) {
  .content-area {

    h1 {
      font-size: 3em;
    }
  }
}
.hero-area {
  padding: 2em 0em;
  max-width: 900px;

  h1 {
    font-weight: 800;
    font-size: 1.6em;
    line-height: 1.4;
    margin-bottom: 0.3em;
  }

  p {
    font-size: 16px;
    margin-bottom: 2em;
    color: $primaryColor;

    a {
      color: $primaryColor;
    }

    @media(min-width: $bp-md) {
      font-size: 1.2em;
    }
  }
}


#js-text {
  transition: $themeTransition;
}

@media(min-width: $bp-sm) {
  .hero-area {
    padding: 4em 0em 4em 0em;

    h1 {
      font-size: 2em;
    }
  }
}

@media(min-width: $bp-md) {
  .hero-area {

    h1 {
      font-size: 2.6em;
      margin-top: 0;
      line-height: 1.3;
    }

    p {
      font-size: 17px;
    }
  }

  .hero_flex {
    display: flex;
    justify-content: space-between;

    > div:last-child {
      max-width: 88%;
    }
  }
}

@media(min-width: $bp-lg) {
  .hero-area {

    h1 {
      font-size: 2.4em;
    }

    p {
      font-size: 18px;
    }
  }
}

</style>