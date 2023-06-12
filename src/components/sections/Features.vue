<template>
  <div class="section features">
    <div class="columns is-multiline">
      <div v-for="f in features" :key="`feature-${f.name}`" class="column is-2">
        <div class="feature">
          <img :src="f.icon" :alt="f.name">
          <h2 v-html="f.name"/>
        </div>
      </div>
    </div>
    <h3 class="has-text-centered">
      Tijekom terapijskog rada
      <span class="has-text-weight-semibold">
        drugi pogled
      </span>
      na stvari često može pomoći da dođemo do „aha“ momenta ili uvida, nešto što nam je cijelo vrijeme bilo tu negdje, ali jedno pravo pitanje od strane terapeuta osvijetlilo ga je i dovelo na
      <span class="has-text-weight-semibold">
        svjesnu razinu.
      </span>
      <span class="is-block"></span>
      Pozivam vas na putovanje tijekom kojega ćemo
      <span class="has-text-weight-semibold">
        zajedno istraživati
      </span>
      druge poglede i perspektive kako biste došli u dublji
      <span class="has-text-weight-semibold">
        kontakt sa samim sobom
      </span>
      i otkrili dijelove sebe koji su vam bili nevidljivi, a koji vam mogu pomoći da živite
      <span class="has-text-weight-semibold">
        ispunjeniji život.
      </span>
      <span class="has-text-weight-semibold is-block">
        Čekam vas.
      </span>
    </h3>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
class Features extends Vue {
  get features() {
    return [
      {
        name: 'Individualno <span class="is-block-desktop">savjetovanje</span>',
        icon: require('@/assets/images/features/individulano_savjetovanje.png'),
      },
      {
        name: 'Partnersko <span class="is-block-desktop">savjetovanje</span>',
        icon: require('@/assets/images/features/partnersko_savjetovanje.png'),
      },
      {
        name: '<span class="is-block-desktop"> Savjetovanje </span> za mlade',
        icon: require('@/assets/images/features/savjetovanje_za_mlade.png'),
      },
    ];
  }
}

export default Features;
</script>

<style lang="scss">
.features.section {
  padding-top: 60px;
  padding-bottom: 40px;

    .columns {
      justify-content: center;
      //
      //.column {
      //  width: unset;
      //}
    }

  .feature {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      height: 80px;
      width: auto;

      @media (min-resolution: 240dpi) {
        height: 60px;
      }

      @media screen and (max-width: 768px) {
        height: 40px;
      }
    }

    h2 {
      font-size: 24px;
      text-transform: uppercase;
      text-align: center;
      line-height: 28px;
      padding-top: 20px;

      @media (min-resolution: 208dpi) {
        font-size: 22px;
      }

      @media screen and (max-width: 1024px) {
        font-size: 20px;
      }
    }
  }

  h3 {
    max-width: 1240px;
    margin: 40px auto 0;
  }
}
</style>
