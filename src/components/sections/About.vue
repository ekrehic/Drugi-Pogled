<template>
  <div id="about" class="section about">
    <div class="columns is-multiline is-vcentered">
      <div class="column is-12 p-b-0">
        <h2 class="has-wave-right">
          {{ $t(`about.title`) }}
          <span>
            <img class="wave" src="@/assets/images/wave-yellow.png" alt="Yellow river drina wave"/>
          </span>
        </h2>
      </div>
      <div class="column is-6 column--image">
        <img src="@/assets/images/RiverDrina_about-us.png" alt="About River Drina"/>
      </div>
      <div class="column is-6 column--text">
        <p v-html="$t(`about.p1`)" class="p-b-15"></p>
        <p v-html="$t(`about.p2`)" class="p-b-15"></p>
        <p v-html="$t(`about.p3`)" class="p-b-15"></p>
        <p v-html="$t(`about.p4`)" class="p-b-15"></p>
        <p v-html="$t(`about.p5`)" class="p-b-15"></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
class About extends Vue {
}

export default About;
</script>

<style lang="scss">
.about {
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

    @media screen and (min-width: 769px) {
      padding-top: 0;
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

    @media screen and (min-width: 769px) {
      padding-top: 0;
    }

  }
}
</style>
