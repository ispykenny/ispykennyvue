<template>
  <div class="social">
    <div class="social__inner">
      <ul>
        <li>
          <a rel="noreferrer" target="_blank" href="https://instagram.com/ispykenny">
            <span class="social__link">Link to Instagram</span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokelinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </span>
          </a>
        </li>
        <li>
          <a rel="noreferrer" target="_blank" href="https://twitter.com/ispykenny">
            <span class="social__link">Link to Twitter</span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokelinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopNavSocial'
}
</script>

<style lang="scss">
.social {
  padding-top: 1em;

  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  h2 {
    margin: 0;
  }

  ul {
    display: flex;
    justify-content: flex-end;
    margin: 0; padding: 0;
    list-style-type: none;
    padding-top: 1em;
  }

  li {
    margin-left: 1.5em;

    &:first-of-type {
      margin-left: 0;
    }
  }

  a {
    color: #444;
    font-weight: 700;
    font-size: 12px;
  }
}

.dark .social a {
  color: white;
}

.social__link {
  @include sr-only();
}

@media(min-width: $bp-md) {
  .social {

    &__inner {
      flex-direction: row;
      align-items: center;
    }

    ul {
      padding-top: 0;
    }

  }
}
</style>