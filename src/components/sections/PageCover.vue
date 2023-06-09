<template>
    <div class="cover">
      <div class="cover__bg"></div>
      <div class="cover__content section">
        <img class="logo" src="@/assets/images/RiverDrina_text.png" alt="RIVER DRINA"/>
        <img class="wave" src="@/assets/images/wave-yellow.png" alt="Yellow river drina wave"/>
        <h1 v-html="$t(`cover.text`)"></h1>
        <button class="button is-large is-green" @click="modals.contact = true">
          {{ $t(`cover.cta`) }}
        </button>
      </div>
      <div class="waves-animation"></div>
      <b-modal v-model="modals.contact">
        <div class="modal__body">
          <div class="is-flex is-justify-content-center is-align-items-center p-b-20">
            <img class="wave" src="@/assets/images/wave-green.png" alt="Green river drina wave"/>
          </div>
          <contact-form/>
        </div>
      </b-modal>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import ContactForm from "@/components/forms/ContactForm.vue";

@Component({
  components: {
    ContactForm,
  }
})class PageCover extends Vue {
  modals = {
    contact: false,
  }
}

export default PageCover;
</script>

<style lang="scss">
.cover {
  position: relative;
  height: calc(100vh - 80px);

  .cover__bg {
    position: absolute;
    width: 100%;
    height: calc(100vh - 80px);
    background-image: url("images/River_Drina-cover.png");
    background-size: cover;
    background-position: center;

    @media screen and (max-width: 1024px) {
      height: calc(100vh - 56px);
    }

  }

  @media screen and (max-width: 1024px) {
    height: calc(100vh - 56px);
  }

  .cover__content {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 5;
    position: relative;

    .logo {
      max-width: 800px;
      margin-bottom: 20px;

      @media (min-resolution: 108dpi) {
        max-width: 600px;
      }

      @media screen and (max-width: 1316px) {
        max-width: 600px;
      }

      @media screen and (max-width: 1024px) {
        max-width: 400px;
      }

      @media screen and (max-width: 768px) {
        max-width: 300px;
      }

      @media screen and (max-width: 420px) {
        max-width: 100%;
      }
    }

    .wave {
      max-width: 100px;
      margin-bottom: 40px;

      @media screen and (max-width: 1024px) {
        max-width: 60px;
      }

    }

    h1 {
      color: #ffffff;
      margin-bottom: 30px;
      max-width: 1000px;
      text-align: center;
      font-size: 38px;
      text-shadow: 1px 1px 1px #4B778D;

      @media (min-resolution: 108dpi) {
        font-size: 30px;
      }

      @media screen and (max-width: 1024px) {
        font-size: 30px;
      }

      @media screen and (max-width: 768px) {
        font-size: 26px;
      }

      @media screen and (max-width: 420px) {
        font-size: 24px;
      }
    }

    .button {
      box-shadow: 0 0 4px #4B778D;
    }
  }
}

.waves-animation {
  position: absolute;
  width: 100%;
  height: 143px;/*PNG*/
  bottom: -5px;
  left:0;
  background-image: url('images/wave-animation.png');
  //background-size: contain;
  animation: anim 10s linear infinite;
}
.waves-animation:before{
  content: '';
  position: absolute;
  width: 100%;
  height: 143px;
  top:0;
  left:0;
  background-image: url('images/wave-animation.png');
  opacity: 0.4;
  animation: anim-rev 10s linear infinite;

}
.waves-animation:after{
  content: '';
  position: absolute;
  width: 100%;
  height: 143px;
  top:0;
  left:0;
  background-image: url('images/wave-animation.png');
  opacity: 0.6;
  animation-delay: -5s;
  animation: anim 20s linear infinite;

}
@keyframes anim {
  0%
  {
    background-position: 0;
  }
  100%
  {
    background-position: 1360px;
  }
}
@keyframes anim-rev {
  0%
  {
    background-position: 1360px;
  }
  100%
  {
    background-position: 0;
  }
}
</style>
