<template>
  <div class="location-features">
    <div class="section">
      <div class=" columns">
        <div class="column is-4 has-text-centered-mobile">
          <h3 class="m-b-30 has-wave-left">
            <span v-html="text" class="text"></span>
            <span>
            <img class="wave" src="@/assets/images/wave-yellow.png" alt="Yellow river drina wave"/>
          </span>
          </h3>

          <img src="@/assets/images/RiverDrina_pergola.png" alt="River Drina Pergola"/>
        </div>
      </div>
    </div>
    <div class="is-hidden-tablet location-image--mobile lh-0">
      <div class="fade"></div>
      <img src="@/assets/images/RiverDrina_location_bg-mobile.png" alt="River Drina Pergola"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, PropSync} from 'vue-property-decorator';

@Component
class LocationFeatures extends Vue {

  @PropSync('text', {required: true})

  created(){}

}

export default LocationFeatures;
</script>

<style lang="scss">
.location-features {
  //display: flex;
  //flex-direction: column;
  //justify-content: center;
  //align-items: center;
  background: #28B5B5;
  padding: 20px 0;
  background-image: url("images/RiverDrina_location_bg.png");
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 768px) {
    background-image: none;
    padding-bottom: 0;
  }

  h3 {
    color: #ffffff;
    max-width: 800px;
    line-height: 62px;

    .text {
      padding-bottom: 15px;
    }

    .wave {
      margin-top: 10px;

      @media screen and (max-width: 768px) {
        margin-top: 5px;
      }
    }

    @media (min-resolution: 108dpi) {
      line-height: 64px;
    }

    @media screen and (max-width: 1024px) {
      line-height: 58px;
    }

    @media screen and (max-width: 768px) {
      text-align: center;
      line-height: 52px;
    }
  }

  .location-image--mobile {
    position: relative;

    .fade {
      position: absolute;
      width: 100%;
      height: 40%;
      top: -5px;
      background: linear-gradient(180deg, #28B5B5 0%, #28B5B5 15%, transparent 100%);
    }
  }

}
</style>
