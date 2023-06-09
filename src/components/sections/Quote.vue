<template>
  <div class="quote_wrapper">
    <div class="quote">
      <div class="section">
        <h3 class="has-wave-centered">
          <span v-html="$t(`quote`)" class="text"></span>
          <span>
            <img class="wave" src="@/assets/images/wave-yellow.png" alt="Yellow river drina wave"/>
          </span>
        </h3>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
class Quote extends Vue {
}

export default Quote;
</script>

<style lang="scss">
.quote_wrapper {
  background: #f4f0dd;
}

.quote {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background-image: url("images/wave-white-bg.png");
  background-size: cover;
  background-position: bottom center;
  padding: 20px 0;

  h3 {
    text-align: center;
    color: #4B778D;
    max-width: 800px;
    line-height: 62px;

    .text {
      padding-bottom: 15px;
    }

    @media (min-resolution: 108dpi) {
      line-height: 64px;
    }

    @media screen and (max-width: 1024px) {
      line-height: 58px;
    }

    @media screen and (max-width: 768px) {
      line-height: 52px;
    }

  }

}
</style>
