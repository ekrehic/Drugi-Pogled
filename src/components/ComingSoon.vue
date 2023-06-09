<template>
  <div class="coming-soon">
    <img alt="River Drina" src="@/assets/images/RiverDrina_logo.png"/>
    <h1>
      Coming soon
    </h1>
  </div>
</template>

<script>
export default {
  name: 'ComingSoon',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.coming-soon {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 80vh;

  @media screen and (max-width: 1024px)  {
    justify-content: center;
  }

  img {
    width: 500px;
    max-width: 100%;
  }

  h1 {
    text-align: center;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 5px;
    background: -webkit-linear-gradient(45deg, #8FD9A8 0%, #28B5B5 50%, #4B778D 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
