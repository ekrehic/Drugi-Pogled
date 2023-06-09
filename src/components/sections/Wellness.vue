<template>
  <div id="wellness" class="section wellness">
    <div class="columns is-multiline is-vcentered">
      <div class="column is-12 p-b-0 has-text-right">
        <h2 class="has-wave-right">
          {{ $t(`wellness.title`) }}
          <span>
            <img class="wave" src="@/assets/images/wave-yellow.png" alt="Yellow river drina wave"/>
          </span>
        </h2>
      </div>
      <div class="column is-6 column--image">
        <img src="@/assets/images/RiverDrina_wellness-spa.png" alt="About River Drina"/>
      </div>
      <div class="column is-6 has-text-right column--text">
        <p v-html="$t(`wellness.text`)" class="p-b-25 has-text-weight-bold"></p>
        <p v-html="$t(`wellness.sauna`)" class="p-b-10 is-uppercase"></p>
        <p v-html="$t(`wellness.saunaText`)" class=""></p>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
class Wellness extends Vue {
}

export default Wellness;
</script>

<style lang="scss">
.wellness{
  background: #f4f0dd;

  .column--image {
    padding-right: 80px;

    @media screen and (max-width: 1316px) {
      padding-right: 40px;
    }

    @media screen and (max-width: 1024px) {
      padding-right: 20px;
    }

    @media screen and (max-width: 768px) {
      padding: 5px 20px;
    }

  }

  .column--text {
    padding-left: 80px;

    @media screen and (max-width: 1316px) {
      padding-left: 40px;
    }

    @media screen and (max-width: 1024px) {
      padding-left: 20px;
    }

    @media screen and (max-width: 768px) {
      padding: 5px 20px;
    }
  }
}
</style>
