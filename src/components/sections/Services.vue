<template>
  <div class="section services" id="services">
    <h1 class="has-text-centered">
      Usluge i cjenik
    </h1>

    <div class="columns is-multiline is-justify-content-center p-t-20 p-b-20" style="gap: 30px;">
      <div v-for="s in services" :key="`service-${s.name}`" class="service">
          <div class="title">
            <h2 v-html="s.name"/>
          </div>
          <p v-text="s.price" class="price"></p>
          <div class="separator"></div>
          <p v-text="s.duration" class="duration"></p>
      </div>
    </div>
    <p>
      Savjetovanje je moguće dogovoriti u živo ili u online okruženju putem Skypea, Google Meeta ili Zooma.
    </p>
    <p>
      Radno vrijeme prema dogovoru.
    </p>

<!--    <p class="p-t-10 info">-->
<!--      Obveznik nije u sustavu PDV-a, PDV nije obračunat temeljem čl. 90 st.1 i st.2 Zakona o PDV-u (Narodne novine br. 73/13)-->
<!--    </p>-->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
class Services extends Vue {
  get services() {
    return [
      {
        name: '<span class="is-block-desktop">Individualno savjetovanje</span> <span class="is-block-desktop"> za mlade punoljetne osobe,</span> studente i nezaposlene',
        price: '25€',
        duration: '60 minuta',
      },
      // {
      //   name: '<span class="is-block-desktop">Individualno savjetovanje</span> za mlade do 18 godina',
      //   price: '27€',
      //   duration: '60 minuta',
      // },
      {
        name: '<span class="is-block-desktop">Individualno savjetovanje</span> za zaposlene',
        price: '35€',
        duration: '60 minuta',
      },
      {
        name: '<span class="is-block-desktop">Partnersko savjetovanje</span>',
        price: '55€',
        duration: '90 minuta',
      },
    ];
  }
}

export default Services;
</script>

<style lang="scss">
.services.section {
  background: #DED0BF;
  text-align: center;

  h1 {
    padding-bottom: 12px;
  }

  > * {
    text-align: center;
  }

  .service {
    background: #F8F5F1;
    padding: 20px;

    @media screen and (max-width: 768px) {
      margin-bottom: 20px;
    }

    > * {
      text-align: center;
    }

    .title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 72px;
      margin-bottom: 10px;

      h2 {
        font-size: 20px;
        text-transform: uppercase;
        text-align: center;
        line-height: 24px;

        @media (min-resolution: 208dpi) {
          font-size: 18px;
        }

        @media screen and (max-width: 1024px) {
          font-size: 18px;
        }
      }
    }

    .price {
      font-size: 34px;
    }

    .duration {
      font-size: 20px;
    }

    .separator {
      height: 2px;
      width: 50%;
      background: #DED0BF;
      margin: 10px auto;
    }
  }

  .info {
    font-size: 12px;
    color: #fff;
  }
}


</style>
