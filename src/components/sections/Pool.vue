<template>
  <div id="pool" class="pool__wrapper">
    <div class="section pool">
      <div class="columns is-multiline">
        <div class="column is-12 column__title has-text-centered-touch">
          <h2>
            {{ $t(`pool.title`) }}
            <span>
              <img class="wave" src="@/assets/images/wave-yellow.png" alt="Yellow river drina wave"/>
            </span>
          </h2>
        </div>
        <div class="column is-12-tablet is-6-desktop  column__text">
          <p v-html="$t(`pool.text`)"></p>
        </div>
        <div class="column is-12-tablet is-6-desktop  column__image">
          <img src="@/assets/images/pool/pool_cover.png" alt="About River Drina" class="is-hidden-touch"/>
        </div>
      </div>
      <div class=" button is-yellow-shape pool__gallery-cta" :content="$t(`gallery`)" @click="modals.gallery = true">

        <img src="@/assets/images/gallery_icon.png" alt="Pool Gallery"/>
      </div>
    </div>
    <div class="pool__img--touch lh-0">
      <img src="@/assets/images/pool/pool_mobile.png" alt="About River Drina" class="is-hidden-desktop"/>
      <div class="pool__img--touch__overlay">

      </div>
    </div>

    <b-modal v-model="modals.gallery" custom-class="is-large-mobile">
      <div class="modal__body">
        <div class="is-flex is-justify-content-center is-align-items-center p-b-20">
          <gallery :images="galleryImages"/>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Gallery from "@/components/base/Gallery.vue";

@Component({
  components: {
    Gallery,
  }
})
class Pool extends Vue {
  modals = {
    gallery: false,
  };

  get galleryImages() {
    return [
      require('@/assets/images/gallery/pool/1.jpg'),
      require('@/assets/images/gallery/pool/2.jpg'),
      require('@/assets/images/gallery/pool/3.jpg'),
    ]
  }
}

export default Pool;
</script>

<style lang="scss">
.pool__wrapper {
  background: #2ca9f9;

  .pool {
    min-height: 46.5vw;
    position: relative;

    @media screen and (max-width: 1024px) {
      min-height: unset;
    }

    @media screen and (min-width: 1920px) {
      min-height: 40vw;
      overflow: hidden;
    }

    @media screen and (min-width: 2250px) {
      min-height: 32vw;
      overflow: hidden;
    }

    .columns {
      height: 100%;
      min-height: 35vw;

      @media screen and (min-width: 1920px) {
        min-height: 32vw;
        overflow: hidden;
      }

      @media screen and (min-width: 2250px) {
        min-height: 30vw;
        overflow: hidden;
      }

      @media screen and (max-width: 1024px) {
        min-height: unset;
      }

      .column__title,
      .column__text {
        position: relative;
        z-index: 2;
      }

      .column__text {
        padding-right: 80px;

        @media screen and (max-width: 1024px) {
          padding: 5px 20px;
        }

        @media screen and (max-width: 768px) {
          padding: 5px 20px;
        }
      }

      .column__image {
        img {
          position: absolute;
          bottom: 0;
          right: 0;
          z-index: 1;
        }
      }
    }

    h2, p {
      color: #ffffff;
    }
  }

  .pool__img--touch {
    position: relative;

    img {
      width: 100%;
    }

    .pool__img--touch__overlay {
      position: absolute;
      width: 100%;
      height: 40%;
      top: -5px;
      background: linear-gradient(180deg, #2ca9f9 0%, #2ca9f9 15%, transparent 100%);
    }
  }

  .pool__gallery-cta {
    cursor: pointer;
    transition: transform 400ms ease;
    position: absolute;
    z-index: 2;
    max-width: 100px;

    @media screen and (max-width: 1024px) {
      right: 25px;
    }

    img {
      max-width: 60%;

      @media screen and (max-width: 768px) {
        max-width: 65%;
      }
    }

    &:hover {
      transform: scale(1.1);
    }

    &:after {
      content: attr(content);
      display: block;
      text-transform: uppercase;
      position: absolute;
      top: calc(100% + 5px);
      font-size: 12px;
      color: #ffffff;
      font-weight: 600;

      @media screen and (max-width: 768px) {
        display: none;
      }
    }
  }
}
</style>
