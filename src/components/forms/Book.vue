<template>
  <div class="form form--book">
    <div class="columns is-multiline m-0">
      <div class="column is-6">
        <b-field>
          <b-input v-model="formData.name" :placeholder="$t(`form.name`)"></b-input>
        </b-field>
      </div>
      <div class="column is-6">
        <b-field>
          <b-select
              :placeholder="$t(`form.apartment`)"
              v-model="formData.apartment"
              expanded
          >
            <option v-for="(a, i) in apartmentOptions" :key="`apartment-option-${i}`" :value="a.value">
              {{a.text}}
            </option>
          </b-select>
        </b-field>
      </div>
      <div class="column is-12">
        <b-field>
          <b-input
              v-model="formData.email"
              :placeholder="$t(`form.email`)"
              type="email"
              maxlength="30"
          ></b-input>
        </b-field>
      </div>
      <div class="column is-12">
        <b-field>
          <b-input
              v-model="formData.phone"
              :placeholder="$t(`form.phone`)"
          ></b-input>
        </b-field>
      </div>
      <div class="column is-6">
        <b-field>
          <b-datepicker
              v-model="formData.arrivalDate"
              :placeholder="$t(`form.arrivalDate`)"
              :min-date="new Date()"
          >
          </b-datepicker>
        </b-field>
      </div>
      <div class="column is-6">
        <b-field>
          <b-datepicker
              v-model="formData.departureDate"
              :placeholder="$t(`form.departureDate`)"
              :min-date="formData.arrivalDate || new Date()"
          >
          </b-datepicker>
        </b-field>
      </div>
      <div class="column is-6">
        <b-field>
          <b-numberinput
              v-model="formData.adults"
              :placeholder="$t(`form.adultsNumber`)"
              class="full-width"
              :controls="false"
          >
          </b-numberinput>
        </b-field>
      </div>
      <div class="column is-6">
        <b-field>
          <b-numberinput
              v-model="formData.children"
              :placeholder="$t(`form.childrenNumber`)"
              class="full-width"
              :controls="false"
          >
          </b-numberinput>
        </b-field>
      </div>
      <div class="column is-12">
        <b-field>
          <b-input
              v-model="formData.message"
              maxlength="3000"
              type="textarea"
              :placeholder="$t(`form.message`)"
          ></b-input>
        </b-field>
      </div>
    </div>

    <div class="column is-12">
      <form class="form" :name="`book`" netlify netlify-honeypot="bot-field" method="post">
        <input type="hidden" name="form-name" :value="`book`" />
        <div class="columns is-multiline" style="display: none;">
          <div class="column is-6 is-offset-3">
            <input class="form__input" type="text" id="name" name="Name" :value="formData.name">
          </div>
          <div class="column is-6 is-offset-3">
            <input class="form__input"  type="text" id="apartment" name="Apartment" :value="formData.apartment">
          </div>
          <div class="column is-6 is-offset-3">
            <input class="form__input"  type="email" id="email" name="Email"   :value="formData.email">
          </div>
          <div class="column is-6 is-offset-3">
            <input class="form__input"  type="text" id="phone" name="Phone"  :value="formData.phone">
          </div>
          <div class="column is-6 is-offset-3">
            <input class="form__input" name="Arrival Date" id="arrivalDate"  :value="formData.arrivalDate"/>
          </div>
          <div class="column is-6 is-offset-3">
            <input class="form__input" name="Departure Date" id="departureDate"  :value="formData.departureDate"/>
          </div>
          <div class="column is-6 is-offset-3">
            <input class="form__input" name="Adults" id="adults" :value="formData.adults"/>
          </div>
          <div class="column is-6 is-offset-3">
            <input class="form__input" name="Children" id="children" :value="formData.children"/>
          </div>
          <div class="column is-6 is-offset-3">
            <input class="form__input" name="Message" id="message" :value="formData.message"/>
          </div>
        </div>
        <div class="columns m-0">
          <div class="column p-0 is-12 has-text-right">

              <button class="button m-t-10">
                <span class="text">
                  {{ $t(`form.book`) }}
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
import {Component, PropSync} from 'vue-property-decorator';

@Component
class Book extends Vue {
  @PropSync('apartment', {default: null})

  created() {

  }

  formData = {
    name: '',
    apartment: null,
    email: '',
    phone: '',
    arrivalDate: null,
    departureDate: null,
    adults: null,
    children: null,
    message: '',
  }

  get apartmentOptions() {
    return [
      {
        id: 1,
        value: 'Apartment 1',
        text: `${this.$t(`form.apartment`)} 1`,
      },
      {
        id: 2,
        value: 'Apartment 2',
        text: `${this.$t(`form.apartment`)} 2`,
      },
      {
        id: 3,
        value: 'Apartment 3',
        text: `${this.$t(`form.apartment`)} 3`,
      },
    ];
  }

  declineKeys(event, parameters){
    if (parameters.includes(event.key)) event.preventDefault();
  }

  mounted() {
    if(this.apartment) {
      const apartmentOption = this.apartmentOptions.find(a => {
        return a.id === this.apartment.id;
      });

      Vue.set(this.formData, 'apartment', apartmentOption.value);
    }
  }

}

export default Book;
</script>

<style lang="scss">
.form--book {
}

</style>
