<template>
  <div class="form form--book">
    <div class="columns is-multiline m-0">
      <div class="column is-6">
        <b-field label="Ime">
          <b-input v-model="formData.firstName"></b-input>
        </b-field>
      </div>
      <div class="column is-6">
        <b-field label="Prezime">
          <b-input v-model="formData.lastName"></b-input>
        </b-field>
      </div>

      <div class="column is-12">
        <b-field label="Email">
          <b-input
              v-model="formData.email"
              type="email"
          ></b-input>
        </b-field>
      </div>
      <div class="column is-12">
        <b-field label="Broj telefona">
          <b-input
              v-model="formData.phone"
              type="phone"
          ></b-input>
        </b-field>
      </div>
      <div class="column is-12">
        <b-field label="Poruka">
          <b-input
              v-model="formData.message"
              maxlength="3000"
              type="textarea"
          ></b-input>
        </b-field>
      </div>
    </div>

    <div class="column is-12">
      <form class="form" :name="`contact`" netlify netlify-honeypot="bot-field" method="post">
        <input type="hidden" name="form-name" :value="`contact`" />
        <div class="columns is-multiline" style="display: none;">
          <div class="column is-6 is-offset-3">
            <input class="form__input" type="text" id="firstName" name="First Name" :value="formData.firstName">
          </div>
          <div class="column is-6 is-offset-3">
            <input class="form__input"  type="text" id="lastName" name="Last Name" :value="formData.lastName">
          </div>
          <div class="column is-6 is-offset-3">
            <input class="form__input"  type="email" id="email" name="Email"   :value="formData.email">
          </div>
          <div class="column is-6 is-offset-3">
            <input class="form__input"  type="phone" id="phone" name="Phone"   :value="formData.phone">
          </div>
          <div class="column is-6 is-offset-3">
            <input class="form__input" name="Message" id="message" :value="formData.message"/>
          </div>
        </div>
        <div class="columns m-0">
          <div class="column p-0 is-12 has-text-right">

            <button class="button m-t-10">
                <span class="text">
                  Kontaktiraj
                </span>
              <span class="dot"></span>
              <span class="icon-wrapper">
                </span>
            </button>
          </div>

        </div>
      </form>

    </div>


  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
class ContactForm extends Vue {
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  }

}

export default ContactForm;
</script>

<style lang="scss">
.form--book {
}

</style>
