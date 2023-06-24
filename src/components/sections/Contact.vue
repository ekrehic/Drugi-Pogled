<template>
  <div id="contact" class="contact">
    <a
        href="https://www.google.com/maps/place/Hercegova%C4%8Dka+ul.+59,+10000,+Zagreb,+Hrvatska/@45.8165184,15.954579,17z/data=!3m1!4b1!4m6!3m5!1s0x4765d6df9c4958d3:0x3a845637937cd51d!8m2!3d45.8165184!4d15.9571539!16s%2Fg%2F11ft0lclvk?entry=ttu"
        class=" contact__map lh-0"
        target="_blank"
    >
      <img src="@/assets/images/map.jpg" alt="Drugi pogled" class="is-hidden-mobile"/>
      <img src="@/assets/images/map-mobile.jpg" alt="Drugi pogled" class="is-hidden-tablet"/>
    </a>
    <div class="contact__content">
      <div class="contact__info">
        <h1 class="has-text-centered p-b-15">
          Kontakt
        </h1>

        <div class="contact__info-data is-flex is-flex-direction-column" style="gap: 15px;">
          <div class="data is-flex is-align-items-center" style="gap: 10px">
            <svg-icons icon="location" stroke="#22625D"/>
            <p>
              Hercegovačka ulica 59, 10000 Zagreb
            </p>
          </div>
          <div class="data is-flex is-align-items-center" style="gap: 10px">
            <svg-icons icon="phone" stroke="#22625D"/>
            <p>
              +385 98 817 833
            </p>
          </div>
          <div class="data is-flex is-align-items-center" style="gap: 10px">
            <svg-icons icon="mail" stroke="#22625D"/>
            <p>
              info@drugipogled.hr
            </p>
          </div>
        </div>

        <button class="button is-fullwidth" @click="modals.contact = true">
          Kontaktirajte nas
        </button>
      </div>
    </div>

    <b-modal v-model="modals.contact">
      <div class="modal__body">
        <contact-form/>
      </div>
    </b-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Book from "@/components/forms/Book.vue";
import ContactForm from "@/components/forms/ContactForm.vue";

@Component({
  components: {
    Book,
    ContactForm,
  }
})
class Contact extends Vue {
  modals = {
    contact: false,
  }
}

export default Contact;
</script>

<style lang="scss">
.contact {
  background: #222F4F;

  .contact__map {
    width: 100vw;

    img {
      width: 100%;
    }
  }

  .contact__content {
    background: #222F4F;
    min-height: 350px;

    .contact__info {
      background: #fff;
      position: relative;
      box-shadow: 2px 4px 20px rgba(34, 47, 79, 0.5);
      border-radius: 4px;
      width: 45%;
      margin: -100px auto;
      padding: 20px 40px;

      @media screen and (max-width: 1024px) {
        width: 65%;
        margin: -80px auto;
      }

      @media screen and (max-width: 768px) {
        width: 80%;
        margin: -180px auto;
      }

      @media screen and (max-width: 520px) {
        width: 85%;
        margin: -140px auto;
        padding: 20px;
      }


      .contact__info-data {
        margin-bottom: 30px;

        .data {
          @media screen and (max-width: 768px) {
            flex-direction: column;

            > * {
              text-align: center;
            }
          }

          p {
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
