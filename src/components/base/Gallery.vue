<template>
  <div class="gallery">
    <div class="columns is-multiline m-0 gallery__preview p-r-40 p-l-40 is-hidden-mobile">
      <div v-for="(image, i) in images" :key="`gallery-item-${i}`" class="column is-2">
        <div class="gallery__preview__item" :class="currentIndex === i ? 'is-active' : ''" @click="setCurrent(i)">
          <img :src="image" alt="Gallery Item"/>
        </div>
      </div>
    </div>
    <div class="gallery__main">
      <div class="gallery__main__nav gallery__main__nav--prev" @click="previousImage">
        <svg-icons icon="chevronLeft" :width="42" :height="42" stroke="currentColor"/>
      </div>
      <div class="gallery__main__current">
        <img :src="images[currentIndex]" alt="Gallery Item"/>
      </div>
      <div class="gallery__main__nav gallery__main__nav--next" @click="nextImage">
        <svg-icons icon="chevronRight" :width="42" :height="42"  stroke="currentColor"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, PropSync} from 'vue-property-decorator';

@Component
class Gallery extends Vue {
  @PropSync('images', {required: true})

  created() {

  }

  currentIndex = 0

  setCurrent(index) {
    this.currentIndex = index;
  }

  previousImage() {
    console.log(this.currentIndex);
    if(this.currentIndex > 0) {
      this.currentIndex = this.currentIndex - 1;
      return;
    }

    this.currentIndex = this.images.length-1;
  }

  nextImage() {
    if(this.currentIndex < this.images.length-1) {
      this.currentIndex = this.currentIndex + 1;
      return;
    }

    this.currentIndex = 0;
  }

}

export default Gallery;
</script>

<style lang="scss">
.gallery {
  .gallery__main {
    display: flex;
    align-items: center;
    justify-content: center;

    .gallery__main__nav {
      color: #28B5B5;

      &:hover {
        color: #8fd9a8;
      }
    }
  }

  .gallery__preview {
    .gallery__preview__item {
      cursor: pointer;
      height: 70px;
      overflow: hidden;

      &.is-active {
        border: 2px solid #F8B400;
      }
    }
  }

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */

}

</style>
