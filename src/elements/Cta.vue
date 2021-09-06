<template>
  <a class="cta" href="/letstalk"><span>{{ctaText}}</span></a>
</template>

<script>
export default {
  name: "Cta",
  props: ["link", "ctaText"]
}
</script>

<style>
.cta {
  color: white;
  padding: 0.7em 2em 0.9em 2em;
  display: inline-block;
  text-decoration: none;
  font-weight: 800;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  font-size: 15px;
  background: linear-gradient(
      to right,
      #f368e0, 
      #5f27cd
    ) !important;


  span {
    position: relative;
    z-index: 5;
  }

  &:hover {
    background: linear-gradient(
      to left,
      darken(#5f27cd, 10%), 
      darken(#f368e0, 10%)    
    ) !important;
  }
}

</style>