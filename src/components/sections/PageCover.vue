<template>
    <div class="cover">
      <div class="cover__content section">
        <img class="logo" src="@/assets/images/drugi-pogled-logo.png" alt="DRUGI POGLED"/>
        <h3 >
          Drugi pogled nudi usluge
          <span class="has-text-weight-semibold">
            individualnog i partnerskog savjetovanja
          </span>
           koristeći metode i tehnike
          <span class="has-text-weight-semibold">
            Gestalt terapije
          </span>
          .
          <span class="is-block"></span>
          Savjetovanje je namijenjeno
          <span class="has-text-weight-semibold">
            mladima i odraslima
          </span>
          , a s ciljem unapređenja mentalnog zdravlja te
          <span class="has-text-weight-semibold">
            poboljšanja kvalitete života
          </span>
          naših klijenata.
        </h3>
        <button class="button is-large is-green" @click="modals.contact = true">
          Zatražite termin
        </button>
      </div>
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
  height: calc(100vh - 72px);
  background-image: url("images/DrugiPogled-cover.png");
  background-position: bottom;

  @media screen and (max-width: 1024px) {
    min-height: calc(100vh - 56px);
  }

  .cover__content {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 5;
    position: relative;
    padding: 40px 40px 80px;

    .logo {
      max-width: 380px;
      margin-bottom: 20px;

      @media screen and (max-width: 1024px) {
        max-width: 300px;
      }

      @media screen and (max-width: 768px) {
        max-width: 200px;
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

    h3 {
      //color: #ffffff;
      margin-bottom: 30px;
      //max-width: 1000px;
      text-align: center;
      //font-size: 20px;
     // text-shadow: 1px 1px 1px rgba(34, 47, 79, 0.2);

      //@media (min-resolution: 108dpi) {
      //  font-size: 30px;
      //}

      //@media screen and (max-width: 1024px) {
      //  font-size: 30px;
      //}
      //
      //@media screen and (max-width: 768px) {
      //  font-size: 26px;
      //}
      //
      //@media screen and (max-width: 420px) {
      //  font-size: 24px;
      //}
    }

    .button {
      box-shadow: 0 0 4px #4B778D;
    }
  }
}
</style>
