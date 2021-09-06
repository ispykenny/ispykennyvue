<template>
  <div class="inner">
    <TopNavSocial/>
  </div>
  <header>
    <div class="inner nav-parent">
      <div class="nav">
        <div class="nav__element"><a class="nav__logo" href="/">Kenny Krosky</a></div>
        <div class="nav__element">
          <nav>
            <ul>
              <li><a href="https://www.behance.net/kennykrosky" target="_blank" rel="noreferrer">Behance</a></li>
              <li>
                <a class="cta" href="https://github.com/ispykenny" target="_blank" rel="noreferrer">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
                      <path
                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                      ></path>
                    </svg>
                  </span>
                  <span>Github</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <div class="nav-stack"></div>
</template>

<script>
import TopNavSocial from '../Nav/TopNavSocial.vue'
export default {
  name: 'TopNav',
  components: {
    TopNavSocial
  }
}
</script>

<style lang="scss">

.nav-parent {
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
  border-radius: 16px;
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    bottom: 0; left: 0;
    width: 100%;
    height: 3px;
  }

  @media(min-width: $bp-md) {
    box-shadow: 0px 0px 140px rgba(#5f27cd, 0.3);
  }
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  &__element {
    width: 100%;
  }

  &__logo {
    font-size: 14px;
    font-weight: 600;
    color: $primaryColor;
    text-decoration: none;
  }

  @media(min-width: $bp-md) {
    padding: 1em 2em;
  }
  
}


nav ul {
  display: flex;
  justify-content: center;
  margin: 0; padding: 0;
  list-style-type: none;
  align-items: center;

  li {
    margin: 0 0.5em;
    a {
      text-decoration: none;
      color: $primaryColor;
      font-weight: 800;
      font-size: 12px;
    }

    &:first-of-type {
      a {
        position: relative;

        &:hover {
          color: darken($primaryColor, 4%);
        }

        &:after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 100%;
          height: 2px;
          background-color: $primaryColor;
        }
      }
    }
  }
}

nav .cta {
  padding: 0.4em 1.4em;
  margin-left: 4px;
  font-size: 12px;
}

.cta {
  display: inline-block;
  padding: 1em 3em;
  background: $primaryColor !important;
  color: $secondaryColor;
  display: flex;
  align-items: center;
  border-radius: 10px;
  font-weight: 800;
  transition: background 300ms ease;

  &:hover {
    background: darken($primaryColor, 4%);
  }

  svg {
    position: relative;
    top: 2px;
    width: 16px;
  }

  span:first-of-type {
    margin-right: 10px
  }
}

.nav .cta {
  display: flex !important;
}

@media(min-width: 540px) {
  .nav-parent {
    display: flex;
    justify-content: space-between;
  }
  
  .nav {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;

    &__element {
      text-align: left;
    }

    &__logo {
      font-size: 16px;
    }
  }

  nav ul {
    justify-content: flex-end;

    li {
      margin: 0 0 0 2em;

      &:first-of-type {
        margin-left: 0;
      }

      a {
        font-size: 15px;
      }
    }
  }
  nav .cta {
    padding: 0.6em 2em;
    margin-left: 4px;
    font-size: 15px;
  }
  
}




</style>