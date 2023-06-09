<template>
  <div id="location" class="location">
    <div class="columns is-multiline m-0">
      <div class="column is-12-tablet is-6-desktop column--map p-0 lh-0">
        <a href="https://goo.gl/maps/hjTLtGcn31tg8drWA" target="_blank">
          <img src="@/assets/images/RiverDrina_map.png" alt="map" class="is-hidden-touch">
          <img src="@/assets/images/RiverDrina_map-mobile.png" alt="map" class="is-hidden-desktop">
        </a>
      </div>
      <div class="column is-12-tablet is-6-desktop has-text-right-desktop has-text-centered-touch column--location">
        <div class="location-info">
          <img src="@/assets/images/RiverDrina_green-shape.png" alt="map" class="location-info__img">
          <div class="location-info__txt">
            <h2 class="has-wave-right">
              <span v-html="$t(`location.title`)"></span>
              <span>
            <img class="wave" src="@/assets/images/wave-yellow.png" alt="Yellow river drina wave"/>
          </span>
            </h2>
            <div class="location-info__p-wrapper">
              <p v-html="$t(`location.text`)"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
class Location extends Vue {
}

export default Location;
</script>

<style lang="scss">
.location {
  >.columns {
    @media screen and (max-width: 1024px) {
      display: flex;
      flex-direction: column-reverse;
    }
  }

  .column--map {
    img {
      width: 100%;
    }
  }

  .column--location {
    background-image: url("images/RiverDrina_location.png");
    background-size: cover;
    background-position: center;
    padding-right: 250px;
    padding-left: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1600px) {
      padding-right: 160px;
    }

    @media screen and (max-width: 1412px) {
      padding-right: 120px;
    }

    @media screen and (max-width: 1024px) {
      padding: 50px;
    }


    .location-info {
      position: relative;

      @media screen and (max-width: 1024px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }

      .location-info__img {
        max-width: calc(100% + 40px);

        @media screen and (max-width: 1024px) {
          max-width: 80%;
        }

        @media screen and (max-width: 768px) {
          max-width: 100%;
        }

        @media screen and (max-width: 700px) {
          display: none;
        }
      }

      .location-info__txt {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: -20px;

        @media (min-resolution: 108dpi) {
          top: -40px;
        }

        @media screen and (max-width: 1024px) {
          top: 10px;
        }

        @media screen and (max-width: 700px) {
          position: relative;
          background: rgba(40, 181, 181, 0.5);
          border-radius: 8px;
          padding: 20px;
        }

        h2, p {
          color: #fff;
          margin-bottom: 0;
        }

        h2 {
          @media screen and (max-width: 1024px) {
            font-size: 42px;
            text-align: center;
            display: inline-flex;
            flex-direction: column;
            align-items: center;
          }
        }

        p{
          @media screen and (max-width: 700px) {
            padding-top: 25px;
          }
        }
      }

      .location-info__p-wrapper {
        height: 80%;
        display: flex;
        padding: 0 20px 0 60px;
        justify-content: center;
        align-items: center;

        @media screen and (max-width: 1024px) {
          padding: 0 150px;
          text-align: center;
        }

        @media screen and (max-width: 768px) {
          padding: 0 80px;
        }

        @media screen and (max-width: 700px) {
          padding: 0;
        }
      }
    }
  }
}
</style>
