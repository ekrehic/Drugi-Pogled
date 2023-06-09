<template>
  <div id="contact" class="section contact">
    <div class="contact__block">
      <div class="contact__block__bg"></div>
      <h2 class="has-wave-centered">
        {{$t('contact.contactUs')}}
        <span>
          <img class="wave" src="@/assets/images/wave-yellow.png" alt="Yellow river drina wave"/>
        </span>
      </h2>
      <p>
        Redžići 50, Bratunac 75420
      </p>
      <p>
        Bosna i Hercegovina
      </p>
      <div class="contact__phones">
        <p class="contact__phone">
          +41767923562
        </p>
        <p class="contact__phone">
          +38766448280
        </p>
      </div>
      <p>
        info@riverdrina.ba
      </p>
      <div class="contact__ctas">
        <button class="button" @click="modals.contact = true;">
          {{ $t(`contact.contactUs`) }}
        </button>
        <button class="button" @click="modals.book = true;">
          {{ $t(`contact.bookNow`) }}
        </button>
      </div>
    </div>

    <b-modal v-model="modals.book">
      <div class="modal__body">
        <div class="is-flex is-justify-content-center is-align-items-center p-b-20">
          <img class="wave" src="@/assets/images/wave-green.png" alt="Green river drina wave"/>
        </div>
        <book/>
      </div>
    </b-modal>
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
    book: false,
    contact: false,
  }
}

export default Contact;
</script>

<style lang="scss">
.contact {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("images/RiverDrina_contact.png");
  background-size: cover;
  background-position: center;

  .contact__block {
    position: relative;
    padding: 20px 40px;
    text-align: center;
    margin: 20px 0;

    .contact__block__bg {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(75, 119, 141, 0.2);
      box-shadow: 0 4px 30px rgba(75, 119, 141, 0.1);
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
      border-radius: 16px;
      border-top: 1px solid #28B5B5;
      top: 0;
      left: 0;
      z-index: 0;
    }

    >:not(.contact__block__bg) {
      z-index: 1;
      position: relative;
    }

    h2, p {
      color: #fff;
    }

    p {
      padding: 5px;
    }

    .contact__phones {
      display: flex;
      justify-content: center;
      align-items: center;

      .contact__phone {
        padding: 5px 10px;

        &:first-child {
          border-right: 2px solid #F8B400;
        }
      }
    }

    .contact__ctas {
      padding-top: 20px;

      .button {
        margin: 5px 10px;
      }
    }
  }
}
</style>
